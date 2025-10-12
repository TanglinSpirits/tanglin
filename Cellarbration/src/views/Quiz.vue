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
const answers = ref([])
const finalResult = ref(null)
const quizCompleted = ref(false)
const isTransitioning = ref(false)

const handleAnswer = (option) => {
  if (isTransitioning.value) return // Prevent multiple clicks during transition
  isTransitioning.value = true
  
  answers.value.push(option.type)
  console.log(answers.value)
  
  setTimeout(() => {
    if (currentQuestion.value < questions.value.length - 1) {
      currentQuestion.value++
    } else {
      finalResult.value = calculateResult() 
      quizCompleted.value = true
    }
    isTransitioning.value = false
  }, 500) 
}

const calculateResult = () => {
  const typeCounts = answers.value.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {})

  const mostFrequentType = Object.keys(typeCounts).reduce((a, b) => {
    return typeCounts[a] > typeCounts[b] ? a : b;
  });

  sessionStorage.setItem('quizResult', JSON.stringify(mostFrequentType));

  return mostFrequentType
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

.result-container {
  background-color: black;
  height: 100dvh;
  max-width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
</style>
