var AlarmClock = require('./../js/alarmclock.js').alarmClockModule;

var datetime = null,
    date = null;

    var update = function() {
      date = moment(new Date())
      datetime.html(date.format('h:mm:ss a'))
    }

$(document).ready(function() {
  datetime = $('#datetime');
  update();
  setInterval(update, 1000);

  $('form#alarm-form').submit(function(event) {
    event.preventDefault();

    var alarmTimeInput = $('input#alarm-time').val();
    // var alarmTime = moment(alarmTimeInput, 'hh:mm a').format();
    var alarmTime = moment(alarmTimeInput, "hh:mm a");

    setInterval(function() {
      var now = moment();
      var difference = alarmTime.diff(now, 'minutes');

      console.log(difference);

      if (difference === 0) {
        console.log("ALARM");
      }
    }, 1000);



    // if (alarmTime.isSame(now,'minutes')) {
    //   alert("ALARM");
    // }

    // var millisTillAlarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmTime.getHours(), alarmTime.getMinutes(), alarmTime.getSeconds(), alarmTime.getMilliseconds()) - now;


    // if (millisTillAlarm < 0) {
    //   millisTillAlarm += 86400000;
    // }
    // setTimeout(function(){alert("alarm")}, millisTillAlarm);
  });
});
