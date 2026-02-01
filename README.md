# GitHub Pages Starter

A minimal static site ready to deploy on [GitHub Pages](https://pages.github.com/).

## Quick start

1. **Push this repo to GitHub**  
   Create a new repository and push this folder (or clone and add these files).

2. **Turn on GitHub Pages**  
   In the repo: **Settings → Pages → Source**: choose **Deploy from a branch**.  
   Branch: **main** (or **master**), folder: **/ (root)**. Save.

3. **Wait a minute**  
   Your site will be at `https://<username>.github.io/<repo-name>/`.

## Local preview

Open `index.html` in a browser, or use a simple server:

```bash
# Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Customize

- Edit **index.html** for content and structure.
- Edit **styles.css** for colors, fonts, and layout.
- Add more `.html` files and link to them from the nav or sections.

No build step required — just HTML and CSS.
