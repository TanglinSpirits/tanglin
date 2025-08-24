<template>
  <div class="resultContainer">
    <div class="result-text-container">
        <span class="youAre">You are...</span>
        <span class="resultHeader" :style="{ color: result.color }">{{ result.team }}</span>
        <span class="resultTitle">{{ result.title }}</span>    
    </div>

    <div class="result-desc-container">
        <p class="description">{{ result.personalityDescription }}</p>
        <button @click="$emit('show-drink')" class="btn rounded-pill retryBtn">
        See My Drink &gt;&gt;&gt;
        </button>
    </div>


  </div>
</template>

<script setup>
defineProps({ result: Object });
defineEmits(['show-drink']);
</script>

<style scoped>
/* .resultContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 1;
} */

.resultContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40%;
  width: 100dvw;
  max-width: 100%;
  height: 90dvh;
  margin: auto;
  text-align: center;
  padding-top: 2dvh;
  z-index: 1;
}

.result-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'FSKim', 'sans-serif';
  position: relative;
  width: 90%;
  line-height: 1;
}

/* .result-text-container span {
    padding-top: 10px;
} */

.youAre { 
  font-size: clamp(2dvh, 3.818dvh, 4.5dvh); 
  font-style: italic;
}

.resultHeader {
    font-size: clamp(5dvh, 8.5dvh, 9dvh);
    /* line-height: 1; */
    font-family: "FSKim Bold", sans-serif;
}

.resultTitle {
    font-size: clamp(2dvh, 3dvh, 3.5dvh);
    font-family: 'Benton Sans', sans-serif;
    /* font-style: normal; */
}

.result-desc-container {
  position: relative;
  margin-bottom: 25dvh;
  /* width: 90%; */
  /* margin: auto; */
}

.description {
  margin: auto;
  margin-bottom: 3dvh;
  border: white solid 1px;
  border-radius: 6px;
  font-size: clamp(0.85rem, 3dvw, 0.9rem);
  font-family: "Benton Sans", sans-serif;
  padding: 20px 25px;
  background: rgba(0, 0, 0, 0.6);
  width: 90dvw;
  max-width: 400px;
  max-height: 250px;
}

.retryBtn { /* Add your button styles */
  background-color: var(--color4);
  color: white;
  font-family: "FSKim Italic", sans-serif;
  /* font-style: italic; */
  font-size: 1.1rem;
  width: 85dvw;
  max-width: 300px;
}
</style>