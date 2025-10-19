import { defineStore } from 'pinia';
import { questions } from '../data.js';

export const useAnswerStore = defineStore('answers', {
  // STATE: The single source of truth for quiz progress
  state: () => ({
    currentQuestionIndex: 0,
    userAnswers: {},
    finalResult: null, // Add state to hold the final result
  }),

  // GETTERS: Computed properties derived from state
  getters: {
    // ✅ This is now a getter
    isQuizCompleted(state) {
      return Object.keys(state.userAnswers).length === questions.value.length;
    },
    getAnswer: (state) => (questionId) => {
      return state.userAnswers[questionId] || null;
    },
  },

  // ACTIONS: Methods that change the state
  actions: {
    selectAnswer(questionId, selectedOption) {
      this.userAnswers[questionId] = selectedOption;
    },

    goToNextQuestion() {
      const isLastQuestion = this.currentQuestionIndex === questions.value.length - 1;

      if (!isLastQuestion) {
        // If it's NOT the last question, just advance the index.
        this.currentQuestionIndex++;
        history.pushState(
          { questionIndex: this.currentQuestionIndex },
          '',
          `#question-${this.currentQuestionIndex + 1}`
        );
      } else {
        // ✅ If it IS the last question, always calculate the result.
        // This correctly handles re-submission after changing an answer.
        this.calculateResult();
        this.router.push('/result');
      }

    },
    setQuestionIndex(index) {
      if (index >= 0 && index < questions.value.length) {
        this.currentQuestionIndex = index;
      }
    },

    // ✅ Centralize the result calculation logic here
    calculateResult() {
      // Get an array of the answer types, e.g., ['A', 'B', 'A']
      const answers = Object.values(this.userAnswers);
      
      const typeCounts = answers.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});

      const mostFrequentType = Object.keys(typeCounts).reduce((a, b) => {
        return typeCounts[a] > typeCounts[b] ? a : b;
      });
      
      // Set the result in the store's state
      this.finalResult = mostFrequentType;
      sessionStorage.setItem('quizResult', JSON.stringify(mostFrequentType));
    },

    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.userAnswers = {};
      this.finalResult = null;
      history.replaceState({ questionIndex: 0 }, '', window.location.pathname);
    },
  }
});