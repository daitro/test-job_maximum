<template>
  <button :disabled="disabled" class="button">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 120px;
  line-height: 24px;
  color: white;
  padding: 8px;
  background-color: orange;
  text-transform: uppercase;

  &[disabled] {
    background-color: rgba(128, 128, 128, 0.448);
  }
}
</style>
