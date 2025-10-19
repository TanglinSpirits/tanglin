<template>
  <!-- Question Screen -->
  <div class="quiz-container">
    <QuizStep 
      :question="currentQuestionData"
      :total-length="questions.length" 
      @select-option="handleAnswer" 
    />
  </div>

  <!-- Result screen -->
  <!-- <div v-else class="result-container"></div> -->
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import QuizStep from '@/components/QuizStep.vue'
import { questions } from '@/data.js'
import { useAnswerStore } from '@/stores/answerStore'
import { storeToRefs } from 'pinia'

// Pinia stores
const answerStore = useAnswerStore()

// router
const router = useRouter()

// states
const { currentQuestionIndex, finalResult} = storeToRefs(answerStore)
console.log("Current Question Index", currentQuestionIndex)
const currentQuestionData = computed(() => {
  return questions.value[currentQuestionIndex.value]
})
console.log("Question", questions.value[currentQuestionIndex.value])

// const currentQuestion = ref(0)
const answers = ref([])
// const finalResult = ref(null)
const quizCompleted = ref(false)
const isTransitioning = ref(false)

const handleAnswer = (option) => {
  if (isTransitioning.value) return // Prevent multiple clicks during transition
  isTransitioning.value = true

  try {
    const questionId = currentQuestionData.value.id
    answerStore.selectAnswer(questionId, option.type)
    answerStore.goToNextQuestion()
  } finally {
    isTransitioning.value = false
  }
}

const syncStateFromHistory = (event) => {
  // Check if the state from the history event is valid
  if (event.state && typeof event.state.questionIndex === 'number') {
    // Call the action in the store to update the question index
    answerStore.setQuestionIndex(event.state.questionIndex)
  }
}


onMounted(() => {
  // Reset quiz state when component is mounted
  answerStore.resetQuiz()
  history.replaceState({questionIndex: 0}, '', '#question-1')
  window.addEventListener('popstate', syncStateFromHistory)
})

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
