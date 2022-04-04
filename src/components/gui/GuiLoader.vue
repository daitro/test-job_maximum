<template>
  <transition name="fade">
    <div class="loader">
      <img class="loader__img" src="../../../public/icons/loader.svg" alt="" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex-start;
  align-items: center;
  justify-content: center;
  background-color: white;

  &__img {
    animation: 1s linear 0s normal none infinite running rot;
    width: 28px;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
