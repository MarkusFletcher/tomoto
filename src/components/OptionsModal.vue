<script setup>
import { ref } from 'vue'

import VInputNumber from './ui/InputNumber.vue'

const workTime = ref(25)
</script>

<template>
  <div class="overlay">
    <div class="modal">
      <div class="modal__header">
        <h2 class="modal__title">Settings</h2>
        <div class="modal__close">X</div>
      </div>
      <div class="modal__content">
        <div class="modal__section">
          <h3 class="modal__subtitle">Time (minutes)</h3>
          <div class="modal__times">
            <v-input-number v-model="workTime"></v-input-number>
            <v-input-number v-model="workTime"></v-input-number>
            <v-input-number v-model="workTime"></v-input-number>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: rgba($color: #000000, $alpha: .7);
    z-index: 100;
  }

  .modal {
    margin: auto;
    flex-grow: 1;
    background-color: #fff;
    max-width: 540px;
    border-radius: 25px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 40px;
      border-bottom: 2px solid var(--color-gray-light);
    }

    &__title {
      color: var(--color-font-dark);
      font-size: 28px;
      font-weight: bold;
    }

    &__subtitle {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: var(--color-font-dark);
      margin-bottom: 20px;
    }

    &__section {
      padding: 30px 40px;
    }

    &__times {
      display: flex;
      gap: 20px;
    }
  }
</style>