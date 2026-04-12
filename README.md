# Muhammad Qaseem — Portfolio

A modern, minimal personal portfolio built with **Next.js 14**, **Tailwind CSS**, and smooth scroll-triggered animations.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ installed → https://nodejs.org
- Git installed → https://git-scm.com

### Steps

```bash
# 1. Clone or download this folder, then navigate into it
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser at:
http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, fonts, animations
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Main page assembling all sections
├── components/
│   ├── Navbar.jsx        # Sticky navbar with mobile menu
│   ├── Hero.jsx          # Hero with typing animation
│   ├── About.jsx         # About me section
│   ├── Projects.jsx      # Project cards with category badges
│   ├── Skills.jsx        # Animated skill bars + tech badges
│   ├── Experience.jsx    # Timeline for work & education
│   ├── Contact.jsx       # Contact form + social links
│   ├── Footer.jsx        # Footer
│   ├── SectionHeading.jsx # Reusable heading component
│   └── useReveal.js      # Custom hook for scroll animations
├── public/               # Static assets (add your photo here)
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 🌐 Deploying to Vercel (Free)

### Option 1 — Via GitHub (Recommended)

1. Push this folder to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to https://vercel.com and sign in with GitHub
3. Click **"Add New Project"** → Import your repo
4. Leave all settings as default → click **Deploy**
5. Your live URL will be: `https://your-repo-name.vercel.app`

### Option 2 — Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## ✏️ Customization Guide

| What to change | Where |
|---|---|
| Your name, bio, email | `components/Hero.jsx`, `components/About.jsx` |
| Projects | `components/Projects.jsx` — edit the `projects` array |
| Skills & percentages | `components/Skills.jsx` — edit `skillGroups` array |
| Work experience | `components/Experience.jsx` — edit `experiences` array |
| Social links | `components/Hero.jsx`, `components/Contact.jsx`, `components/Footer.jsx` |
| Profile photo | Add `photo.jpg` to `/public/` then add `<Image>` in Hero |
| Color accent | `tailwind.config.js` → change `accent` color (default: amber `#F59E0B`) |

---

## 📧 Making the Contact Form Work

The form currently simulates submission. To send real emails:

**Option A — Formspree (easiest, free):**
1. Go to https://formspree.io and create a form
2. Get your form ID (e.g. `xpwzabcd`)
3. In `Contact.jsx`, replace the `handleSubmit` function with:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Option B — EmailJS:**
1. Sign up at https://emailjs.com
2. Follow their React integration guide

---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Icons:** Lucide React
- **Hosting:** Vercel

---

## 📸 Adding Your Profile Photo

1. Add your photo as `public/photo.jpg`
2. In `Hero.jsx`, add inside the grid:
```jsx
import Image from 'next/image';
// ...
<Image src="/photo.jpg" alt="Muhammad Qaseem" width={400} height={400} className="rounded-2xl" />
```
