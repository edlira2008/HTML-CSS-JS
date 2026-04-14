var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;


function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();


    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();


    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }


    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();


};
// setinterval e perdor per me boi update sene psh ndrron qdohere si te ora qe e tregon meniher 

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);


function changeImage()  {
    var time = new Date().getHours();

    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById('timeImage');
// krahasim ==
    if(time == wakeuptime) {
        image = "img/morning.gif";
    }
    else if(time == dstime) {
        image = "img/class.gif";
    }
    else if(time == sleeptime) {
        image = "img/night.gif";
    }
    

    imageHTML.src = image;

}
 function updateClock() {
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
        wakeuptime = wakeUpTimeSelector.value;

        var dsTimeSelector = document.getElementById("dsTimeSelector");
        dstime = dsTimeSelector.value;


        var sleepTimeSelector = document.getElementById('sleepTimeSelector');
        sleeptime = sleepTimeSelector.value;
     }
 var saveButton = document.getElementById('saveButton');
 saveButton.addEventListener('click', updateClock);