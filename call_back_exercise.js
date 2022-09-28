class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // this.printTime();
    setInterval(this._tick.bind(this), 0);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // if (this.seconds < 10){
    //     this.seconds = `0${this.seconds}`
    // }
    // debugger
    // if (this.minutes < 10 && this.minutes.length < 2){
    //     this.minutes = `0${this.minutes}`
    // }
    // if (this.hours < 10){
    //     this.hours = `0${this.hours}`
    // }
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    console.log(`${zeroPad(this.hours,2)}:${zeroPad(this.minutes)}:${zeroPad(this.seconds)}`);
  }
  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    ++this.seconds;
    if (this.seconds >= 60){ this.seconds = 0; this.minutes++;};
    if (this.minutes >= 60){ this.minutes = 0; this.hours++};
    if (this.hours >= 24){ this.hours = 0;};
    this.printTime();
  }
}

const clock = new Clock();
