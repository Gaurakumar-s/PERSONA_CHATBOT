// api/chat.js — Vercel Serverless Function
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "GEMINI_API_KEY not configured on server." });

  const { systemPrompt, contents } = req.body;

  const callGemini = () => fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: { temperature: 0.85, maxOutputTokens: 512, topP: 0.95 },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
        ]
      })
    }
  );

  try {
    let geminiRes = await callGemini();

    // Auto-retry once after 3s if rate limited
    if (geminiRes.status === 429) {
      await new Promise(r => setTimeout(r, 3000));
      geminiRes = await callGemini();
    }

    const data = await geminiRes.json();
    if (!geminiRes.ok) {
      const msg = data?.error?.message || `Gemini API error ${geminiRes.status}`;
      if (geminiRes.status === 429) return res.status(429).json({ error: "Rate limit hit. Please wait 10 seconds and try again." });
      return res.status(geminiRes.status).json({ error: msg });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return res.status(500).json({ error: "Empty response from Gemini." });
    return res.status(200).json({ text });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
