var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;


function showCurrentTime () {
    var clock = document.getElementById('clock');
    var currentTime = new Date()


    var hours = curremtTime.getHours();
    var min  = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";
     if(hours >= noon) {
         meridian = "PM"
     }

     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
     clock.innerHTML = clockTime;
     
     changeImage();
}