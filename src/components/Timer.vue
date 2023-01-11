<script setup>
import { useTomotoStore } from '../stores/TomotoStore.js'

const tomotoStore = useTomotoStore()
</script>

<template>
	<div class="timer">
    <div class="timer__inner">
      <div class="timer__time">
        <span>17</span>
        <span>:</span>
        <span>45</span>
      </div>
      <button class="timer__toggle-btn" v-if="tomotoStore.activity" @click="tomotoStore.stop">Pause</button>
      <button class="timer__toggle-btn" v-else @click="tomotoStore.activate">Restart</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  height: 410px;
  width: 410px;
  border-radius: 205px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 
    -50px -50px 100px 0px rgba(39,44,90, 1),
    50px 50px 100px 0px rgba(18,21,48, 1),
    -50px -50px 100px 0px rgba(46,50,90, 1) inset,
    50px 50px 100px 0px rgba(14,17,42, 1) inset;

  &__inner {
    height: 366px;
    width: 366px;
    border-radius: 183px;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--color-dark-blue);
  }
  &__time {
    font-size: 100px;
    font-weight: bold;
  }
  &__toggle-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--color-font-light);
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 15px;
    margin-right: -8px;

    position: absolute;
    bottom: 90px;
  }
}
</style>