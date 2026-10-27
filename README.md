# SATYA SAI NITHIN REDDY NALLAMILLI — Professional Portfolio

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Node-Express-black?logo=node.js)](https://expressjs.com/)
[![Azure Certified](https://img.shields.io/badge/Microsoft%20Certified-AZ--900-0078D4?logo=microsoftazure)](https://learn.microsoft.com/)
[![OCI Certified](https://img.shields.io/badge/Oracle%20Cloud-Foundations%20Associate-F80000?logo=oracle)](https://oracle.com/)

A modern, high-performance, and responsive personal portfolio website crafted for recruiters, hiring managers, and collaborators to showcase technical projects, verified multi-cloud credentials, digital forensics research, and software engineering capabilities.

---

## 👨‍💻 Candidate Overview

- **Full Name**: SATYA SAI NITHIN REDDY NALLAMILLI
- **Current Education**: B.Tech in Computer Science and Engineering (4th Year, Passout 2027)
- **Institution**: KL University (KLEF), Vijayawada, Andhra Pradesh, India
- **Specialization**: Cybersecurity & Blockchain Technology
- **Academic Distinction**: **8.29 CGPA** (B.Tech) · **10.0 CGPA** (Secondary School Certificate)
- **Target Fresher Roles**: Cybersecurity Analyst, Security Engineer, Software Developer, Cloud Associate
- **GitHub**: [https://github.com/nithin-1437](https://github.com/nithin-1437)
- **LinkedIn**: [https://www.linkedin.com/in/nallamilli-nithin-reddy/](https://www.linkedin.com/in/nallamilli-nithin-reddy/)
- **Contact Email**: `nallamillinithinreddy876@gmail.com`

---

## 🏛️ Project Architecture

The project is cleanly decoupled into separate **Frontend** and **Backend** directories:

```
Portfolio/
├── frontend/                     # Modern React + Vite Client
│   ├── public/
│   │   ├── favicon.svg           # Cyber shield vector favicon
│   │   ├── profile.jpg           # Authentic professional headshot
│   │   ├── resume.pdf            # Authentic resume PDF
│   │   └── certificates/         # High-resolution rendered certificate previews & PDFs
│   │       ├── azure-fundamentals.png
│   │       ├── azure-fundamentals.pdf
│   │       ├── oracle-cloud.png
│   │       ├── oracle-cloud.pdf
│   │       ├── aviatrix-mcna.png
│   │       ├── aviatrix-mcna.pdf
│   │       ├── automation-anywhere.png
│   │       └── automation-anywhere.pdf
│   ├── src/
│   │   ├── components/           # Modular React components
│   │   │   ├── Navbar.jsx        # Glassmorphism navigation with theme toggle
│   │   │   ├── Hero.jsx          # High-impact hero with badges and CTA buttons
│   │   │   ├── About.jsx         # Academic trajectory, pillars, and education timeline
│   │   │   ├── Skills.jsx        # Interactive skill tabs, search, and proficiency bars
│   │   │   ├── Projects.jsx      # Filterable project cards with modal integration
│   │   │   ├── ProjectModal.jsx  # Deep-dive architecture and contribution modal
│   │   │   ├── Certifications.jsx# 4 industry certifications with verification links
│   │   │   ├── CertificateModal.jsx # Zoomable certificate image preview lightbox
│   │   │   ├── Achievements.jsx  # Key milestones and academic distinctions
│   │   │   ├── ResumeSection.jsx # Resume highlight matrix with download & new tab view
│   │   │   ├── Contact.jsx       # Direct channels with copy-to-clipboard & contact form
│   │   │   └── Footer.jsx        # Quick links, copyright, and back-to-top trigger
│   │   ├── data/
│   │   │   └── portfolioData.js  # Central configuration file for all user content
│   │   ├── App.jsx               # Root layout & dark/light theme state
│   │   ├── index.css             # Tailwind CSS, cyber grid, & glassmorphism utilities
│   │   └── main.jsx              # Application entry point
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js            # Configured with proxy to backend API (/api)
│
├── backend/                      # Express.js REST API Service
│   ├── server.js                 # API endpoints (/api/health, /api/contact)
│   ├── .env.example              # Environment variables template
│   ├── README.md                 # Backend documentation
│   └── package.json
│
├── package.json                  # Root npm scripts for simultaneous operations
├── .gitignore                    # Git ignore file for node_modules, dist, env
└── README.md                     # Comprehensive setup and deployment guide
```

---

## 🚀 Quick Start & Local Execution

### Prerequisites
- Node.js (v18.x, v20.x, or v22.x)
- npm (v9.x or v10.x)

### 1. Install Dependencies
Run the command below from the root directory to install packages for both frontend and backend:
```bash
npm run install:all
```
*(Or install each separately: `cd frontend && npm install`, `cd ../backend && npm install`)*

### 2. Run the Development Server
From the root directory:
```bash
# Starts the frontend Vite dev server at http://localhost:5173
npm run dev
```

To run the backend API service simultaneously (in a separate terminal):
```bash
# Starts the backend API at http://localhost:5001
npm run backend
```

Open [http://localhost:5173](http://localhost:5173) in your browser to explore the portfolio!

---

## 🛠️ How to Customize Portfolio Data & Assets

All content is structured so you never have to modify deep component code.

### 1. Updating Personal Details, Projects, or Links
Edit [`frontend/src/data/portfolioData.js`](frontend/src/data/portfolioData.js):
- **Personal Details**: Update bio, roles, email, phone, LinkedIn, and GitHub links.
- **Projects**: Add new repositories, live demo URLs, problem/solution descriptions, or screenshots.
- **Skills**: Add or adjust proficiency percentages and technology categories.
- **Certifications**: Add new certifications with issue dates and verification URLs.
- **Achievements**: Add new awards, hackathon wins, or academic honors.

### 2. Updating Profile Photo
Replace [`frontend/public/profile.jpg`](frontend/public/profile.jpg) with your new square headshot image.

### 3. Updating Resume PDF
Replace [`frontend/public/resume.pdf`](frontend/public/resume.pdf) with your updated resume PDF.

### 4. Updating Certificate Previews
Place any new certificate images or PDFs in [`frontend/public/certificates/`](frontend/public/certificates/) and reference the path in `portfolioData.js`.

---

## 🔒 Verified Certifications Included

1. **Microsoft Certified: Azure Fundamentals (AZ-900)**
   - **Credential ID**: `5351E31A24350240` (Certification No: `C0CC29-AD95K5`)
   - **Earned**: June 16, 2025
   - **Direct Verification**: [Microsoft Learn Official Transcript](https://learn.microsoft.com/en-us/users/nallamillisatyasainithinreddy-0991/credentials/certification/azure-fundamentals?tab=credentials-tab)

2. **Oracle Cloud Infrastructure 2025 Certified Foundations Associate**
   - **Credential ID**: `102965148OCI25FNDCFA`
   - **Earned**: October 22, 2025 (Valid through Oct 22, 2027)
   - **Issuer**: Oracle University

3. **Aviatrix Certified Engineer – Multicloud Network Associate (ACE-MCNA)**
   - **Credential ID**: `ACE ID: 2025-28963`
   - **Earned**: October 22, 2025 (Valid through Oct 22, 2028)
   - **Issuer**: Aviatrix, Inc.

4. **Certified Essentials Automation Professional (RPA)**
   - **Credential ID**: `AAESSE2024A360 - 173360060`
   - **Earned**: February 2, 2026 (Valid through Feb 2, 2028)
   - **Issuer**: Automation Anywhere

---

## 🌐 Deployment Instructions

### Option A: Deploy Frontend to Vercel (Recommended & Fastest)

1. Push your repository to GitHub (see Git instructions below).
2. Go to [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your `Portfolio` repository.
4. Set the **Root Directory** to `frontend`.
5. The build framework will automatically detect **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. Your portfolio will be live with free global CDN and SSL in seconds!

### Option B: Deploy to GitHub Pages

1. In `frontend/vite.config.js`, if deploying to `https://nithin-1437.github.io/Portfolio/`, set `base: '/Portfolio/'`.
2. In `frontend/package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Install `gh-pages`:
   ```bash
   cd frontend && npm install -D gh-pages
   npm run deploy
   ```
4. In your GitHub repository settings under **Pages**, select the `gh-pages` branch.

### Option C: Backend Deployment (Render / Railway / Vercel Serverless)
- Deploy the `backend/` directory to [Render](https://render.com) or [Railway](https://railway.app) as a Node web service.
- Set the `CLIENT_URL` environment variable to your deployed frontend domain.

---

## 📦 Git & GitHub Setup Commands

To push this project to your GitHub account (`https://github.com/nithin-1437/Portfolio`):

```bash
# 1. Initialize git in the project root
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Professional portfolio with React, Vite, Tailwind & Express"

# 4. Set main branch
git branch -M main

# 5. Link to your GitHub repository
git remote add origin https://github.com/nithin-1437/Portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## ✅ Pre-Launch Recruiter Verification Checklist

- [x] **Hero Section**: Full name, availability pill, working CTA buttons, and authentic profile photograph.
- [x] **Resume Download**: Verified `/resume.pdf` loads the authentic PDF and opens cleanly in a new tab.
- [x] **All 4 Certifications**: Real credential IDs and verifiable Microsoft Learn & Oracle links.
- [x] **Interactive Modals**: Certificate lightbox and Project architectural breakdown working smoothly.
- [x] **Flagship Projects**: Problem statements, contributions, and technical features accurately stated without fabrication.
- [x] **Theme Toggle**: Dark navy cyber mode and high-contrast light mode toggle seamlessly.
- [x] **Responsive Layout**: Fluid layout on mobile, tablet, laptop, and ultra-wide displays.
- [x] **Contact Reliability**: Validated contact form connected to backend with instant mailto client fallback so messages are never dropped.
- [x] **Production Bundle**: `npm run build` verified with 0 errors.

---

© 2026 SATYA SAI NITHIN REDDY NALLAMILLI. Built with clean, maintainable modern web standards.
