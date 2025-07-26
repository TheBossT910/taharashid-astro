<script lang="ts" setup>
import { ref } from 'vue'
import VuePdfEmbed from 'vue-pdf-embed'

const props = defineProps<{
  pdfLink: string
  pdfName: string
}>()

const pdfRef = ref(null)
function downloadPdf() {
  pdfRef.value?.download(props.pdfName)
}

function printPdf() {
  // pdfRef.value?.download('MyDocument.pdf')
  pdfRef.value?.print(300, props.pdfName, true)
}
</script>

<template>
  <div>
    <div class="flex mb-2">
      <a href="#" class="text-blue-600 hover:text-blue-800 i-carbon-download" @click.prevent="downloadPdf">Download</a>
      <a href="#" class="text-blue-600 hover:text-blue-800 ml-auto i-carbon-printer" @click.prevent="printPdf" />
    </div>
    <VuePdfEmbed ref="pdfRef" :source="pdfLink" @click="downloadPdf" />
  </div>
</template>
