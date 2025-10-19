import { ref } from 'vue'

// Backgrounds
import startScreen from '@/assets/images/Tanglin_Cellarbration_Start_Screen.png'
import quizScreen from '@/assets/images/Cellebration_Question_Background.png'

// Fonts
import antonFont from '@/assets/fonts/Anton-Regular.ttf'
import bentonSansBookFont from '@/assets/fonts/Benton-Sans-Book.otf'

// Logos
import tanglinLogo from '@/assets/images/tanglin-logo.png'

// Result images
import TT from '@/assets/result/TT.png'
import SG from '@/assets/result/SG.png'
import BP from '@/assets/result/BP.png'
import OG from '@/assets/result/OG.png'
// import SM from '@/assets/result/SM.png'
import CACAO from '@/assets/result/CACAO.png'

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
      { text: 'Catching up with my friends at a trendy food spot in town', type: 'TT' },
      { text: 'A quiet relaxing night in watching my comfort show', type: 'SM' },
      { text: 'Sweating it out at the gym to clear my head', type: 'BP' },
      { text: 'Singing my heart out at KTV', type: 'OG'}
    ],
  },
  {
    id: 2,
    question: "When faced with a challenge, your first instinct is to...",
    options: [
      { text: 'Panic attack mode!', type: 'OG' },
      { text: "Get excited! It's my chance to learn something new", type: "SG" },
      { text: "Go with the flow and see where it takes me", type: "CACAO" },
      { text: "Break it down into a clear step-by-step plan", type: "BP" }
    ]
  },
  {
    id: 3,
    question: "If your life had a soundtrack, it would be...",
    options: [
      { text: "A powerful, dramatic orchestral score", type: "BP" },
      { text: "An upbeat 2010s pop playlist", type: "SG" },
      { text: "Smooth, soulful jazz", type: "CACAO" },
      { text: "A festive Christmas holiday playlist", type: "SM" }
    ]
  },
  {
    id: 4,
    question: "Pick a scent for your dream home",
    options: [
      { text: "Warm vanilla, like freshly baked treats (yummy!)", type: "OG" },
      { text: "Fresh mandarin with gentle floral notes", type: "TT" },
      { text: "Rich caramel with cinnamon, like a cozy autumn vibe", type: "SM" },
      { text: "Earthly and musky, like the forest after rain", type: "SG" }
    ]
  },
  {
    id: 5,
    question: "Your dream holiday is...",
    options: [
      { text: "Backpacking and exploring hidden gems around Asia", type: "SG" },
      { text: "Luxury resort getaway for total relaxation", type: "OG" },
      { text: "Wild party weekend at a music festival", type: "TT" },
      { text: "Outdoor camping in the snow", type: "SM" }
    ]
  },
  {
    id: 6,
    question: "In your friend group, you're known as...",
    options: [
      { text: "The joker - always cracking people up", type: "TT" },
      { text: "The Mom/Dad - always looking out for your friends", type: "SM" },
      { text: "The chronically online - always know what's new and trendy", type: "OG" },
      { text: "The dare devil - active and adventurous", type: "SG" }
    ]
  },
  {
    id: 7,
    question: "What motivates you the most in life?",
    options: [
      { text: "Making memories with the people I care about", type: "SM" },
      { text: "Learning and growing through new experiences", type: "SG" },
      { text: "Chasing big goals and celebrating every milestone", type: "BP" },
      { text: "Just enjoying the moment as it comes", type: "CACAO" }
    ]
  },
  {
    id: 8,
    question: "How do you like your gin cocktails?",
    options: [
      { text: "Straight up or on the rocks - pure uncompromised flavour", type: "BP" },
      { text: "Sweet and indulgent, like dessert in a glass", type: "CACAO" },
      { text: "A classic G&T - crisp and perfectly balanced", type: "OG" },
      { text: "Something new and experimental", type: "TT" }
    ]
  }
])

export const result = ref([TT, SG, BP, OG, CACAO])

export const results = ref({
  TT: {
    image: TT,
    text:"Test1",
    color: "#FFBD59"
  },
  SG: {
    image: SG,
    text:"Test2",
    color: "#FF914D"
  },
  BP: {
    image: BP,
    text:"Test3",
    color: "#FF0000"
  },
  OG: {
    image: OG,
    text:"Test4",
    color: "#F04E99"
  },
  CACAO: {
    image: CACAO,
    text:"Test5",
    color: "#FFD091"
  }
})
