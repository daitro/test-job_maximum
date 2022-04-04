<template>
  <div class="checkbox">
    <label class="checkbox__label" for="checkbox">
      <img
        v-if="value"
        src="../../../public/icons/icon-check.svg"
        alt="checked"
      />
      <input
        class="checkbox__input"
        type="checkbox"
        id="checkbox"
        :checked="value"
        @change="onChange"
      />
      <div class="checkbox__text">{{ text }}</div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.checked);
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  display: flex;
  margin-top: 16px;

  &__label {
    display: flex;
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    cursor: pointer;
  }

  &__input {
    display: none;
  }

  &__text {
    position: absolute;
    font-size: 14px;
    line-height: 20px;
    left: 24px;
  }
}
</style>
