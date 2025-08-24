<template>
  <div class="progressBar">
    <div class="progressContainer">
      <div :style="{ left: positionPx + 'px' }" class="progressCar">
        <img :class="{'no-transition': resetting}" src="@/assets/images/progressCar.png" />
      </div>
      <hr class="road" />
      <div class="endFlag">
        <img id="flag" src="@/assets/images/endFlag.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  // The prop now accepts the final pixel position
  props: ["positionPx", "resetting"],
};
</script>

<style scoped>
/* progress bar */
.progressBar {
  padding-top: 5dvh;
  height: 10dvh;
  width: 100%; /* Ensure it spans the full width for measurement */
  box-sizing: border-box;
}

.progressContainer {
  position: relative;
  height: 30px;
  width: 80%; /* The road is 80% of the screen width */
  margin: auto;
}

.road {
  opacity: 1;
  margin: 0;
  border: none;
  height: 2px;
  width: 100%;
  background-color: white;
  position: absolute;
  top: 18.5px;
}

.progressCar {
  margin: 0;
  position: absolute;
  top: 0px;
  transition: left 1s cubic-bezier(0.25, 1, 0.5, 1);
  pointer-events: none;
}

.progressCar img {
  width: 52px;
  height: auto;
}

.endFlag {
  position: absolute;
  top: -28px;
  right: 0;
  width: 25px;
  height: 49px;
  margin: 0;
}

.endFlag img {
  width: 35px;
  height: auto;
  position: absolute;
  left: 8px;
  bottom: 0px;
}
</style>