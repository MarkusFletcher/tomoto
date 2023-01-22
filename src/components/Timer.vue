<script setup>
import { ref, computed } from 'vue'
import { useTomotoStore } from '../stores/TomotoStore.js'


const tomotoStore = useTomotoStore()

const currentMinutes = computed(() => {
  const min = Math.floor(tomotoStore.currentTime / 60)
  return min < 10 ? `0${min}` : min
})

const currentSeconds = computed(() => {
  const sec = tomotoStore.currentTime % 60
  return sec < 10 ? `0${sec}` : sec
})

const timerStart = () => {
  tomotoStore.start()
}

const timerStop = () => {
  tomotoStore.stop()
}
</script>

<template>
	<div class="timer">
    <div class="timer__inner">
      <div class="timer__time">
        <span>{{currentMinutes}}</span>
        <span>:</span>
        <span>{{currentSeconds}}</span>
      </div>
      <button class="timer__toggle-btn" v-if="tomotoStore.isActive" @click="timerStop">Pause</button>
      <button class="timer__toggle-btn" v-else @click="timerStart">Start</button>
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
width: 270px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
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
    transition: transform .3s;

    &:hover {
      transform: scale(1.04);
    }
  }
}
</style>