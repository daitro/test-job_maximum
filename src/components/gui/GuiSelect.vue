<template>
  <select class="select" :disabled="disabled" :value="value" @change="onChange">
    <option disabled value="" selected>{{ placeholder }}</option>
    <option
      class="select__option"
      v-for="item of options"
      :key="item"
      :value="item"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    options: {
      type: Array,
    },
    disabled: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    onChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 200px;
  border: 1px solid rgb(206, 206, 206);
  padding: 8px;
  color: rgb(130, 130, 130);
  cursor: pointer;

  &[disabled] {
    background-color: rgba(159, 159, 159, 0.352);
  }

  &__option {
    color: rgb(53, 53, 53);
  }
}
</style>
