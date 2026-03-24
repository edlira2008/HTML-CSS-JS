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
    text1.style.padding = '20px'
    text1.style.textAlign = 'center'

 }
  var butoni6 = document.getElementById('btni6')
  var tekst = document.getElementById('text2')


 butoni6.onclick = function() {

  tekst.style.cssText = "color:red; font-size:25px; text-align:center; font-family:fantasy;" }
 

  var ifundit = document.getElementById('ifundit')
  var pg = document.getElementById('pg')


  ifundit.onclick=function() {
    pg.setAttribute('class' ,'paragrafi')
  }
  
  var btn_circle = document.getElementById("btnCircle");
  var btn_rect = document.getElementById("btnRect");
  var btn_triangle = document.getElementById("btnTriangle");

  var circle = document.getElementById("circle");
  var rect = document.getElementById("rect");
  var triangle = document.getElementById("triangle");


  btn_circle.onclick = function()
 {
    circle.setAttribute("class" ,  "shape_circle");
 }

   btn_triangle.onclick = function()
   {
    triangle.setAttribute("class", "shape_triangle");
   }
 

  btn_rect.onclick = function()
 {
    rect.setAttribute("class", "shape_rect");
 }
 


  circle.onclick = function()
 {
    circle.setAttribute("class","hide");
 }
  
 triangle.onclick = function()
   {
    triangle.setAttribute("class", "hide");
   }

    rect.onclick = function()
 {
    rect.setAttribute("class", "hide");
 }