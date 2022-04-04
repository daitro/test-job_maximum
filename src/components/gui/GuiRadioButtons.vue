<template>
  <div class="radio-buttons">
    <label class="radio-button" v-for="(option, index) of options" :key="index">
      <div class="radio-button__circle">
        <div
          :class="{ 'radio-button__circle-active': value === option.value }"
        />
      </div>

      <input
        class="radio-button__input"
        type="radio"
        :name="name"
        :checked="value === option.value"
        :value="option.value"
        @change="onChange"
      />
      {{ option.text }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    name: {
      type: String,
    },
    value: {
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
.radio-buttons {
  display: flex;
  flex-direction: column;
}

.radio-button {
  font-size: 14px;
  line-height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__circle {
    width: 18px;
    height: 18px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 8px;
  }

  &__circle-active {
    width: 10px;
    height: 10px;
    margin: 3px;
    background-color: black;
    border-radius: 50%;
  }
}
</style>
