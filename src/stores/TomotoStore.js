import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTomotoStore = defineStore('tomotoStore', () => {
	const timeConfig = ref([
    {
      name: 'work',
      time: 5
    },
    {
      name: 'short break',
      time: 3
    },
    {
      name: 'work',
      time: 10
    },
    {
      name: 'long break',
      time: 3
    },
    {
      name: 'work',
      time: 10
    },
  ])

  const settingsIsOpen = ref(true)

  const openSettings = () => {
    settingsIsOpen.value = true
  }

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
    settingsIsOpen,
    openSettings,
    activity,
    stage,
    activate,
    stop,
    setStage
  }
})