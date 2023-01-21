import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { StepTimer } from '../classes/StepTimer.js'

export const useTomotoStore = defineStore('tomotoStore', () => {

  const steps = ref(['work', 'short break', 'work', 'long break', 'work'])

  const times = ref({
    work: 15,
    'short break': 5,
    'long break': 10
  })

  const currentTime = ref(times.value.work * 60)

	const sequenc = computed(() => {
    let arr = []
    steps.value.forEach((el) => {
      arr.push({
        name: el,
        time: times.value[el]
      })
    })
    return arr
  })

  const setTimes = (values) => {
    if (Array.isArray(values)) {
      console.log(values)
      times.value.work = values[0]
      times.value['short break'] = values[1]
      times.value['long break'] = values[2]
      currentTime.value = values[0] * 60
    } else {
      console.error('Values is not Array')
    }
  }
  
  const activity = ref(false)

  const stage = ref('work')

  const tomotoTimer = ref()

  const start = () => {
    console.log('start')
    tomotoTimer.value = new StepTimer(sequenc.value * 60)
    
    tomotoTimer.value.start((timer) => {
      currentTime.value = timer.time
      if (timer.time == 0) {
        setStage(timer.currentStepName)
      }
    })
    activity.value = true
  }

  const restart = () => {
    
  }

  const stop = () => {
    tomotoTimer.value.stop()
    activity.value = false
  }

  const setStage = (value) => {
    stage.value = value
  }

  const optionsWindowIsOpen = ref(false)

  const toggleOptionsWindow = (value) => {
    if (typeof value === 'boolean') {
      optionsWindowIsOpen.value = value
    } else {
      optionsWindowIsOpen.value = !optionsWindowIsOpen.value
    }
  }

  return {
    sequenc,
    times,
    setTimes,
    optionsWindowIsOpen,
    toggleOptionsWindow,
    activity,
    stage,
    start,
    stop,
    setStage,
    currentTime
  }
})