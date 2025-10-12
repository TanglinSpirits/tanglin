import { ref } from 'vue'

// Backgrounds
import startScreen from '@/assets/images/Tanglin_Cellarbration_Start_Screen.png'
import quizScreen from '@/assets/images/Cellebration_Question_Background.png'

// Fonts
import antonFont from '@/assets/fonts/Anton-Regular.ttf'
import bentonSansBookFont from '@/assets/fonts/Benton-Sans-Book.otf'

// Logos
import tanglinLogo from '@/assets/images/tanglin-logo.png'

export const imagesToPreload = [startScreen, quizScreen, tanglinLogo]

export const fontAssets = [
  { url: antonFont, type: 'font/ttf' },
  { url: bentonSansBookFont, type: 'font/otf' },
]


export const questions = ref([
  {
    id: 1,
    question: "What's your perfect evening after a long day?",
    options: [
      { text: 'Catching up with my friends at a trendy food spot in town', type: 'Red' },
      { text: 'A quiet relaxing night in watching my comfort show', type: 'White' },
      { text: 'Sweating it out at the gym to clear my head', type: 'Sparkling' },
      { text: 'Singing my heart out at KTV', type: 'Red'}
    ],
  },
  {
    id: 2,
    question: "When faced with a challenge, your first instinct is to...",
    options: [
      { text: 'Panic attack mode!', type: 'Red' },
      { text: "Get excited! It's my chance to learn something new", type: "White" },
      { text: "Go with the flow and see where it takes me", type: "Sparkling" },
      { text: "Break it down into a clear step-by-step plan", type: "Red" }
    ]
  },
  {
    id: 3,
    question: "If your life had a soundtrack, it would be...",
    options: [
      { text: "A powerful, dramatic orchestral score", type: "Red" },
      { text: "An upbeat 2010s pop playlist", type: "White" },
      { text: "Smooth, soulful jazz", type: "Sparkling" },
      { text: "A festive Christmas holiday playlist", type: "Red" }
    ]
  },
  {
    id: 4,
    question: "Pick a scent for your dream home",
    options: [
      { text: "Warm vanilla, like freshly baked treats (yummy!)", type: "Red" },
      { text: "Fresh mandarin with gentle floral notes", type: "White" },
      { text: "Rich caramel with cinnamon, like a cozy autumn vibe", type: "Sparkling" },
      { text: "Earthly and musky, like the forest after rain", type: "Red" }
    ]
  },
  {
    id: 5,
    question: "Your dream holiday is...",
    options: [
      { text: "Backpacking and exploring hidden gems around Asia", type: "Red" },
      { text: "Luxury resort getaway for total relaxation", type: "White" },
      { text: "Wild party weekend at a music festival", type: "Sparkling" },
      { text: "Outdoor cmaping in the snow", type: "Red" }
    ]
  },
  {
    id: 6,
    question: "In your friend group, you're known as...",
    options: [
      { text: "The joker - always cracking people up", type: "Red" },
      { text: "The Mom/Dad - always looking out for your friends", type: "White" },
      { text: "The chronically online - always know what's new and trendy", type: "Sparkling" },
      { text: "The dare devil - active and adventurous", type: "Red" }
    ]
  },
  {
    id: 7,
    question: "What motivates you the most in life?",
    options: [
      { text: "Making memories with the people I care about", type: "Red" },
      { text: "Learning and growing through new experiences", type: "White" },
      { text: "Chasing big goals and celebrating every milestone", type: "Sparkling" },
      { text: "Just enjoying the moment as it comes", type: "Red" }
    ]
  },
  {
    id: 8,
    question: "How do you like your gin cocktails?",
    options: [
      { text: "Straight up or on the rocks - pure uncompromised flavour", type: "Red" },
      { text: "Sweet and indulgent, like dessert in a glass", type: "White" },
      { text: "A classic G&T - crisp and perfectly balanced", type: "Sparkling" },
      { text: "Something new and experimental", type: "Red" }
    ]
  }
])