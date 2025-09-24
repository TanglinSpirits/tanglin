

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
  import { Analytics } from "@vercel/analytics/vue"
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useHead } from '@unhead/vue'
  // import { imagesToPreload, fontAssets } from '@/data'
</script>

<style scoped></style>
