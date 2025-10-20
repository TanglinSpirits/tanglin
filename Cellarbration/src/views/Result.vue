<template>
    <div v-if="isLoading" class="loading-container">
        <div class="spinner"></div>
    </div>

    <div class="result-container">

        <!-- <h2>Your Result</h2> -->
        <div class="result-image">
            <img :src=resultImage alt="">
        </div>

        <div class="text-container">
            <span :style="{ color: resultColor}">Psst... craving something sweet?<br>Our Tanglin chocolate bars might just hit the spot.<br>Just ask the staff for one!</span>
        </div>

        <div class="button-container">
            <button class="btn rounded-pill endBtn" @click="redirectTanglin">
                DISCOVER TANGLIN GIN
            </button>

            <button class="btn rounded-pill endBtn" @click="router.push('/')">
                RETRY
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAnswerStore } from '@/stores/answerStore'
import { storeToRefs } from 'pinia'
import { result, results } from '@/data.js'
import { useRouter } from 'vue-router'

const answerStore = useAnswerStore()
const router = useRouter()

const isLoading = ref(true)
const appReady = ref(false)

const finalResult = ref(null)
const resultImage = ref(null)
const resultText = ref(null)
const resultColor = ref(null)

console.log(resultImage.value)

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

const redirectTanglin= () => {
  window.open('https://www.instagram.com/tanglinginsg/', '_blank')
}

onMounted(() => {
    if (answerStore.finalResult) {
        finalResult.value = answerStore.finalResult
        resultImage.value = results.value[finalResult.value].image
        resultText.value = results.value[finalResult.value].text
        resultColor.value = results.value[finalResult.value].color
        preloadAssets([resultImage.value])
    } else {
        router.push('/quiz') // Redirect to home if no result
    }
})

</script>

<style scoped>
.result-container {
  /* background-image: url('@/assets/images/Cellebration_Question_Background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; */
  background-color: black;
  width: 100%;
  height: 100dvh;
  max-width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Anton', sans-serif;
}

.result-image {
    margin-top: 5dvh;
    /* max-height: 50dvh; */
    object-fit: contain;
}

.result-image img {
  object-fit: contain;
  height: 70dvh;
}

.text-container {
    margin-top: 3dvh;
    width: 90%;
    color: white;
    font-family: 'Anton', sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    white-space: pre-wrap;
}

.button-container {
    margin-top: 2dvh;
    margin-bottom: 5dvh;
    display: flex;
    flex-direction: column;
    gap: 2dvh;
    min-width: 20dvw;
    max-width: 400px;
}

.endBtn{
    background-color: #25632D;
    color: white;
    font-size: clamp(1.2rem, 5dvw, 2rem);
}
</style>