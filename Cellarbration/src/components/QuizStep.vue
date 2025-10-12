<template>
    <div class="question-container">
        <h2>Q{{ question.id }}/{{ totalLength }}: {{ question.question }}</h2>
    </div>

    <div class="choices-container">
        <button v-for="option in question.options" :key="option.id" @click="$emit('select-option', option)" class="choice-button">
            <span class="choice-text">{{ option.text }}</span>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  totalLength: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['select-option'])

</script>


<style scoped>
.question-container {
    font-family: "Anton";
    margin: auto;
    width: 85%;
    border: white 0.5px solid;
    border-radius: 20px;
    color: white;
    margin-top: 10dvh;
    padding: 5dvh 5dvw;
    margin-bottom: 5dvh;
    max-width: 500px;
}

.question-container h2 {
    font-size: 1.9rem;
    margin: 0
}

.choices-container {
  font-family: "Benton Sans Book";
  display: flex;
  flex-direction: column;
  gap: 3dvh;
  width: 85%;
  max-width: 500px;
  padding:0 0 5dvh 0;
}

.choice-button {
  background-color: white; /* Using yellow from your theme */
  border: none;
  border-radius: 20px;
  min-height: 70px;
  padding: 15px 20px;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  display: flex;
  text-align: center;
}

.choice-text {
  font-size: 1rem;
  margin: auto;
  max-width: 95%;
  word-wrap: break-word;
}
</style>
