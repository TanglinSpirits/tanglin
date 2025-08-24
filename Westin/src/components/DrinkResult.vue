<template>
  <div class="drink-result-container">
    <div class="drink-image-wrapper">
      <!-- The drink image is dynamically loaded from the result prop -->
      <img :src="result.drink" alt="Drink Image" class="drink-image">
    </div>

    <div class="drink-details">
      <p class="drink-match">
        Drink Match: <br>{{ result.drinkMatch }}
      </p>
      <p class="drink-description">
        {{ result.drinkDescription }}
      </p>
    </div>

    <div class="action-buttons">
      <!-- This button links to an external Instagram page -->
      <a href="https://www.instagram.com/tanglinginsg/" target="_blank" class="btn rounded-pill action-button">
        Discover Tanglin Gin
      </a>
      <!-- This button emits an event to the parent (Quiz.vue) to reset the quiz -->
      <button @click="$emit('reset-test')" class="btn rounded-pill action-button">
        Retry
      </button>
    </div>
  </div>
</template>

<script setup>
// Defines the props that this component accepts from its parent
defineProps({
  result: {
    type: Object,
    required: true,
  }
});

// Defines the custom events this component can send to its parent
defineEmits(['reset-test']);
</script>

<style scoped>
.drink-result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  width: 100dvw;
  height: 90dvh;
  max-width: 100%;
  position: relative;
  z-index: 10;
  animation: fadeIn 0.7s ease-in-out;
}

.drink-image-wrapper {
  margin-bottom: 20px;
  
}

.drink-image {
  max-height: 50dvh;
  max-width: 80%;
  object-fit: contain;
  /* Adds a subtle glow to the image */
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.15));
}

.drink-details {
  max-width: 500px;
  margin-bottom: 2dvh;
}

.drink-match {
  font-family: 'FSKim Bold', sans-serif;
  font-size: clamp(1.8rem, 5dvw, 2rem); /* Responsive font size */
  margin-bottom: 2dvh;
  text-align: center;
  line-height: 1.3;
}

.drink-description {
  font-family: "Benton Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 280px;
}

.action-button {
  color: white;
  background-color: rgba(0,0,0,0.2);
  font-family: "FSKim Italic", sans-serif;
  transition: background-color 0.3s, transform 0.2s;
  background-color: var(--color4);
  font-size: 1.2rem;
}

.action-button:hover {
  /* background-color: rgba(255, 255, 255, 0.1); */
  transform: translateY(-2px);
}
</style>
