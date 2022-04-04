<template>
  <div class="notification-block">
    <div class="notification-block__img">
      <p class="notification-block__text">Заявка отправлена.</p>
      <img
        @click="$router.push({ name: 'FormPage' })"
        class="notification-block__icon-close"
        src="../../public/icons/icon-close.svg"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notification-block {
  height: 100vh;
  position: relative;

  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: calc(-300px / 2);
    margin-left: calc(-400px / 2);
    background-image: url("../../public/img/success_img.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
    width: 400px;
    border: 5px solid black;
  }

  &__text {
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    padding-top: 12px;
    text-align: center;
  }

  &__icon-close {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
}
</style>
