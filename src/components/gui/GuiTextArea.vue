<template>
  <textarea class="text-area" @input="onInput" placeholder="Введите текст" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-area {
  resize: none;
  max-width: 380px;
  width: 100%;
  height: 120px;
  color: rgb(130, 130, 130);
  padding: 8px;
  border: 1px solid rgb(206, 206, 206);
  box-sizing: border-box;
}
</style>
