<script lang="ts" setup>
import { useDark } from '@vueuse/core'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

defineProps<{ list: Project[] }>()

const isDark = useDark()

interface ProjectMedia {
  type: 'image' | 'video' | 'youtube' | 'iframe'
  src: string
  caption?: string
  isPrimary?: boolean
}

interface ProjectLink {
  label: string
  href: string
}

interface Project {
  text: string
  duration: string
  description?: string
  longDescription?: string
  icon?: string
  skills?: string[]
  image: string
  href: string
  hrefLabel?: string
  links?: ProjectLink[]
  media?: ProjectMedia[]
}

//  Modal state
const activeProject = ref<Project | null>(null)
const activeMediaIndex = ref(0)
const modalEl = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// All media for active project (card image + any extra media[])
const allMedia = computed<ProjectMedia[]>(() => {
  if (!activeProject.value)
    return []
  const extras = activeProject.value.media ?? []
  // If there's already a primary in extras, don't duplicate the card image
  const hasPrimary = extras.some(m => m.isPrimary)
  const cardImage: ProjectMedia = { type: 'image', src: activeProject.value.image, isPrimary: !hasPrimary }
  return hasPrimary ? extras : [cardImage, ...extras]
})

function openModal(project: Project) {
  activeProject.value = project
  // Set active thumb to primary
  const primIdx = allMedia.value.findIndex(m => m.isPrimary)
  activeMediaIndex.value = primIdx >= 0 ? primIdx : 0
  nextTick(() => {
    isVisible.value = true
  })
  document.body.style.overflow = 'hidden'
  ;(window as any).posthog?.capture('project_modal_opened', { project_name: project.text })
}

function trackProjectLinkClick(project: Project) {
  ;(window as any).posthog?.capture('project_link_clicked', { project_name: project.text, href: project.href })
}

function closeModal() {
  isVisible.value = false
  setTimeout(() => {
    activeProject.value = null
    document.body.style.overflow = ''
  }, 280)
}

function onOverlayClick(e: MouseEvent) {
  if (e.target === e.currentTarget)
    closeModal()
}

// Keyboard nav
function onKeydown(e: KeyboardEvent) {
  if (!activeProject.value)
    return
  if (e.key === 'Escape')
    closeModal()
  if (e.key === 'ArrowLeft')
    prevMedia()
  if (e.key === 'ArrowRight')
    nextMedia()
}

function prevMedia() {
  activeMediaIndex.value = (activeMediaIndex.value - 1 + allMedia.value.length) % allMedia.value.length
}
function nextMedia() {
  activeMediaIndex.value = (activeMediaIndex.value + 1) % allMedia.value.length
}

// YouTube embed helper
function ytEmbedUrl(src: string) {
  const id = src.startsWith('http') ? new URL(src).searchParams.get('v') ?? src.split('/').pop() : src
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&rel=0`
}

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

// Reset thumb when project changes
watch(activeProject, () => {
  activeMediaIndex.value = 0
})
</script>

<template>
  <!--  Project Grid  -->
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>

    <li
      v-for="project in list" :key="project.text" w-full flex items-center rd-2 class="relative group cursor-pointer"
      @click="openModal(project)"
    >
      <div
        flex items-center class="relative w-full rounded-lg border border-transparent
               bg-white dark:bg-hex-161b22
               transition-all duration-200
               hover:border-gray-200 dark:hover:border-gray-700
               hover:shadow-md dark:hover:shadow-gray-900/40
               hover:-translate-y-0.5"
      >
        <div class="rounded w-full">
          <!-- Preview image -->
          <img
            :src="project.image" :alt="project.text" class="w-full rounded-t-lg object-cover"
            style="max-height:180px; object-position:top;"
          >

          <div class="flex px-3 pt-3">
            <!-- Icon -->
            <div class="mr-3 pt-1.5 shrink-0">
              <i text-3xl inline-block text-black dark:text-white :class="project.icon || 'i-carbon-unknown'" />
            </div>

            <!-- Text & Languages -->
            <div font-normal lh-tight class="mt-1 min-w-0">
              <div text-lg text-main font-medium class="leading-tight">
                {{ project.text }}
              </div>
              <small text-sm text-secondary>{{ project.duration }}</small>
              <div class="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
                <i v-for="skill in project.skills" :key="skill" text-2xl :class="skill || 'i-carbon-unknown'" />
              </div>
            </div>
          </div>

          <!-- Desc -->
          <div opacity-50 mt-2 pb-4 px-4 text-sm leading-relaxed>
            {{ project.description }}
          </div>

          <!-- "Click to expand" hint -->
          <div
            class="absolute bottom-2 right-3 text-xs opacity-0 group-hover:opacity-40
                   transition-opacity duration-200 select-none"
          >
            click to expand ↗
          </div>
        </div>
      </div>
    </li>
  </ul>

  <!--  Modal  -->
  <Teleport to="body" :disabled="!isMounted">
    <Transition name="modal-fade">
      <div
        v-if="activeProject" class="modal-overlay" :class="{ 'modal-visible': isVisible, 'is-dark': isDark }" role="dialog"
        aria-modal="true" :aria-label="activeProject.text" @click="onOverlayClick"
      >
        <div ref="modalEl" class="modal-panel" :class="{ 'modal-panel-visible': isVisible }">
          <!-- Close button -->
          <button class="modal-close" aria-label="Close" @click="closeModal">
            <i class="i-carbon-close text-xl" />
          </button>

          <!-- Scrollable content -->
          <div class="modal-body">
            <!--  Hero / Primary media  -->
            <div class="modal-hero">
              <template v-if="allMedia[activeMediaIndex]?.type === 'youtube'">
                <iframe
                  :src="ytEmbedUrl(allMedia[activeMediaIndex].src)" class="modal-hero-media"
                  style="width: 100%; aspect-ratio: 16/9; background: #fff;" frameborder="0" allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </template>
              <template v-else-if="allMedia[activeMediaIndex]?.type === 'video'">
                <video
                  :src="allMedia[activeMediaIndex].src" class="modal-hero-media"
                  style="width: 100%; aspect-ratio: 16/9; background: #fff;" controls playsinline
                />
              </template>
              <template v-else-if="allMedia[activeMediaIndex]?.type === 'iframe'">
                <iframe
                  :src="allMedia[activeMediaIndex].src" class="modal-hero-media"
                  style="width: 100%; aspect-ratio: 16/9; background: #fff;" frameborder="0" allowfullscreen="true"
                  mozallowfullscreen="true" webkitallowfullscreen="true"
                />
              </template>
              <template v-else>
                <img
                  :src="allMedia[activeMediaIndex]?.src ?? activeProject.image"
                  :alt="allMedia[activeMediaIndex]?.caption ?? activeProject.text"
                  class="modal-hero-media object-contain"
                >
              </template>

              <!-- Caption -->
              <p v-if="allMedia[activeMediaIndex]?.caption" class="modal-hero-caption">
                {{ allMedia[activeMediaIndex].caption }}
              </p>

              <!-- Prev / Next arrows (only if >1 media) -->
              <template v-if="allMedia.length > 1">
                <button class="modal-arrow modal-arrow-left" aria-label="Previous" @click.stop="prevMedia">
                  <i class="i-carbon-chevron-left" />
                </button>
                <button class="modal-arrow modal-arrow-right" aria-label="Next" @click.stop="nextMedia">
                  <i class="i-carbon-chevron-right" />
                </button>
              </template>
            </div>

            <!--  Thumbnail strip  -->
            <div v-if="allMedia.length > 1" class="modal-thumbs">
              <button
                v-for="(m, idx) in allMedia" :key="idx" class="modal-thumb"
                :class="{ 'modal-thumb-active': idx === activeMediaIndex }" @click.stop="activeMediaIndex = idx"
              >
                <template v-if="m.type === 'youtube'">
                  <img
                    :src="`https://img.youtube.com/vi/${m.src.startsWith('http') ? new URL(m.src).searchParams.get('v') ?? m.src.split('/').pop() : m.src}/mqdefault.jpg`"
                    alt="" class="w-full h-full object-cover"
                  >
                  <span class="thumb-play-icon"><i class="i-carbon-play-filled-alt" /></span>
                </template>
                <template v-else-if="m.type === 'video'">
                  <div class="thumb-video-placeholder">
                    <i class="i-carbon-play-filled-alt text-2xl" />
                  </div>
                </template>
                <template v-else-if="m.type === 'iframe'">
                  <div class="thumb-video-placeholder bg-gray-100 dark:bg-zinc-800/80">
                    <i class="i-carbon-code text-2xl text-gray-500 dark:text-gray-400" />
                  </div>
                </template>
                <template v-else>
                  <img :src="m.src" alt="" class="w-full h-full object-cover">
                </template>
              </button>
            </div>

            <!--  Project info  -->
            <div class="modal-info">
              <!-- Header row -->
              <div class="modal-info-header">
                <div class="flex items-start gap-3 min-w-0">
                  <i text-4xl inline-block shrink-0 :class="activeProject.icon || 'i-carbon-unknown'" />
                  <div class="min-w-0">
                    <h2 class="modal-title">
                      {{ activeProject.text }}
                    </h2>
                    <p class="modal-duration">
                      {{ activeProject.duration }}
                    </p>
                  </div>
                </div>

                <!-- Main CTA link -->
                <a :href="activeProject.href" target="_blank" rel="noopener noreferrer" class="modal-cta" @click.stop="trackProjectLinkClick(activeProject)">
                  {{ activeProject.hrefLabel ?? 'Visit →' }}
                </a>
              </div>

              <!-- Skills -->
              <div v-if="activeProject.skills?.length" class="modal-skills">
                <i v-for="skill in activeProject.skills" :key="skill" text-3xl :class="skill || 'i-carbon-unknown'" />
              </div>

              <!-- Description -->
              <div class="modal-description">
                <p v-if="activeProject.longDescription" class="whitespace-pre-line">
                  {{ activeProject.longDescription }}
                </p>
                <p v-else>
                  {{ activeProject.description }}
                </p>
              </div>

              <!-- Extra links -->
              <div v-if="activeProject.links?.length" class="modal-links">
                <a
                  v-for="link in activeProject.links" :key="link.href" :href="link.href" target="_blank"
                  rel="noopener noreferrer" class="modal-link-pill" @click.stop
                >
                  {{ link.label }}
                </a>
              </div>
            </div>
          </div><!-- /modal-body -->
        </div><!-- /modal-panel -->
      </div><!-- /modal-overlay -->
    </Transition>
  </Teleport>
</template>

<style scoped>
/*  Overlay  */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);
  transition:
    background 0.28s ease,
    backdrop-filter 0.28s ease;
}

.modal-overlay.modal-visible {
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
}

/* Dark mode overlay */
.is-dark.modal-overlay.modal-visible {
  background: rgba(0, 0, 0, 0.75);
}

/*  Panel  */
.modal-panel {
  position: relative;
  width: 100%;
  max-width: 720px;
  max-height: 90vh;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.06),
    0 4px 6px rgba(0, 0, 0, 0.04),
    0 20px 60px rgba(0, 0, 0, 0.12);

  transform: translateY(24px) scale(0.97);
  opacity: 0;
  transition:
    transform 0.28s cubic-bezier(0.34, 1.46, 0.64, 1),
    opacity 0.22s ease;
}

.modal-panel.modal-panel-visible {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.is-dark .modal-panel {
  background: #141414;
  color: #bbbbbb;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 4px 6px rgba(0, 0, 0, 0.2),
    0 20px 60px rgba(0, 0, 0, 0.5);
}

/*  Close button  */
.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  color: #333;
  border: none;
  cursor: pointer;
  transition:
    background 0.15s,
    transform 0.15s;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.08);
}

.is-dark .modal-close {
  background: rgba(40, 40, 40, 0.85);
  color: #ddd;
}

.is-dark .modal-close:hover {
  background: rgba(60, 60, 60, 1);
}

/*  Scrollable body  */
.modal-body {
  overflow-y: auto;
  max-height: 90vh;
  scrollbar-width: thin;
}

/*  Hero  */
.modal-hero {
  position: relative;
  width: 100%;
  background: #f0f0f0;
  overflow: hidden;
}

.is-dark .modal-hero {
  background: #1a1a1a;
}

.modal-hero-media {
  width: 100%;
  max-height: 360px;
  object-fit: contain;
  display: block;
}

.modal-hero-caption {
  text-align: center;
  font-size: 0.75rem;
  padding: 4px 12px 6px;
  opacity: 0.5;
}

/* Arrows */
.modal-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition:
    background 0.15s,
    transform 0.15s;
}

.modal-arrow:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
}

.is-dark .modal-arrow {
  background: rgba(30, 30, 30, 0.8);
  color: #eee;
}

.modal-arrow-left {
  left: 10px;
}

.modal-arrow-right {
  right: 10px;
}

/*  Thumbnail strip  */
.modal-thumbs {
  display: flex;
  gap: 8px;
  padding: 10px 16px;
  overflow-x: auto;
  scrollbar-width: thin;
  background: #f8f8f8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.is-dark .modal-thumbs {
  background: #1e1e1e;
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.modal-thumb {
  position: relative;
  flex-shrink: 0;
  width: 72px;
  height: 52px;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  background: #e0e0e0;
  transition:
    border-color 0.15s,
    transform 0.15s;
}

.modal-thumb:hover {
  transform: scale(1.05);
}

.modal-thumb-active {
  border-color: #888;
}

.is-dark .modal-thumb {
  background: #2a2a2a;
}

.is-dark .modal-thumb-active {
  border-color: #aaa;
}

.thumb-play-icon,
.thumb-video-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 1.2rem;
}

/*  Info block  */
.modal-info {
  padding: 20px 20px 28px;
}

.modal-info-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
}

.modal-duration {
  font-size: 0.8rem;
  opacity: 0.5;
  margin-top: 2px;
}

/* CTA */
.modal-cta {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  border: 1.5px solid currentColor;
  opacity: 0.75;
  transition:
    opacity 0.15s,
    transform 0.15s;
  white-space: nowrap;
}

.modal-cta:hover {
  opacity: 1;
  transform: translateY(-1px);
}

/* Skills */
.modal-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

/* Description */
.modal-description {
  margin-top: 14px;
  font-size: 0.9rem;
  line-height: 1.65;
  opacity: 0.75;
}

/* Extra links */
.modal-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.modal-link-pill {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.8rem;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.06);
  transition: background 0.15s;
}

.modal-link-pill:hover {
  background: rgba(0, 0, 0, 0.12);
}

.is-dark .modal-link-pill {
  background: rgba(255, 255, 255, 0.08);
}

.is-dark .modal-link-pill:hover {
  background: rgba(255, 255, 255, 0.14);
}

/*  Transition fallback (Teleport)  */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.22s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
