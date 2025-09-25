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
