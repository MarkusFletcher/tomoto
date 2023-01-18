import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  const optionsWindowIsOpen = ref(false)

  const toggleOptionsWindow = (value) => {
    if (typeof value === 'boolean') {
      optionsWindowIsOpen.value = value
    } else {
      optionsWindowIsOpen.value = !optionsWindowIsOpen.value
    }
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
    optionsWindowIsOpen,
    toggleOptionsWindow,
    activity,
    stage,
    activate,
    stop,
    setStage
  }
})