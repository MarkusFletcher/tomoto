<script setup>
import { ref } from 'vue'
import { useTomotoStore } from '../stores/TomotoStore'

import VInputNumber from './ui/InputNumber.vue'

const tomotoStore = useTomotoStore()

const workTime = ref(25)
const shortBreakTime = ref(15)
const longBreakTime = ref(5)

const close = () => {
  tomotoStore.toggleOptionsWindow(false)
}
</script>

<template>
  <transition>
    <div class="overlay" v-if="tomotoStore.optionsWindowIsOpen" @click.self="close">
      <div class="modal">
        <div class="modal__header">
          <h2 class="modal__title">Settings</h2>
          <div class="modal__close" @click="close">
            <img class="modal__close-img" src="../assets/xmark.svg" alt="">
          </div>
        </div>
        <div class="modal__content">
          <div class="modal__section">
            <h3 class="modal__subtitle">Time (minutes)</h3>
            <div class="modal__times">
              <v-input-number v-model:value="workTime" :min="0" label="work"></v-input-number>
              <v-input-number v-model:value="shortBreakTime" :min="0" label="short break"></v-input-number>
              <v-input-number v-model:value="longBreakTime" :min="0" label="long break"></v-input-number>
            </div>
          </div>
        </div>
        <div class="modal__actions">
          <button class="modal__button-apply">Apply</button>
        </div>
      </div>
    </div>
  </transition>
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
    
    &__close {
      cursor: pointer;
    }

    &__close-img {
      width: 20px;
      height: 20px;
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

    &__actions {
      transform: translateY(50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__button-apply {
      $_heigth: 40;
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      height: #{$_heigth}px;
      min-width: 160px;
      background-color: var(--color-orange);
      border: none;
      border-radius: #{$_heigth}px;
      cursor: pointer;
    }
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>