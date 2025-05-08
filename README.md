# Kevin Erickson's Professional Portfolio

A modern, responsive portfolio website showcasing my experience as a Technology Leader and Innovation Architect in healthcare technology.

## Overview

This portfolio highlights my work in healthcare technology strategy, innovation architecture, and digital transformation. Built with React, TypeScript, and Tailwind CSS, it features:

* Responsive design optimized for all devices
* Modern UI with smooth animations
* Project showcase with detailed case studies
* Professional experience timeline
* Skills and expertise overview
* Contact information and professional links

## Technology Stack

* React 18
* TypeScript
* Tailwind CSS
* Vite
* Lucide React Icons

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment

This site is deployed to GitHub Pages and can be accessed at [https://kevinerickson.info](https://kevinerickson.info).

### Deployment Scripts (via `gh-pages`)

Ensure your `package.json` contains:

```json
"homepage": "https://kevinerickson.info",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Ensure `vite.config.ts` has:

```ts
export default defineConfig({
  base: '/',
  plugins: [react()],
});
```

---

## 🛠 Publishing Instructions

1. Export your project from Bolt.new. If your project is downloaded as a ZIP file:

   * Unzip it
   * Navigate into the `project/` folder where `package.json`, `vite.config.ts`, and `public/` are located
   * Run the following commands from there

2. Confirm that your custom domain is preserved in:

   ```
   public/CNAME
   ```

   With this content:

   ```
   kevinerickson.info
   ```

3. Run:

```bash
rm -rf dist
npm install
npm run build
npm run deploy
```

4. Wait 30–60 seconds for GitHub Pages to reflect the changes.

---

## 🧼 Reset Cache (if needed)

If things go sideways:

```bash
rm -rf dist
rm -rf node_modules/.cache/gh-pages
npm run build
npm run deploy
```

---

## ✅ GitHub Pages Settings

* Repo → Settings → Pages:

  * Source: `gh-pages` branch, `/ (root)`
  * Custom Domain: `kevinerickson.info`
  * Enforce HTTPS: ✅

---

## Contact

For professional inquiries, please reach out via:

* Email: [kevin@eightfold.consulting](mailto:kevin@eightfold.consulting)
* LinkedIn: [linkedin.com/in/kevinerickson](https://www.linkedin.com/in/kevinerickson/)

---

## 🤝 License

MIT or personal license by Kevin Erickson. Intended for personal use and demonstration.
