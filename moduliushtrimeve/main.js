// var butoni1 = document.getElementById("btn1");

// butoni1.onclick = function() {
//     alert("this button is onclick")
// }
 
// var butoni2 = document.getElementById("btn2");

// butoni2.onmouseover = function() {
//     butoni2.style.cssText = "color:red;"
//     alert("this button ois hovered") }


//     var butoni3 = document.getElementById("btn3");
//     butoni3.onwheel = function() {
//         alert("this button is onwheel mode")
//     }

// var a = 10;
// a++
// console.log(a);

// var b = 100;
// b-- 
// console.log(b)


// var c = 20;
// var d = 40;
// console.log(c+d);


// var e = 40;
// console.log(40/2)

// var f = 9;
// f*=2
// console.log(f)


// var dh = 66;
// var nj = 70;

//  console.log(dh == nj);
//  console.log( dh != nj);
//  console.log(dh = nj);

//  function mbledhja (numri1, numri2) {

//     return numri1 + numri2 
//  }
//  document.write (mbledhja(20,8));

//  function toSeconds (m) {
//     return m/120
//  }
//  console.log(toSeconds(2))

//  function toParametra (a, b ,c) {

//     return  a + b + c
//  }
//  console.log(toParametra(7,2,3));

 var butoni1 = document.getElementById("btnCircle");
 var butoni2 = document.getElementById("btnTriangle");
 var butoni3 = document.getElementById("btnSquare");

 var div1 = document.getElementById("circle");
 var div2 = document.getElementById("triangle");
 var div3 = document.getElementById("square");


 butoni1.onclick = function() {
    div1.setAttribute("class" , "shape_circle")
 }


  butoni2.onclick = function() {
    div2.setAttribute("class" , "shape_triangle")
 }


  butoni3.onclick = function() {
    div3.setAttribute("class" , "shape_square")
 }


  div1.onclick = function() {
    div1.setAttribute("class" , "hide")
 }


   div2.onclick = function() {
    div2.setAttribute("class" , "hide")
 }

   div3.onclick = function() {
    div3.setAttribute("class" , "hide")
 }