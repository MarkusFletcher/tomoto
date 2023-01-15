import { Timer } from './Timer'

export class StepTimer {
  constructor(sequence) {
    this._createTimerList(sequence)
    this.currentStep = 0
    this.totalSteps = sequence.length
  }

  start(callback) {
    this._list[this.currentStep].timer.start((timer) => {
      this._time = timer.time
      if (timer.time == 0 && this.currentStep < (this.totalSteps - 1)) {
        this.currentStep++
        this.start(callback)
      }
      if (typeof callback === 'function') {
        callback(this)
      }
    })
  }

  stop() {
    this._list[this.currentStep].timer.stop()
  }

  reset() {
    this.currentStep = 0
  }

  updateSequence(sequence) {
    _createTimerList(sequence)
    this.totalSteps = sequence.length
  }

  _createTimerList(sequence) {
    if (Array.isArray(sequence)) {
      this._list = []
      sequence.forEach(({name: name, time: time}, idx) => {
        if (this.stepValidator(name, time)) {
          const timer = new Timer(time)
          this._list.push({
            idx: idx,
            name: name,
            time: time > 0 ? time : 0,
            timer: timer
          })
        } else {
          throw 'Error: invalid step format. Need {string, number}'
          return
        }
      })
    } else {
      throw 'Error: invalid sequence format. Need array({name: string, time: number})'
      return
    }
  }

  stepValidator(name, time) {
    return ((typeof name === 'string') && (typeof time === 'number'))
  }

  get time() {
    return this._time
  }

  get currentStepName() {
    return this._list[this.currentStep].name
  }
}

// const list =[
//   {
//     name: 'work',
//     time: 5
//   },
//   {
//     name: 'short break',
//     time: 3
//   },
//   {
//     name: 'work',
//     time: 10
//   },
//   {
//     name: 'long break',
//     time: 3
//   },
//   {
//     name: 'work',
//     time: 10
//   },
// ]

// const stepTimer = new StepTimer(list)
// stepTimer.start((timer) => {
//   console.log('step',timer.currentStep)
//   console.log('time',timer.time)
// })