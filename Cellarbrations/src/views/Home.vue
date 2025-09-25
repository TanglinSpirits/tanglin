<template>
  <div class="start-container">
    <div class="tanglinLogo">
      <img src="@/assets/images/tanglin-logo.png" alt="" />
    </div>

    <div class="mainText">
      <span>Take our quiz to discover the gin that’s made for you.</span>
      <div class="button">
        <button class="btn rounded-pill startBtn" @click="quizStart()">Discover Your Spirit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const startQuiz = ref(false)
const router = useRouter()

const quizStart = (action) => {
  startQuiz.value = true

  // Add quiz state to browser history
  router.push('/quiz')
}
</script>

<style scoped>
.start-container {
  /* position: fixed; */
  width: 100%;
  min-height: 100dvh;
  background-image: url('@/assets/images/Tanglin_Cellarbration_Start_Screen.png');
  background-repeat: no-repeat;
  /* background-size: 100dvw 100dvh; */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  scroll-behavior: smooth;
  overflow-y: hidden;
}

.tanglinLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-top: 10vh;
}

.tanglinLogo img {
  max-width: 150px;
  width: 25vw;
  height: auto;
}

.mainText {
  font-family: 'Anton', sans-serif;
  color: white;
  text-align: center;
  width: 80%;
  margin: auto;
  margin-top: 5dvh;
}

.mainText span {
  width: 50%;
  max-width: 350px;
font-size: clamp(1.3rem, 1.8rem, 1.9rem);
}

.startBtn {
  background-color: #25632d;
  color: white;
  margin-top: 5dvh;
  width: 80%;
  max-width: 300px;
  font-size: clamp(1.2rem, 1.9rem, 2rem);
}

@media (max-width: 375px) {
.mainText span {
    font-size: 1.2rem;
}

.startBtn {
    font-size: 1.2rem;
}
}
</style>
