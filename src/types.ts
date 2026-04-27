import type { CollectionEntry } from 'astro:content'

export type PostKey = 'blog'

export type CollectionPosts = CollectionEntry<PostKey>

export type Pages = 'pages'

export type CollectionPages = CollectionEntry<Pages>

export interface ProjectMedia {
  type: 'image' | 'video' | 'youtube' | 'iframe'
  src: string // URL or YouTube video ID
  caption?: string
  isPrimary?: boolean // marks the hero/main media
}

export interface Project {
  text: string
  duration: string
  description?: string
  // Extended description shown only in the modal (supports markdown-ish line breaks via \n)
  longDescription?: string
  icon?: string
  skills?: string[]
  image: string // card thumbnail — also used as fallback primary media
  href: string // the "main" CTA link
  hrefLabel?: string // e.g. "View on GitHub", defaults to "Visit →"
  links?: { label: string, href: string }[] // extra links shown in modal
  media?: ProjectMedia[] // additional images / videos shown in modal gallery
}

export type ExperienceData = {
  title: string
  projects: Project[]
}[]
