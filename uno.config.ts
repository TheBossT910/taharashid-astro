import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-main': 'bg-hex-eef5fc dark:bg-hex-0d1117',
      'text-main': 'text-hex-555555 dark:text-hex-bbbbbb',
      'text-link': 'text-dark dark:text-white ',
      'border-main': 'border-truegray-300 dark:border-truegray-600',
    },
    {
      'text-title': 'text-link text-4xl font-800',
      'nav-link': 'text-link opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer',
      'prose-link': 'text-link text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-neutral-500 hover:border-truegray-600 dark:border-neutral-500 hover:dark:border-truegray-400 transition-border-color duration-200 decoration-none',
      'container-link': 'p-2 opacity-60 hover:opacity-100 cursor-pointer hover:bg-truegray-500 !bg-opacity-10 transition-colors transition-opacity duration-200',
    },
    {
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-truegray-200 !dark:border-truegray-800',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-ri-file-list-2-line',
    'i-simple-icons-github',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-ri-github-line',
    'i-carbon-game-console',
    'i-ri-app-store-fill',
    'i-simple-icons-unity',
    'i-simple-icons-anki',
    'i-ri-t-shirt-2-fill',
    'i-ri-linkedin-fill',
    'i-ri-instagram-line',
    'i-devicon-csharp',
    'i-devicon-unity',
    'i-devicon-python',
    'i-devicon-swift',
    'i-devicon-firebase',
    'i-devicon-vuejs',
    'i-devicon-express',
    'i-devicon-supabase',
    'i-devicon-css3',
    'i-devicon-html5',
    'i-devicon-javascript',
    'i-devicon-typescript',
    'i-devicon-tailwindcss',
    'i-devicon-figma',
  ],
})
