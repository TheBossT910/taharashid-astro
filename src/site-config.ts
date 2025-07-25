export const siteConfig = {
  author: 'Taha Rashid',
  title: `Taha Rashid's Portfolio`,
  subtitle: `Taha Rashid's portfolio, with his blog and devlogs.`,
  description: `A portfolio and blog for Taha Rashid's experiences`,
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'taharashid710192@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/TheBossT910',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/taha-rashid192/',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/thebosst710192/',
      icon: 'i-simple-icons-instagram',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/TheBossT910/taharashid-astro',
      },
    ],
  },
}

export default siteConfig
