# IH NASRI — Website

This repository contains a simple, responsive static website for IH NASRI.

## Structure

- `index.html` — Main site
- `css/style.css` — Styles
- `js/main.js` — Small JS for interaction
- `images/` — Add your images (placeholders included)
- `.github/workflows/` — Optional GitHub Actions workflow to deploy to gh-pages

## Quick start

1. Customize content in `index.html`, replace placeholder images in `images/`, and update the email in the contact form (`mailto:` link).
2. Commit and push to the `main` branch.
3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: `main` branch / `/ (root)`
   - Save. Your site will be published at `https://<your-username>.github.io/<repo>/` or via custom domain if set.

## Optional: automatic deploy to gh-pages

If you prefer automatic deployment to the `gh-pages` branch, enable the workflow file in `.github/workflows/pages.yml` (provided below). You may need to add a PAT or allow the Actions permission to create deployment. The workflow uses `peaceiris/actions-gh-pages`.

## Customize

- Replace text and images with your real content.
- To add new pages, add HTML files and link them from the nav.
- If you want a framework (React, Vue) or a generator (Jekyll, Hugo), tell me and I’ll convert this scaffold.

## License

Add your license file if needed (e.g., MIT).
