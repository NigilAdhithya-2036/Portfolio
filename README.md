# Nigil Adhithya - Portfolio

Modern interactive developer portfolio web application built with **React 19**, **Vite 8**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Three.js**.

## 🚀 Live Public URLs
- **GitHub Repository**: [https://github.com/NigilAdhithya-2036/Portfolio](https://github.com/NigilAdhithya-2036/Portfolio)
- **GitHub Pages**: [https://nigiladhithya-2036.github.io/Portfolio/](https://nigiladhithya-2036.github.io/Portfolio/)
- **Vercel / Netlify**: Compatible out of the box via `vercel.json` and `netlify.toml`.

---

## 🛠️ Architecture & Tech Stack
- **Framework**: React 19 + TypeScript
- **Build System**: Vite 8
- **Styling**: Tailwind CSS v4 + PostCSS
- **Animations & 3D**: Framer Motion, Three.js, `@react-three/fiber`, `@react-three/drei`, GSAP, tsParticles
- **Icons**: Lucide React

---

## 💻 Local Development

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`

### Installation & Execution
```bash
# Clone the repository
git clone https://github.com/NigilAdhithya-2036/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run dev server
npm run dev

# Production build test
npm run build
```

---

## 🐳 Docker Deployment

### Run Container via Docker Compose
```bash
docker compose up --build
```
Access the application locally at `http://localhost:8080`.

---

## 📦 Production Deployment

### 1. GitHub Pages (Automated CI/CD)
Pushing to the `main` branch automatically triggers `.github/workflows/deploy.yml`, building and publishing assets to the `gh-pages` branch.

### 2. Vercel
1. Import `NigilAdhithya-2036/Portfolio` in the Vercel Dashboard.
2. Vercel automatically reads `vercel.json` and deploys to `https://portfolio.vercel.app`.

### 3. Netlify
1. Connect repository to Netlify.
2. Netlify uses `netlify.toml` for zero-configuration deployment.
