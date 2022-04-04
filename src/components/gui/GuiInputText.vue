<template>
  <div class="input-text">
    <input
      class="input-text__field"
      placeholder="Другое"
      type="text"
      :value="value"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.input-text {
  margin-top: 12px;
  &__field {
    width: 200px;
    color: rgb(130, 130, 130);
    padding: 8px;
    border: 1px solid rgb(206, 206, 206);
    box-sizing: border-box;
  }
}
</style>
