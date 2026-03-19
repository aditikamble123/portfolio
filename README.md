# Aditi Kamble — Portfolio

> A cinematic, scrollytelling portfolio built for a Data Analyst & ML Engineer.

Live at → **[aditikamble.netlify.app](https://aditikamble.netlify.app)** *(update with your real URL once deployed)*

---

## ✨ Features

- **Scrollytelling Hero** — Canvas-based frame-scrubbing animation tied to scroll progress
- **About** — Bio, skills grid, and education at a glance
- **Experience** — Internship at Fireblaze Technologies with a clean meta/bullets layout
- **Projects** — Numbered list of 6 projects spanning Data Analytics, ML, AI and Frontend
- **Certificates** — 6 professional certifications (NASSCOM, Deloitte, Accenture, Microsoft, Google, Tata)
- **Contact & Footer** — Direct email, GitHub, LinkedIn and resume download
- Smooth **Framer Motion** animations throughout
- Fully **responsive** — mobile, tablet and desktop

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Canvas | HTML5 Canvas API (frame scrubbing) |
| Styling | Tailwind CSS |
| Deployment | [Netlify](https://netlify.com) |

---

## 🚀 Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/aditikamble123/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main page — assembles all sections
│   ├── layout.tsx        # Root layout & metadata
│   └── globals.css       # Global styles
├── components/
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── ScrollyCanvas.tsx # Canvas frame-scrubbing engine
│   ├── Overlay.tsx       # Scrollytelling text overlays
│   ├── About.tsx         # Bio, skills grid, education
│   ├── Experience.tsx    # Work history
│   ├── Projects.tsx      # Project list
│   ├── Certificates.tsx  # Credentials
│   └── Footer.tsx        # Contact & links
├── public/
│   ├── sequence/         # PNG frames for scroll animation
│   └── resume.pdf        # Downloadable resume
└── netlify.toml          # Netlify build config
```

---

## 🌐 Deploy on Netlify

The repo includes a `netlify.toml` — just connect the GitHub repo on [app.netlify.com](https://app.netlify.com) and it deploys automatically.

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 📬 Contact

**Aditi Kamble** — Data Analyst · ML Engineer · AI Engineer  
📧 [kamble04aditi@gmail.com](mailto:kamble04aditi@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/aditi-kamble-0a1646266/) · [GitHub](https://github.com/aditikamble123)  
📍 Nagpur, India
