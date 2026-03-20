var btn1 = document.getElementById("btn1");

btn1.onclick = function() {
    alert("button clicked"); 
}
var btn2 = document.getElementById("btn2");

btn2.onmouseover = function() {
alert("button 2 hovered!");
}

var btn3 = document.getElementById("btn3");
 
btn3.onmouseover = function() {

    alert("button three left!");
}


var btn4 = document.getElementById("btn4");

 btn4.onwheel = function() {

    alert("button 4 wheel");
 }

 var btn5 = document.getElementById("btn5");

 var text1 = document.getElementById("text1");


 btn5.onclick = function() {

    text1.style.color = "pink";
 }
 
 