import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'Personal',
    projects: [
      {
        text: 'SavePoint - The Modern Game Collection Platform',
        description: 'A web-first app built to modernize how people collect and manage video games while also helping retro game stores to digitize their inventory, pricing, and storefronts',
        icon: 'i-carbon-game-console',
        skills: ['i-devicon-vuejs', 'i-devicon-tailwindcss', 'i-devicon-typescript', 'i-devicon-express', 'i-devicon-figma', 'i-devicon-supabase'],
        image: '/projects/savepoint.png',
        href: 'https://github.com/TheBossT910/savepoint-web',
      },
      {
        text: 'Koyomi - AnimeTracker',
        description: 'A simple iOS app to help you track anime you\'re watching or planning to watch.',
        icon: 'i-ri-app-store-fill',
        skills: ['i-devicon-swift', 'i-devicon-python', 'i-devicon-firebase', 'i-devicon-figma'],
        image: '/projects/koyomi.jpeg',
        href: 'https://github.com/TheBossT910/AnimeTracker',
      },
      {
        text: 'SyncSlash - 2D Hack n Slash Sidescroller',
        description: 'A fast-paced 2D hack n slash sidescroller game currently on hiatus, developed with Unity.',
        icon: 'i-simple-icons-unity',
        skills: ['i-devicon-unity', 'i-devicon-csharp'],
        image: '/projects/syncslash.jpeg',
        href: 'https://github.com/TheBossT910/SlashSync/tree/main',
      },
      {
        text: 'Anki Plugin for Japanese Verb Transivity',
        description: 'An Anki plugin to parse cards and append the transivity of verbs as "Self-Move" (intransitive) or "Other-Move" (transitive) to thousands of flashcards.',
        icon: 'i-simple-icons-anki',
        skills: ['i-devicon-python'],
        image: '/projects/ankiplugin.png',
        href: 'https://github.com/TheBossT910/Japanese-Verb-Transivity-Anki-Plugin',
      },
    ],
  },
  {
    title: 'University',
    projects: [
      {
        text: 'PerfectFit',
        description: 'A mockup website for an innovative clothing app designed to revolutionize the shopping experience by providing an engaging, immersive, and elegant platform.',
        icon: 'i-ri-t-shirt-2-fill',
        skills: ['i-devicon-css3', 'i-devicon-html5', 'i-devicon-javascript'],
        image: '/projects/perfectfit.png',
        href: 'https://github.com/seg-perfect-fit/perfect-fit-site?tab=readme-ov-file',
      },
    ],
  },
]
