import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { StepTimer } from '../classes/StepTimer.js'

export const useTomotoStore = defineStore('tomotoStore', () => {

  // State

  const steps = ref(['work', 'short break', 'work', 'long break', 'work'])

  const times = ref({
    work: 15,
    'short break': 5,
    'long break': 10
  })

  const currentTime = ref(times.value.work * 60)

  const isActive = ref(false)

  const currentStep = ref('work')

  const tomotoTimer = ref()

  const isOpenOptionsWindow = ref(false)

  // !State

  // Getters

  const sequenc = computed(() => {
    let arr = []
    steps.value.forEach((el) => {
      arr.push({
        name: el,
        time: times.value[el] * 60
      })
    })
    console.log(arr)
    return arr
  })

  // !Getters

	// Actions

  const setTimes = (values) => {
    if (Array.isArray(values)) {
      times.value.work = values[0]
      times.value['short break'] = values[1]
      times.value['long break'] = values[2]
      currentTime.value = values[0] * 60
    } else {
      console.error('Values is not Array')
    }
  }
  
  const start = () => {
    console.log('start')

    tomotoTimer.value = new StepTimer(sequenc.value)
    
    tomotoTimer.value.start((timer) => {
      currentTime.value = timer.time
      if (timer.time == 0) {
        setStage(timer.currentStepName)
      }
    })
    isActive.value = true
  }

  const stop = () => {
    tomotoTimer.value.stop()
    isActive.value = false
  }

  const restart = () => {
    tomotoTimer.value = NULL
    currentTime.value = values[0] * 60
  }

  const setCurrentStep= (value) => {
    if (steps.value.includes(value)) {
      currentStep.value = value
    } else {
      console.error(`Can't find step "${value}" in steps`)
    }
  }

  const toggleOptionsWindow = (value) => {
    if (typeof value === 'boolean') {
      isOpenOptionsWindow.value = value
    } else {
      isOpenOptionsWindow.value = !isOpenOptionsWindow.value
    }
  }

  // !Actions

  return {
    times,
    currentTime,
    currentStep,
    isActive,
    isOpenOptionsWindow,
    start,
    stop,
    restart,
    setTimes,
    toggleOptionsWindow
  }
})