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

  const setTimes = () => {
  }

  const setWorkTime = (time) => {
    times.value.work = time
  }

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
    optionsWindowIsOpen,
    toggleOptionsWindow,
    activity,
    stage,
    start,
    stop,
    setStage
  }
})