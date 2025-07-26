<script lang="ts" setup>
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    skills?: string[]
    image: string
    href: string
  }[]
}>()
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>

    <li v-for="project in list" :key="project.text" w-full flex items-center rd-2 class="relative group">
      <a flex items-center target="_blank" :href="project.href" :aria-label="project.text" class="relative">
        <!-- Display on >SM -->
        <div class="hidden md:flex">
          <!-- Preview image -->
          <img :src="project.image" alt="" class="group:w-100">

          <!-- Icon -->
          <div class="absolute top-0 ml-2 mr-4 pt-2 ">
            <i text-4xl inline-block text-black :class="project.icon || 'i-carbon-unknown'" />
          </div>

          <!-- Display on hover -->
          <div class="absolute flex flex-col opacity-0  group-hover:opacity-100 bg-gray-200/40 backdrop-blur-sm rounded w-full h-full z-1 transition-all duration-300 ease-in-out">
            <div class="flex">
              <!-- Icon -->
              <div class="top-0 ml-2 mr-4 pt-2">
                <i text-4xl inline-block text-black :class="project.icon || 'i-carbon-unknown'" />
              </div>

              <!-- Text & Languages -->
              <div font-normal lh-tight class="mt-2">
                <div text-lg text-main text-black>{{ project.text }}</div>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-sm">
                  <i v-for="skill in project.skills" :key="skill" text-3xl :class=" skill || 'i-carbon-unknown'" />
                </div>
              </div>
            </div>

            <!-- Desc -->
            <div class="mt-auto bg-gray-300/50 pt-2 text-black left-0 bottom-0 px-6 pb-4 text-sm">{{ project.description }}</div>
          </div>
        </div>

        <!-- Display on <=SM -->
        <div class="md:hidden rounded">
          <!-- Preview image -->
          <img :src="project.image" alt="" class="group:w-100">

          <div class="flex">
            <!-- Icon -->
            <div class="mr-4 pt-2">
              <i text-4xl inline-block text-black :class="project.icon || 'i-carbon-unknown'" />
            </div>

            <!-- Text & Languages -->
            <div font-normal lh-tight class="mt-2">
              <div text-lg text-main text-black>{{ project.text }}</div>
              <div class="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-sm">
                <i v-for="skill in project.skills" :key="skill" text-3xl :class=" skill || 'i-carbon-unknown'" />
              </div>
            </div>
          </div>

          <!-- Desc -->
          <div opacity-50 mt-4 pb-4 px-6 text-sm>{{ project.description }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>
