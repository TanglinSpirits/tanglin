<template>
    <div class="start-container">
            <div class="tanglinLogo">
                <img src="@/assets/images/tanglin logo pure white.png" alt="" style="width: 100px;">
                <span>X</span>
                <img src="@/assets/images/Westin Logo (White).png" alt="" style="width: 100px;">
            </div>

            <div class="mainText">
                <h1 class="" id="findYour">Find Your</h1>
                <h1 class="" id="startText">Trackside Sips: <br> Cocktails in the Fast Lane</h1>
                <p class="raceText">Race to the finish line to find out!</p>
            </div>

            <!-- <div id="carImg">
        <img src="./images/car.png" alt="">
      </div> -->

            <div class="button">
                <button @click="quizStart()" class="btn rounded-pill startBtn p-0"><span>Start</span></button>
            </div>
        </div>
</template>

<script setup>
    import { ref, onMounted, nextTick } from 'vue'
    import { useHead } from '@unhead/vue'
    import { useRouter } from 'vue-router'


    const startQuiz = ref(false);
    const router = useRouter();

    // Methods
    const quizStart = (action) => {
      startQuiz.value = true;

      // Add quiz state to browser history
      router.push('/quiz')
    }


</script>

<style scoped>
    .start-container {
        /* position: fixed; */
        width: 100%;
        min-height: 100dvh;
        background-image: url("@/assets/images/startBg.png");
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
    max-width: 100px;
    width: 25vw;
    height: auto;
    }

    .tanglinLogo span {
    font-family: "FSKim";
    color: white;
    font-size: 1.5rem;
    margin: 0 15px;
    }

    .mainText {
    width: 100%;
    font-family: "FSKim", sans-serif;
    font-style: italic;
    text-align: center;
    margin: 2vh 0;
    }

    #findYour {
    color: white;
    margin: auto;
    font-size: 1.8rem;
    }

    #startText {
    color: var(--color5);
    font-size: 2.2rem;
    line-height: 1;
    margin-bottom: 1vh;
    }

    .raceText {
    text-align: center;
    color: white;
    font-size: 1rem;
    font-family: "Benton Sans", sans-serif;
    display: block;
    font-style: normal;
    margin-top: 1vh;
    }
</style>