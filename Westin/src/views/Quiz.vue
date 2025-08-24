<template>
    <div class="quiz-container">
        <div v-if="finalResult" class="gradient" :style="{ background: 'radial-gradient(circle, ' + personalityResults[finalResult].color + ' 0%, rgba(255, 165, 0, 0) 100%)', boxShadow: '0 0 60px' + personalityResults[finalResult].color }"></div>

        <div class="quizStart" :class=" finalResult ? 'bgImage' : 'newImg' ">

            <div v-if="finalResult && !drinkPage" :style="{ background: 'url(' + personalityResults[finalResult].flag + ') center/contain no-repeat', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', opacity: '0.5' }"></div>

            <div ref="progressBarContainerRef" style="width: 100%;"> 
                 <ProgressBar :positionPx="carPositionPx" />
            </div>


            <template v-if="!finalResult">
                <QuizStep
                    :key="currentQuestion"
                    :question="question"
                    :is-transitioning="isTransitioning"
                    @select-option="handleAnswer"
                />
            </template>

            <template v-else>
                <QuizResult
                    v-if="!drinkPage"
                    :result="personalityResults[finalResult]"
                    @show-drink="showDrinkPage"
                />

                <DrinkResult 
                    v-else
                    :result="personalityResults[finalResult]"
                    @reset-test="resetTest"
                />
                
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { questions, personalityResults } from '@/data.js';

// Import child components
import ProgressBar from '../components/ProgressBar.vue';
import QuizStep from '../components/QuizStep.vue';
import QuizResult from '../components/QuizResult.vue';
import DrinkResult from '@/components/DrinkResult.vue';

const router = useRouter();

// --- STATE ---
const currentQuestion = ref(0);
const answers = ref({});
const finalResult = ref(null);
const isTransitioning = ref(false);
const drinkPage = ref(false);

// --- COMPUTED PROPERTIES ---
const progressBarContainerRef = ref(null);
const roadWidthPx = ref(0);

const carPositionPx = computed(() => {
  const carWidth = 52;
  const usableWidth = roadWidthPx.value - carWidth;
  if (finalResult.value) {
    return usableWidth > 0 ? usableWidth : 0;
  }
  const totalQuestions = questions.value.length;
  const completedQuestions = currentQuestion.value;
  const progressRatio = totalQuestions > 0 ? completedQuestions / totalQuestions : 0;
  return usableWidth > 0 ? progressRatio * usableWidth : 0;
});

const question = computed(() => questions.value[currentQuestion.value]);

// --- METHODS ---
const handleAnswer = (option) => {
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    answers.value[question.value.category] = option.type;
    setTimeout(() => {
        if (currentQuestion.value < questions.value.length - 1) {
            currentQuestion.value++;
        } else {
            calculateResult();
        }
        isTransitioning.value = false;
    }, 500);
};

const calculateResult = () => {
    const counts = {};
    for (const answer in answers.value) {
        const personality = answers.value[answer];
        counts[personality] = (counts[personality] || 0) + 1;
    }
    const resultType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    // Set the state for the result view
    finalResult.value = resultType;
    drinkPage.value = false;

    // Save the result to sessionStorage
    sessionStorage.setItem('quizResult', JSON.stringify({ result: resultType }));
        
    // Save this state to the browser's history
    history.pushState({ finalResult: resultType, drinkPage: false }, '', '/westin/result');
};

const showDrinkPage = () => {
    drinkPage.value = true;
    
    // Save the state for the drink view
    history.pushState({ finalResult: finalResult.value, drinkPage: true }, '', '/westin/drinkResult');
};

const resetTest = () => {
    sessionStorage.removeItem('quizResult');
    router.push('/');
};

const handlePopState = (event) => {
  // When the user navigates, restore the state from the history object
  if (!event.state) {
    // If there's no state, we've gone back too far, so reset
    finalResult.value = null;
    drinkPage.value = false;
    currentQuestion.value = 0;
    answers.value = {};
    return;
  }
  // Directly apply the saved state. This is the source of truth.
  finalResult.value = event.state.finalResult;
  drinkPage.value = event.state.drinkPage;
};

// --- LIFECYCLE HOOKS ---
let resizeObserver;

onMounted(() => {
  const path = window.location.pathname;
  const savedStateJSON = sessionStorage.getItem('quizResult');

  // We only need to check for a saved state if the user is on a result page
  if (path === '/westin/result' || path === '/westin/drinkResult') {
    if (savedStateJSON) {
      const savedState = JSON.parse(savedStateJSON);
      // Restore the state from sessionStorage
      finalResult.value = savedState.result;
      
      // Check if we should be on the specific drink page
      if (path === '/westin/drinkResult') {
        drinkPage.value = true;
      }
    } else {
      // If the user is on a result page WITHOUT saved data, redirect them.
      // This is the only time we should force a redirect.
      router.push('/');
      return; 
    }
  }

  // Set an initial state only if we are starting the quiz fresh.
  // This now correctly allows /westin/quiz to load without issue.
  if (path === '/westin/') {
      history.replaceState({ finalResult: null, drinkPage: false }, '', path);
  }

  // Listen for browser back/forward events
  window.addEventListener('popstate', handlePopState);
  
  // Set an initial state for the quiz itself when the component loads
  // history.replaceState({ finalResult: null, drinkPage: false }, '', window.location.pathname);
  
  if (progressBarContainerRef.value) {
    resizeObserver = new ResizeObserver(entries => {
      roadWidthPx.value = entries[0].contentRect.width * 0.8;
    });
    resizeObserver.observe(progressBarContainerRef.value);
  }
});

onUnmounted(() => {
  // Clean up listeners to prevent memory leaks
  window.removeEventListener('popstate', handlePopState);
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped>
.quiz-container {
    background-color: #0B0B0B;
    color: white;
    font-family: "Benton Sans", sans-serif;
    /* height: 100dvh; */
    width: 100dvw;
    min-height: 100dvh;
    max-width: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}
.quizStart {
    position: relative;
    /* overflow: hidden; */
    height: 100%;
    width: 100%;
}
.bgImage {
    background-color: #0B0B0B;
}

.gradient {
  width: 100px; /* Adjust the size of the circle */
  height: 100px;
  border-radius: 50%; /* Makes the div circular */

  filter: blur(40px); /* Adding the blur effect */
  position: absolute;
  top: 5%; /* Center it on the page */
  left: 5%;
  transform: translate(-50%, -50%);
  z-index: 2;
}




</style>