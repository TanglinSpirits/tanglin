<template>
  <div class="question-container">
    <div class="question-text-container" :style="{border: '1px solid var(' + question.color + ')'}">
        <div class="ball" :style="{backgroundColor: 'var(' + question.color + ')'}">
        </div>
        <h2>{{ question.prompt }}</h2>
    </div>
    
    <div class="choices-container">
        <div v-for="(option, index) in question.options" :key="index" @click="$emit('select-option', option)">
            <button class="btn btn-outline-light rounded-pill no-hover"><span class="choices-text">{{ option.text }}</span></button>
        </div>
    </div>

  </div>
</template>

<script>
// import Radial from './Radial.vue';
export default {
  name: 'QuestionDisplay',
  props: ['question', 'isTransitioning']
};
</script>

<style scoped>
/* test */
/* Add styles for question display here */
.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 100dvw;
  max-width: 100%;
  height: 90dvh;
  margin: auto;
  text-align: center;
  font-family: 'FSKim', 'sans-serif';
  animation: fadeIn 0.7s ease-in-out;
}

.question-text-container {
    margin-top: 15dvh;
    border-radius: 35px;
    width: 100%;
    position: relative;
    max-width: 300px;
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    font-family: "FSKim Bold", sans-serif;
}

.choices-container {
    width: 100%;
    max-width: 300px;
    text-align: center;
    align-items: center;
}

.ball {
  border: 1px white solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 0;
  right: 0;
}

.question-text-container h2 {
    font-size: clamp(1.5rem, 1.7rem, 1.9rem);
  margin: auto;
  width: 80%;
  text-align: center;
}

/* --- MODIFIED STYLES START HERE --- */

.choices-container button {
  width: 100%;
  max-width: 300px;
  margin-top: 3dvh;
  font-family: "Benton Sans", sans-serif;

  /* Set a minimum height to ensure all buttons are equally tall */
  min-height: 70px; /* You can adjust this value */

  /* Use flexbox to perfectly center the text inside */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adjust padding for better spacing */
  padding: 10px 15px;
}

.choices-text {
  /* This ensures the text will wrap properly inside the button */
  max-width: 90%;
  word-wrap: break-word;
  font-size: clamp(0.8rem, 0.9rem, 1rem);
}
</style>