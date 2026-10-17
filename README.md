# Lutfiar's Portfolio

A responsive portfolio website built to present a developer profile, skills, selected projects, education, and contact information.

**Live website:** [lutfiar.me](https://lutfiar.me)

## Built With

- [SvelteKit](https://kit.svelte.dev/)
- [Svelte 5](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vite.dev/)

## Features

- Component-based page layout
- Home, About, Projects, Resume, and Contact sections
- Centralized profile content and project entries
- Responsive styling with Tailwind CSS

## Getting Started

### Prerequisites

Install a recent version of Node.js and npm.

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Type and Svelte checks

```bash
npm run check
```

### Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Where to Customize

Most profile and portfolio content is centralized in `src/lib/data/site.ts`. Update it to personalize:

- Name, role, location, and introduction
- Skills and tools
- Project descriptions and links
- Social links and contact details
- Education and experience entries

The page title is set in `src/routes/+page.svelte`; update it to match the final portfolio identity.

## Before Sharing the Site

Review the site content and replace all starter/sample details. In particular, make sure project links point to real projects, social links lead to your own profiles, and any experience, client counts, or achievement metrics are accurate. Also verify the resume file and every contact link before sharing the site publicly.

---

Built with SvelteKit and Tailwind CSS.
