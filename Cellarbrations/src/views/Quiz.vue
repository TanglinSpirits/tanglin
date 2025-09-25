<template>
  <!-- Question Screen -->
  <div v-if="!finalResult" class="quiz-container"></div>

  <!-- Result screen -->
  <div v-else class="result-container"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import QuizStep from '@/components/QuizStep.vue'

const router = useRouter()

const finalResult = ref(null)
</script>

<style scoped>
.quiz-container {
  opacity: 0.9;
  background-image: url('@/assets/images/Cellebration_Question_Background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  min-height: 100dvh;
  max-width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  scroll-behavior: smooth;
}
</style>
