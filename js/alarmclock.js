function AlarmClock () {
  this.currentTime = new Date();
  this.alarmTime = alarmTime;
}
//
// function soundAlarm() {
//   var alarmOn = false;
//   if ((currentTime.hours() == this.hours() && currentTime.minutes() == this.minutes())) {
//     alarmOn = true;
//   }
//   return alarmOn;
// }


exports.alarmClockModule = AlarmClock;
