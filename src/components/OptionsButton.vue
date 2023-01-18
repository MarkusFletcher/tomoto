<script setup>
import { useTomotoStore } from '../stores/TomotoStore'

const tomotoStore = useTomotoStore()

const openOptions = () => {
  tomotoStore.toggleOptionsWindow(true)
}
</script>

<template>
  <button @click="openOptions">
    <img class="" src="../assets/shape.svg" alt="">
  </button>
</template>

<style lang="scss" scoped>
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      transform-origin: 50% 50%;
      transition: transform .6s;
      &:hover,
      &:focus {
        transform: rotate(90deg);
      }
    }
  }

  
</style>