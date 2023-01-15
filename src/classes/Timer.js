export class Timer {
  constructor(time) {
    if (typeof time === 'number' && time >= 0) {
      this._time = time
    } else {
      this._time = 0
    }
  }

  start(callback) {
    this.loop = setInterval(() => {
      if (typeof callback === 'function') {
        callback(this)
      }
      if(this._time-- == 0) {
        this.stop()
      }
    }, 1000)
  }

  stop() {
    clearInterval(this.loop)
  }

  get time() {
    return this._time
  }
}

// const timer = new Timer(10)
// timer.start(() => {
//   console.log(timer.time)
// })