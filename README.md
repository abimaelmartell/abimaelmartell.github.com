# abimaelmartell.github.com

> Personal website & blog for **Abimael Martell** – full-stack software engineer in Tijuana, México 🇲🇽

---

## ✨ Stack

| What                                   | Why                                                           |
|----------------------------------------|---------------------------------------------------------------|
| **Jekyll 4**                           | Fast static-site generator that plays nicely with GitHub Pages. |
| **Tailwind 3.3 + @tailwindcss/typography** | Utility-first styling & beautiful prose defaults.               |
| **Ruby 3.1 + Bundler 2.2**             | Matches the lockfile for painless gem install.                |

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

3. **Build CSS**

   ```bash
   make
   ```

This will download the Tailwind standalone binary and build the CSS.

4. **Hack away!**

   ```bash
   bundle exec jekyll serve
   ```

### One-liners

| Task                                  | Command                  |
|---------------------------------------|--------------------------|
| Production build (outputs to `_site/`)| `bundle exec jekyll build`          |
| Build CSS only (outputs to `assets/`)| `make`        |
| Serve Jekyll (watch)           | `bundle exec jekyll serve`     |

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
└── Makefile
```

---

## 🛫 Deploying

This site is served from GitHub Pages. So any push to `main` will deploy the site. Also, the output of the `make` command is committed to the repo to avoid having to add an additional step to the deployment process.

---

## 🙏 Thanks

- Starter template: <https://github.com/taylorbryant/jekyll-starter-tailwind>

---

## 📝 License

MIT © Abimael Martell
