import { ref } from 'vue';

import tanglinLogo from '@/assets/images/tanglin-logo-pure-white.png';
import westinLogo from '@/assets/images/Westin-Logo-White.png';
import raceBg from '@/assets/images/startBg.png';

//Fonts
import FSKimRegular from "@/assets/Fonts/FSKim-Regular.otf"
import BentonSans from "@/assets/Fonts/Benton Sans Book.otf"
import FSKimBold from "@/assets/Fonts/FSKim-Bold.ttf"
import FSKimItalic from "@/assets/Fonts/FSKim-MediumItalic.otf"

// Flags
import mercedesFlag from '@/assets/images/Results/Flags/mercedes.png';
import ferrariFlag from '@/assets/images/Results/Flags/ferrari.png';
import astonMartinFlag from '@/assets/images/Results/Flags/Aston-Martin.png'
import redBullFlag from '@/assets/images/Results/Flags/Red-Bull.png'
import alpineFlag from '@/assets/images/Results/Flags/Alpine.png'
import mcLarenFlag from '@/assets/images/Results/Flags/McLaren.png'  

// Drinks
import orchidCocktail from '@/assets/images/Results/Drinks/Orchid-Cocktail.png'
import negroniDrink from '@/assets/images/Results/Drinks/Chocolate-Negroni.png';
import ginAndSonic from '@/assets/images/Results/Drinks/Gin-Sonic.png'
import mochaMartini from '@/assets/images/Results/Drinks/Mocha-Martini.png'
import ginBasilSmash from '@/assets/images/Results/Drinks/Gin-Basil-Smash.png'
import westinSling from '@/assets/images/Results/Drinks/Westin-Sling.png'


export const questions =  ref([
    {
        category: "Pace of Life",
        prompt: "How do you approach life?",
        options: [
        {
            text: "Steady and calculated – I plan my moves carefully",
            type: "Mercedes",
        },
        {
            text: "Fast and furious – I'm all about living in the moment",
            type: "Ferrari",
        },
        ],
        color: "--color1",
    },
    {
        category: "Preferred Drink Base",
        prompt: "What's your drink style?",
        options: [
        {
            text: "Light and refreshing – I enjoy something elegant and crisp",
            type: "Mercedes",
        },
        {
            text: "Bold and intense – I love rich, full-bodied flavours",
            type: "RedBull",
        },
        ],
        color: "--color2",
    },
    {
        category: "Social Scene",
        prompt: "What's your crowd energy?",
        options: [
        {
            text: "I prefer a more refined and relaxing setting",
            type: "AstonMartin",
        },
        {
            text: "I thrive in high-energy environments",
            type: "Ferrari",
        },
        ],
        color: "--color5",
    },
    {
        category: "Pressure",
        prompt: "How do you handle pressure?",
        options: [
        {
           text: "Rely on my team and our established plan to get through it",
           type: "Alpine",
        },
        {
            text: "Stay calm and think it through",
            type: "Mercedes",
        },
        ],
        color: "--color6",
    },
    {
        category: "Free Time",
        prompt: "How do you spend your free time?",
        options: [
        {
            text: "Out exploring and trying new things in life",
            type: "RedBull",
        },
        {
            text: "Relaxing at home with a good book or show",
            type: "AstonMartin",
        },
        ],
        color: "--color7",
    },
    {
        category: "Cocktail Invent",
        prompt: "If you could invent a cocktail, it would be...",
        options: [
        {
            text: "Original creation with bold and wild flavours that makes heads turn",
            type: "McLaren",
        },
        {
            text: "A refined twist on a timeless favorite",
            type: "AstonMartin",
        },
        ],
        color: "--color2",
    },
    {
        category: "Rules",
        prompt: "When it comes to rules, you tend to...",
        options: [
        {
            text: "Question and bend them to suit your style",
            type: "RedBull",
        },
        {
            text: "Respect them but find creative ways within the limits",
            type: "McLaren",
        },
        ],
        color: "--color8",
    },
    {
        category: "Ideal Roles",
        prompt: "Your ideal role in a group is to...",
        options: [
        {
            text: "Be a bold leader who is not afraid of making risky decisions",
            type: "Ferrari",
        },
        {
            text: "Be a team player by supporting and building strong team bonds",
            type: "Alpine",
        },
        ],
        color: "--color9",
    },
    ]);

export const personalityResults = {
    McLaren: {
        team: "McLaren",
        title: "The Spirit of Innovation",
        drinkMatch: "Westin Sling",
        drinkDescription: "A vibrant, innovative blend featuring Tanglin Singapore Gin and zesty Triple Tangerine, layered with bright fruity notes.",
        personalityDescription: "Like McLaren,  you embody the spirit of innovation. Your drink bursts with colour and fruity energy, matching your bold, dynamic personality.",
        color: "var(--color6)",
        flag: mcLarenFlag,
        drink: westinSling,
    },
    Mercedes: {
        team: "Mercedes",
        title: "The Pinnacle of Precision",
        drinkMatch: "Orchid Cocktail",
        drinkDescription: "A delicate floral cocktail featuring Tanglin Orchid Gin, brightened by Tanglin Triple Tangerine, Campari, bitters and fresh lemon juice.",
        personalityDescription: "Like Mercedes, you exude poise and class. Your drink reflects your appreciation for balance and meticulous craftsmanship.",
        color: "var(--color11)",
        flag: mercedesFlag,
        drink: orchidCocktail,
    },
    Ferrari: {
        team: "Ferrari",
        title: "The Embodiment of Passion",
        drinkMatch: "Chocolate Negroni",
        drinkDescription: "A fiery and bold Negroni, rich with bittersweet notes from Tanglin Orchid Gin and Campari.",
        personalityDescription: "Like Ferrari, you're dynamic and full of energy. Your drink speaks to your love for boldness and unapologetic flair.",
        color: "var(--color8)",
        flag: ferrariFlag,
        drink: negroniDrink,
    },
    AstonMartin: {
        team: "Aston Martin",
        title: "The Power of Synergy",
        drinkMatch: "Gin and Sonic",
        drinkDescription: "A crisp and refreshing mix of Tanglin Singapore Gin with sparkling soda and light tonic for effortless harmony.",
        personalityDescription: "Like Aston Martin, you thrive as a team player who values collaboration. Your drink reflects this harmony, blending balanced flavours into a perfectly crafted experience.",
        color: "var(--color10)",
        flag: astonMartinFlag,
        drink: ginAndSonic,
    },
    RedBull: {
        team: "Red Bull",
        title: "The Dominating Force",
        drinkMatch: "Mocha Martini",
        drinkDescription: "A rich and energizing blend of Tanglin Singapore Gin, cacao and coffee liqueurs, topped with a shot of espresso for a smooth kick.",
        personalityDescription: "Like Red Bull, you’re all about energy, ambition and going full throttle. You power through challenges with grit and your drink is the perfect pick-me-up to keep going.",
        color: "var(--color8)",
        flag: redBullFlag,
        drink: mochaMartini,
    },
    Alpine: {
        team: "Alpine",
        title: "The Rebellious Spirit",
        drinkMatch: "Gin Basil Smash",
        drinkDescription: "A fresh, herbaceous smash with Tanglin Orchid Gin, fresh lemon, and fragrant basil for a clean, vibrant finish.",
        personalityDescription: "Like Alpine, you're bold, refreshing, and not afraid to stand out. Your drink is a perfect match for your fearless energy and rebellious spirit.",
        color: "var(--color7)",
        flag: alpineFlag,
        drink: ginBasilSmash,
    },
};

export const imagesToPreload = [
  tanglinLogo,
  westinLogo,
  raceBg,
  mercedesFlag,
  ferrariFlag,
  astonMartinFlag,
  redBullFlag,
  alpineFlag,
  mcLarenFlag,
  orchidCocktail,
  negroniDrink,
  ginAndSonic,
  mochaMartini,
  ginBasilSmash,
  westinSling,
];

export const fontAssets = [
  { url: FSKimRegular, type: 'font/otf' },
  { url: BentonSans,   type: 'font/otf' },
  { url: FSKimBold,    type: 'font/ttf' },
  { url: FSKimItalic,  type: 'font/otf' }
];

