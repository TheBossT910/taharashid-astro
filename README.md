# Taha Rashid's Portfolio Website

[![Website](https://img.shields.io/website?url=https%3A//taharashid.com)](https://taharashid.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

A modern, minimal, and SEO-friendly portfolio website for Taha Rashid, a Software Engineering student at the University of Ottawa. The site showcases projects, development blogs, and professional experience.

🌐 **Live Site**: [taharashid.com](https://taharashid.com)

## ✨ Features

- **🎨 Modern Design**: Clean, responsive design with dark/light theme support
- **📝 Blog System**: Multiple blog categories including project devlogs and talks
- **🚀 Performance**: Built with Astro for optimal loading speeds
- **📱 Mobile-First**: Fully responsive across all device sizes
- **🔍 SEO Optimized**: Automatic sitemap generation and meta tags
- **⚡ Fast Development**: Hot module replacement and modern tooling

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **UI Framework**: [Vue.js](https://vuejs.org/) - Interactive components
- **Styling**: [UnoCSS](https://unocss.dev/) - Atomic CSS framework
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX support
- **Icons**: [Iconify](https://iconify.design/) - Comprehensive icon library
- **Deployment**: Hosted on [taharashid.com](https://taharashid.com)

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue/Astro components
│   ├── Header.vue      # Site navigation
│   ├── Footer.vue      # Site footer
│   ├── ListPosts.vue   # Blog post listings
│   └── ...             # Other components
├── content/            # Content collections
│   ├── blog/           # Blog posts organized by category
│   │   ├── koyomidevlogs/     # Koyomi project devlogs
│   │   ├── savepointdevlogs/  # SavePoint project devlogs
│   │   └── talks/             # Conference talks and presentations
│   └── pages/          # Static pages
├── layouts/            # Page layouts
│   └── BaseLayout.astro
├── pages/              # Route pages
│   ├── index.astro     # Homepage
│   ├── projects/       # Projects showcase
│   └── posts/          # Dynamic blog routes
├── utils/              # Utility functions
└── site-config.ts      # Site configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.1+ or 20.3.0+ or 21+
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheBossT910/taharashid-astro.git
   cd taharashid-astro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:1977`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## 📝 Content Management

### Adding Blog Posts

Blog posts are organized into categories under `src/content/blog/`:

- **Koyomi Devlogs** (`koyomidevlogs/`) - Development updates for the Koyomi anime tracker app
- **SavePoint Devlogs** (`savepointdevlogs/`) - Development updates for the SavePoint game collection platform
- **Talks** (`talks/`) - Conference presentations and technical talks

#### Blog Post Format

```markdown
---
title: "Your Post Title"
description: "Brief description of the post"
date: 2025-01-01
draft: false
tag: "optional-tag"
video: false
---

Your content here using Markdown or MDX...
```

### Adding Projects

Projects are defined in `src/pages/projects/data.ts`. Each project includes:

- Title and description
- Technology stack with icons
- Project image
- GitHub repository link
- Category (Personal/University)

## 🎨 Customization

### Site Configuration

Edit `src/site-config.ts` to customize:
- Personal information
- Social media links
- Navigation menu
- Footer links

### Styling

The site uses UnoCSS for styling. Custom styles can be added in:
- `uno.config.ts` - UnoCSS configuration
- Component-level styles using UnoCSS classes

### Theme

The site supports dark/light themes with automatic system preference detection. Theme toggle is available in the header.

## 📊 Analytics & SEO

- **Sitemap**: Automatically generated at `/sitemap-index.xml`
- **RSS Feed**: Available for blog posts
- **Meta Tags**: Configured for optimal social media sharing
- **Performance**: Optimized for Core Web Vitals

## 🚦 Featured Projects

### SavePoint
A modern web-first platform for video game collection management, built with Vue.js, Express.js, and Supabase.

### Koyomi Anime Tracker
iOS/macOS app for tracking anime viewing progress, developed with Swift and Firebase.

### Additional Projects
- SyncSlash 2D game (Unity/C#)
- Anki plugin for Japanese verb transitivity
- University coursework projects

## 🤝 Contributing

This is a personal portfolio site, but suggestions and bug reports are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is based on the Vitesse Astro Template by Kieran Wang.

- [MIT License](./LICENSE) © 2025 [Taha Rashid](https://github.com/TheBossT910)
- [MIT License](./LICENSE) © 2024 [Kieran Wang](https://github.com/kieranwv/) (Original template)

## 📞 Contact

- **Email**: taharashid710192@gmail.com
- **LinkedIn**: [taha-rashid192](https://www.linkedin.com/in/taha-rashid192/)
- **GitHub**: [TheBossT910](https://github.com/TheBossT910)
- **Instagram**: [thebosst710192](https://www.instagram.com/thebosst710192/)

---

*Built with ❤️ by Taha Rashid using Astro, Vue.js, and UnoCSS*
