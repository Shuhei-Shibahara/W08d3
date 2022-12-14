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
    this.seconds = this.seconds.toString()
    if (this.seconds.length < 2) {
      this.seconds = `0${this.seconds}`
    }
    this.minutes = this.minutes.toString()
    if (this.minutes.length < 2) {
      this.minutes = `0${this.minutes}`
    }
    this.hours = this.hours.toString()
    if (this.hours.length < 2) {
      this.hours = `0${this.hours}`
    }
    console.log(`${(this.hours)}:${(this.minutes)}:${(this.seconds)}`);
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
