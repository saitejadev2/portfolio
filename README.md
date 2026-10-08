# React Developer Portfolio

A responsive, single-page developer portfolio built with React and Vite.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Update portfolio content

Each section has a small, dedicated data file:

- `src/data/profile.js` — name, initials, location, and availability
- `src/data/hero.js` — introduction and hero buttons
- `src/data/about.js` — biography and career statistics
- `src/data/skills.js` — skill groups and technologies
- `src/data/projects.js` — project cards and links
- `src/data/experience.js` — employment history and résumé link
- `src/data/contact.js` — email and social links
- `src/data/navigation.js` — header navigation order

To add a project, copy one object inside the `projects` array in `src/data/projects.js` and update its values. The section components live in `src/components/sections`, shared components live in `src/components`, and `src/App.jsx` only handles page composition and behavior.

All visual styling remains in `styles.css`.

Add your résumé as `public/resume.pdf` if you want the résumé download button to work. Create the `public` folder when adding it.

## Build for production

```powershell
npm.cmd run build
```

Vite generates the deployable website in `dist/`.

## GitHub deployment workflow

1. Commit your changes.
2. Push them to GitHub.
3. Connect the repository to Vercel, Netlify, or Cloudflare Pages.
4. Use `npm run build` as the build command and `dist` as the output directory.

After the repository is connected, every push to the deployment branch automatically rebuilds and publishes the portfolio.
