export class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = (24 + ((hour + Math.floor(minute / 60)) % 24)) % 24;
    this.minute = (60 + (minute % 60)) % 60;
  }

  toString() {
    return `${this.hour
      .toString()
      .padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}`;
  }

  plus(minute = 0) {
    this.hour = (24 + this.hour + Math.floor((this.minute + minute) / 60)) % 24;
    this.minute = (60 + ((this.minute + minute) % 60)) % 60;
    return this;
  }

  minus(minute = 0) {
    this.hour = (24 + this.hour + Math.floor((this.minute - minute) / 60)) % 24;
    this.minute = (60 + ((this.minute - minute) % 60)) % 60;
    return this;
  }

  equals(clock) {
    return this.minute == clock.minute && this.hour == clock.hour;
  }
}
