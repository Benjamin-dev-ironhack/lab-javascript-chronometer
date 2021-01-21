class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      //callback()
    }, 1000)
  }
  getMinutes() {
    if (this.currentTime >= 60){
      return Math.floor(this.currentTime / 60)
    }
    else if (this.currentTime == 0){
      return 0
    }
    
  }
  getSeconds() {
    if (this.currentTime < 60){
      return this.currentTime
    }
    else if (this.currentTime >= 60){
      return (this.currentTime % 60)
    }
  }
  twoDigitsNumber() {
    if(this.currentTime <= 10) {
      return "0" + this.currentTime
    } 
    else {
      return this.currentTime
    }

    //let digit = "0" + (this.currentTime).splice(-2);
    //return digit
    
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
