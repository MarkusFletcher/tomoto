<script setup>
  //https://codepen.io/sebellows/pen/jLQpZe

  import { ref } from 'vue'
  const props = defineProps({
    value: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: Number,
      required: false
    }
  })

  const currentValue = ref(value)

  defineExpose({
    currentValue
  })



  const emit = defineEmits([])


  const increment = () => {

  }

  const decrement = () => {

  }

  const _updateValue = (newValue) => {
    const oldValue = value
  }
</script>

<template>
  <div class="input-wrapper">
    currentValue: {{ value }}
    <div class="input-number">
      <button type="button" @click="decrement">−</button>
      <span>{{value}}</span>
      <button type="button" @click="increment">+</button>
    </div>
    <div class="label">label</div>
  </div>
</template>

<style lang="scss" scoped>
  .label {
    font-size: 12px;
    font-weight: bold;
    color: var(--color-gray);
    text-align: center;
    margin-top: 6px;
  }
  .input-number {
  position: relative;
  width: 100px;
  height: 40px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 20px;
  margin: 2px;
}

.input-number span {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  display: inline-block;
  background-color: hsl(229, 52%, 96%);
  height: 100%;
  width: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: var(--color-font-dark);
  letter-spacing: -1px;
}

.input-number button {
  display: inline-block;
  width: 50px;
  height: 100%;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: hsl(229, 14%, 76%);
  transition: .2s ease;
}

.input-number button:nth-of-type(1) {
  padding-right: 20px
}

.input-number button:nth-of-type(2) {
  padding-left: 20px;
}

.input-number button:hover {
  background-color: hsl(231, 28%, 87%);
  background-color: var(--color-orange);
}
</style>