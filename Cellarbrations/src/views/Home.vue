<template>
    <div class="start-container">
        <div class="tanglinLogo">
            <img src="@/assets/images/tanglin-logo.png" alt="">
        </div>

        <div class="mainText">
            <span>Take our quiz to discover the gin that’s made for you.</span>
            <div class="button">
                <button class="btn rounded-pill startBtn">Discover Your Spirit</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .start-container {
        /* position: fixed; */
        width: 100%;
        min-height: 100dvh;
        background-image: url("@/assets/images/Tanglin_Cellarbration_Start_Screen.png");
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
    max-width: 150px;
    width: 25vw;
    height: auto;
    }

    .mainText {
        color: white;
        text-align: center;
        width: 80%;
        margin: auto;
    }

    .mainText span {
        width: 50%;
        
    }

    .startBtn {
        background-color: #25632d;
        color: white;
    }
</style>