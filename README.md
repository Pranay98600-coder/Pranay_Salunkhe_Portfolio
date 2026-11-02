# Pranay Salunkhe Portfolio

React and Vite portfolio site for Pranay Salunkhe.

## Local development

```bash
npm ci
npm run dev
```

The project targets Node 22. Node 20.19+ is also supported by the manifest.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

Vercel should use:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: `22.x`

The `vercel.json` rewrite keeps BrowserRouter routes working on refresh.

## Contact form

Set `VITE_CONTACT_API_URL` in the deployment environment to the HTTPS URL of the contact API. If it is not set, the form posts to `/api/contact`.
