<script setup>
import { computed } from 'vue'
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

const SIZE = 366
const STROKE_WIDTH = 10
const COORDINATE = SIZE / 2
const RADIUS = (SIZE / 2) - (STROKE_WIDTH * 2)
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const progress = computed(() => {
  return CIRCUMFERENCE - tomotoStore.percent / 100 * CIRCUMFERENCE
})
</script>

<template>
	<div class="timer">
    <div class="timer__inner">
      <svg class="timer__progress-ring progress-ring" :width="SIZE" :height="SIZE" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="progress-ring__circle" 
          :r="RADIUS" 
          :cx="183" 
          :cy="COORDINATE" 
          :stroke-dashoffset="progress"
          :stroke-dasharray="`${CIRCUMFERENCE} ${CIRCUMFERENCE}`"
          fill="transparent"
          stroke="#F87272"
          stroke-width="10">
        </circle>
      </svg>

      <div class="timer__time time">
        <span class="time__minutes">{{currentMinutes}}</span>
        <span class="time__separator">:</span>
        <span class="time__seconds">{{currentSeconds}}</span>
      </div>
      <button class="timer__toggle-btn" v-if="tomotoStore.isActive" @click="timerStop">Pause</button>
      <button class="timer__toggle-btn" v-else @click="timerStart">Start</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress-ring {
  transition: stroke-dashoffset 1s linear;
  
  &__circle {
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 1s linear;
  }
}
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

  &__progress-ring {
    position: absolute;
    top: 0;
    left: 0;
  }

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
    transition: transform .3s;

    &:hover {
      transform: scale(1.04);
    }
  }
}

.time {
  position: relative;
  &__minutes,
  &__seconds {
    position: absolute;
  }
  &__minutes {
    right: 30px;
  }
  &__seconds {
    left: 30px;
  }
}
</style>