// var inputi1 = document.getElementById("input_id");
// var butoni1 = document.getElementById("btn_id");
// var text1 = document.getElementById("text_id");


// butoni1.onclick = function () {
//     text1.innerHTML = inputi1.value;
// }


var inputi2 = document.getElementById("input_id2");
var inputi4 = document.getElementById("input_id3");

var butoni2 = document.getElementById("btn_id2");
var text2 = document.getElementById("text_id2");
var text3 = document.getElementById("edyta"); 



butoni2.onclick = function () {
    
var text2 = text2.innerHTML = parseInt(inputi2.value) + parseInt(inputi4.value);

if(text2 < 8) {
    text3.innerHTML= "Your result is too low"
}
else if(text2 > 25){
    text3.innerHTML = "Your result is too high" 
}
else{
    text3.innerHTML = "Your results are equal" 
}

 } 