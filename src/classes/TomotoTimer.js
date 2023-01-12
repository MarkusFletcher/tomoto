export class TomotoTimer {
  constructor([work, short, long]) {
    this.config = {
      work: work * 60,
      short: short * 60,
      long: long * 60
    }
    this.stageList = ['work', 'short', 'work', 'long', 'work']
    this.currentStage = 0
    this.currentTime = this.config[this.stageList[this.currentStage]]
    this.timer
  }
  
  timerStart(callback) {
    this.timer = setInterval(() => {
      if (this.currentTime > 0) {
        if (typeof callback === 'function') {
          callback(); 
        }
        this.currentTime--
      } else {
        if (++this.currentStage == this.stageList.length) {
          this.timerStop()
        }
        this.currentTime = this.config[this.stageList[this.currentStage]]
      }
    }, 1000)
  }

  timerStop() {
    clearInterval(this.timer)
  }
  getCurrentTime() {
    return this.currentTime
  }
}

// const newTimer = new TomotoTimer([0.1, 0.1, 0.1])
// newTimer.timerStart(() => {
//   console.log(newTimer.getCurrentTime())
// })