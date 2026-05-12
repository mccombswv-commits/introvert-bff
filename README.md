# introvert-bff# 🛡️ Social Survival Kit

> **Tools for humans who find other humans... complicated.**

A full-stack AI-powered web app that helps people navigate social situations — from deciding whether to go, to declining gracefully, to escaping when it all goes wrong.

Live at **[www.socialsurvivalkit.com](https://www.socialsurvivalkit.com)**

---

## What It Does

Five core tools covering every stage of the social experience:

| Tool | What It Does |
|------|-------------|
| 🤔 **Should I Even Go?** | AI decision engine — get a verdict with actual reasoning, not guilt |
| 😇 **I Need the Words** | Decline, excuse, reach out, or exit — AI-written and tailored to your situation |
| 😈 **Go to the Dark Side** | Cover stories. Deliberately chosen. No judgment. |
| 🛡️ **Help Me Survive This** | Full event prep, conversation starters, exit lines, and escape planning |
| 🚨 **Get Me Out Now** | Emergency extraction — fake call, alarm, emergency text, and more |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JavaScript |
| Backend | Node.js + Express |
| AI | Anthropic Claude API (claude-sonnet-4-5) |
| Auth | Supabase |
| Hosting | Railway |
| Domain | Namecheap |

---

## Getting Started

### Prerequisites
- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com)
- A [Supabase](https://supabase.com) project with email auth enabled

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/social-survival-kit
cd social-survival-kit
npm install
```

### Environment Variables

Create a `.env` file or set the following in your hosting environment:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

The Supabase URL and anon key are configured directly in `index.html` and `app.html`.

### Run Locally

```bash
npm start
```

App runs at `http://localhost:3000`

---

## Project Structure

```
├── server.js        # Express server — serves files and proxies Claude API calls
├── app.html         # The full app UI — all 5 features, styling, and logic
├── index.html       # Login / sign-up screen (Supabase auth)
├── package.json     # Dependencies
└── README.md        # You are here
```

---

## How It Works

1. User visits the site and signs in via Supabase
2. They select a tool and fill in their situation
3. The frontend sends a prompt to `/api/claude` on the server
4. The server proxies the request to the Anthropic Claude API (keeping the API key server-side)
5. Claude generates a personalised response
6. The result is displayed in the app

The API key never touches the frontend — all Claude calls go through the server proxy.

---

## Features

- **Dual persona system** — Edgy and Sensitive modes with distinct AI tones
- **Generation-aware voice** — Gen Z, Millennial, Gen X, Boomer output styles
- **Social Battery tracker** — 5-dimension energy check-in that feeds into AI prompts
- **The Vault** — saves messages and excuses by person so you never repeat yourself
- **Refine feature** — iterate on AI output with feedback until it's exactly right
- **Emergency extraction** — fake call simulator, alarm trigger, emergency text, and more

---

## Deployment

This app is deployed on [Railway](https://railway.app) with automatic deploys from this GitHub repo. Push to main and Railway redeploys automatically.

---

## License

MIT — do what you want with the code. The Social Survival Kit name and brand are ours.

---

*Built with [Claude](https://claude.ai) · Powered by [Anthropic](https://anthropic.com)*
