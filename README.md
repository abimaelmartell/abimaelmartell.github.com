# abimaelmartell.github.com

> Personal website & blog for **Abimael Martell** – full-stack software engineer in Tijuana, México 🇲🇽

---

## ✨ Stack

| What                                   | Why                                                           |
|----------------------------------------|---------------------------------------------------------------|
| **Jekyll 4**                           | Fast static-site generator that plays nicely with GitHub Pages. |
| **Tailwind 2.0 + @tailwindcss/typography** | Utility-first styling & beautiful prose defaults.               |
| **PostCSS 8 (CLI)**                    | Runs Tailwind, autoprefixer, cssnano, and import in one shot.  |
| **BrowserSync**                        | Live-reload dev server on <http://localhost:4000>.             |
| **Ruby 3.1 + Bundler 2.2**             | Matches the lockfile for painless gem install.                |
| **Node 18 + npm scripts**              | No Gulp: simple scripts control CSS builds & BrowserSync.      |

---

## 🚀 Quick start

1. **Clone**

   ```bash
   git clone https://github.com/abimaelmartell/abimaelmartell.github.com.git
   cd abimaelmartell.github.com
   ```

2. **Ruby (rbenv)**

   ```bash
   rbenv install -s 3.1.4
   rbenv local 3.1.4
   gem install bundler -v 2.2.4
   bundle install
   ```

3. **Node (nodenv or nvm)**

   ```bash
   nodenv install -s 18.20.0
   nodenv local 18.20.0
   npm install
   ```

4. **Hack away!**

   ```bash
   npm start   # opens http://localhost:4000 with live-reload
   ```

### One-liners

| Task                                  | Command                  |
|---------------------------------------|--------------------------|
| Production build (outputs to `_site/`)| `npm run build`          |
| Rebuild CSS only (watch)              | `npm run dev:css`        |
| Rebuild Jekyll only (watch)           | `npm run dev:jekyll`     |

---

## 🗂 Project layout

```
.
├── _posts/            # blog posts (Markdown)
├── _includes/         # shared Jekyll templates
├── _css/              # source CSS (Tailwind entry = main.css)
├── assets/            # production CSS/JS after build
├── _site/             # generated site (git-ignored)
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛫 Deploying

The site is served straight from the **`_site/`** folder on GitHub Pages.  
On `main` pushes:

1. **CI** runs `npm run build`.  
2. The compiled `_site/` directory is published via Pages.

_Set up GitHub Pages to track the `gh-pages` branch or `/docs` folder if you split build & source._

---

## 🙏 Thanks

- Starter template: <https://github.com/taylorbryant/jekyll-starter-tailwind>

---

## 📝 License

MIT © Abimael Martell
