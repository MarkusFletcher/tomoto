import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTomotoStore = defineStore('tomotoStore', () => {

  const steps = ref(['work', 'short break', 'work', 'long break', 'work'])

  const times = ref({
    work: 15,
    'short break': 5,
    'long break': 10
  })

	const sequenc = computed(() => {
    let arr = []
    steps.value.forEach((el) => {
      console.log(el)
      arr.push({
        name: el,
        time: times.value[el]
      })
    })
    return arr
  })

  const setTimes = (values) => {
    if (Array.isArray(values)) {
      times.value.work = values[0]
      times.value['short break'] = values[1]
      times.value['long break'] = values[2]
    } else {
      console.error('Values is non Array')
    }
  }
  
  const activity = ref(false)

  const optionsWindowIsOpen = ref(false)

  const toggleOptionsWindow = (value) => {
    if (typeof value === 'boolean') {
      optionsWindowIsOpen.value = value
    } else {
      optionsWindowIsOpen.value = !optionsWindowIsOpen.value
    }
  }

  const stage = ref('work')

  const start = () => {
    activity.value = true
  }

  const stop = () => {
    activity.value = false
  }

  const setStage = (value) => {
    stage.value = value
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
    setStage
  }
})