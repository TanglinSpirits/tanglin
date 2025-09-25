<template>
  <div v-if="isLoading" class="loading-container">
    <div class="spinner"></div>
  </div>
  <template v-else>
    <RouterView />
    <Analytics />
  </template>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import { imagesToPreload, fontAssets } from '@/data'

// --- Preloader Logic ---
const isLoading = ref(true) // Show spinner by default
const appReady = ref(false) // Keep app hidden initially

// --- Navigation Spinner Logic ---
const isNavigating = ref(false) // 2. Ref to control navigation spinner
const router = useRouter() // 3. Get the router instance

// 4. Show a spinner before the new page is ready
router.beforeEach((to, from, next) => {
  // Only show spinner on navigation, not on initial load
  if (from.name) {
    isNavigating.value = true
  }
  next()
})

// 5. Hide the spinner after the new page has loaded
router.afterEach(() => {
  isNavigating.value = false
})

useHead({
  title: 'Tanglin X Cellarbrations',
  meta: [{ name: 'description', content: 'Tanglin X Cellarbrations Quiz' }],
  link: [
    ...fontAssets.map((font) => ({
      rel: 'preload',
      as: 'font',
      type: font.type,
      crossorigin: 'anonymous',
      href: font.url,
    })),
  ],
})

// Function to preload all specified assets
const preloadAssets = (assets) => {
  let loadedCount = 0
  const totalAssets = assets.length

  if (totalAssets === 0) {
    isLoading.value = false
    appReady.value = true
    return
  }

  assets.forEach((src) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      loadedCount++
      if (loadedCount >= totalAssets) {
        // When all images are loaded, hide the spinner
        isLoading.value = false
        // Wait a brief moment before fading in the app for a smoother effect
        setTimeout(() => {
          appReady.value = true
        }, 300)
      }
    }
    img.onerror = () => {
      loadedCount++ // Also count errors to avoid getting stuck
      console.error(`Failed to load image: ${src}`)
      if (loadedCount >= totalAssets) {
        isLoading.value = false
        setTimeout(() => {
          appReady.value = true
        }, 300)
      }
    }
  })
}

// Start preloading as soon as the component is mounted
onMounted(() => {
  preloadAssets(imagesToPreload)
})
</script>

<style scoped>
.spinner {
  border-top-color: var(--color4);
}
</style>
