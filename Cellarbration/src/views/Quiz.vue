<template>
  <!-- Question Screen -->
  <div v-if="!finalResult" class="quiz-container">
    <QuizStep 
      :question="questions[currentQuestion]"
      :total-length="questions.length" 
      @select-option="handleAnswer" 
    />
  </div>

  <!-- Result screen -->
  <div v-else class="result-container"></div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import QuizStep from '@/components/QuizStep.vue'
import { questions } from '@/data.js'

// router
const router = useRouter()

// states
const currentQuestion = ref(0)
const finalResult = ref(null)
const isTransitioning = ref(false)

const handleAnswer = (option) => {
  // Store the answer
  console.log('Selected option:', option)
  
  // Move to the next question or show results
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  } else {
    finalResult.value = 'someResult' // Placeholder for actual result logic
    router.push('/result') // Navigate to result page
  }
}
</script>

<style scoped>
.quiz-container {
  background-image: url('@/assets/images/Cellebration_Question_Background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
}
</style>
