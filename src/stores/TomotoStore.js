import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTomotoStore = defineStore('tomotoStore', () => {
	const timeConfig = ref({
    work: 25,
    shortBreak: 5,
    longBreak: 15
  })

  const activity = ref(false)
  const stage = ref('work')

  const activate = () => {
    activity.value = true
  }

  const stop = () => {
    activity.value = false
  }

  const setStage = (value) => {
    stage.value = value
  }

  return {
    timeConfig,
    activity,
    stage,
    activate,
    stop,
    setStage
  }
})