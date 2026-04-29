# Scaler AI Personas — Chatbot

> Chat with three Scaler/InterviewBit personalities powered by Google Gemini AI.  
> **Assignment 01 | Prompt Engineering | Scaler Academy**

![Preview](https://img.shields.io/badge/Built%20with-Google%20Gemini-4285F4?style=flat&logo=google)
![License](https://img.shields.io/badge/license-MIT-green)

## Live Demo

🔗 **[Live App →](https://your-deployed-url.vercel.app)** *(replace with your Vercel/Netlify URL after deploying)*

## Personas

| Persona | Background |
|---|---|
| **Anshuman Singh** | Co-founder of Scaler & InterviewBit · Ex-Facebook Messenger · ACM ICPC World Finalist · IIIT Hyderabad |
| **Abhimanyu Saxena** | Co-founder of Scaler & InterviewBit · Ex-Fab.com NY · Sold first startup in college · IIIT Hyderabad |
| **Kshitij Mishra** | Head of Instructors at SST · Lead DSA & Java Instructor · Ex-Snapdeal · IIIT Hyderabad |

## Features

- 🎭 Three richly researched AI personas with distinct voices and styles
- 💬 Real-time chat powered by Google Gemini 1.5 Flash
- 🔄 Persona switching resets conversation automatically
- 💡 Suggestion chips per persona to jumpstart conversations
- ⌨️ Typing indicator while AI responds
- 🚨 Graceful error handling with user-friendly messages
- 📱 Fully responsive — mobile and desktop
- 🔐 API key stored in environment variables — never hardcoded

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Backend:** Node.js + Express (for secure API key injection)
- **AI API:** Google Gemini 1.5 Flash
- **Deployment:** Vercel / Netlify (static + serverless)

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/scaler-ai-personas.git
cd scaler-ai-personas/Assignment01
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_key_here
```

Get a free API key from: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

### 4. Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Add `GEMINI_API_KEY` in Vercel Environment Variables
4. Deploy — Vercel auto-detects Node.js

> **Note:** For pure static hosting (Netlify, GitHub Pages), use a Vercel serverless function or a proxy to keep the API key server-side.

## Repository Structure

```
Assignment01/
├── index.html          # Main UI — chat interface
├── style.css           # Dark theme, animations, responsive CSS
├── app.js              # Gemini API calls, system prompts, chat logic
├── server.js           # Express server — injects API key safely
├── package.json        # Dependencies
├── .env.example        # Environment variable template
├── .gitignore          # Prevents .env from being committed
├── prompts.md          # All three system prompts with annotations
├── reflection.md       # 400-word reflection on the assignment
└── README.md           # This file
```

## Prompt Engineering Approach

See [prompts.md](./prompts.md) for full documentation of all three system prompts.

Each prompt includes:
- ✅ Detailed persona description (background, values, communication style)
- ✅ Minimum 3 few-shot examples per persona
- ✅ Chain-of-Thought (CoT) reasoning instruction
- ✅ Output format specification
- ✅ Explicit constraints list

## Submission Checklist

- [x] GitHub repo is public
- [x] README.md with setup instructions and deployed link
- [x] prompts.md with all three system prompts + inline annotations
- [x] reflection.md (400+ words)
- [x] .env.example present; no real API key committed
- [x] App deployed and live
- [x] All three personas working
- [x] Persona switching resets conversation
- [x] API errors handled gracefully
- [x] UI is mobile-responsive
