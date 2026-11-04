# Federico Abeledo — portfolio (v2)

Static single-page portfolio: plain HTML, CSS, and vanilla JS. No framework, no build step.

## Run locally

From this repo root:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

Any static file server works (`npx serve`, etc.). Use HTTP(S), not `file://`, so `fetch` can load `content/*.json`.

## Edit content

Copy lives in:

- `content/en.json` — English (also shipped in `index.html` for no-JS)
- `content/es.json` — Spanish (applied by `js/main.js`)

Change strings there; reload the page. Theme and language preferences persist in `localStorage`.

Project repo links are in each project’s `links` array (`labelKey`: `source` | `backend` | `frontend`). Dual-repo projects show **Backend ↗** / **Frontend ↗**; others use **Source ↗** / **Código ↗**.

Contact URLs used by the page:

- Email: `fedeabeledo01@gmail.com`
- LinkedIn: https://linkedin.com/in/federico-abeledo
- GitHub: https://github.com/fedeabeledo
- WhatsApp: https://wa.me/5491153230016

## Deployment (GitHub Pages)

- Workflow: `.github/workflows/pages.yml`
- Trigger: push to `main` (or manual `workflow_dispatch`)
- Publishes the **repo root** with `actions/configure-pages`, `upload-pages-artifact`, and `deploy-pages`
- `.nojekyll` is present so Pages does not run Jekyll
- `CNAME` is set to `fedeabeledo.com`

Merging or pushing to `main` **publishes** the live site. Review on branch `v2` first.

Pages is already configured for **GitHub Actions** (not “deploy from a branch”).

## Assets

| Path | Notes |
|------|--------|
| `img/photo.jpg` | Square portrait (1:1) |
| `img/cert-*.svg` / `img/cert-hack4u.png` | Issuer logos on cert cards |
| `cv/Federico-Abeledo-CV-EN.pdf` | English CV |
| `cv/Federico-Abeledo-CV-ES.pdf` | Spanish CV |

AZ-900 and both CCNA cards link out to Credly / Microsoft Learn verify URLs from `content/*.json` (`badgeUrl`).

## Security headers GitHub Pages cannot send

The handoff CSP and related headers cannot be fully applied as HTTP response headers on GitHub Pages. This site adapts as follows:

| Control | Status on Pages |
|---------|-----------------|
| **CSP** | Delivered via `<meta http-equiv="Content-Security-Policy">` (first after charset). `frame-ancestors` is omitted — ignored in meta CSP. |
| **Referrer-Policy** | `<meta name="referrer" content="strict-origin-when-cross-origin">` |
| **X-Frame-Options / frame-ancestors** | **Not available** — Pages cannot set these headers; meta CSP cannot enforce framing protection. |
| **X-Content-Type-Options: nosniff** | **Not available** as a response header on Pages. |
| **Permissions-Policy** | **Not available** on Pages. |
| **Custom HSTS** | **Not available** as a custom header; HTTPS is enforced in the Pages settings for the custom domain. |

Do not add `_headers` or `vercel.json` for this host — Pages will not use them.
