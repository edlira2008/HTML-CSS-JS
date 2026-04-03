// var mosha=10

// if(mosha<8) {
//     document.write("your child is too young to learn programming")
// }else {
//  document.write("we will call you soon to let u know for the groups")
// }

// var age = 20;

// if(age<8) {
//     document.write("Your child is too young to learn IT");
// }
// else if(age>18){
//     document.write("Your child is too old for our course");
// }
// else{
//     document.write("we will call u soon to let u know for the groups");
// }


var input = document.getElementById('input_id');
var btn = document.getElementById('btn_id');
var text = document.getElementById('text_id');

btn.onclick = function() {
    text.innerHTML = input.value;
}

var num1  = document.getElementById('input_id1');
var num2  = document.getElementById('input_id2');
var btn2  = document.getElementById('btn_id2');
var result  = document.getElementById('result_id');
var text2  = document.getElementById('text_id2');


btn2.onclick = function(){
    var sum = parseInt(num1.value) + parseInt(num2.value);

    result.innerHTML = sum;

    if(sum > 10) {
        text2.innerHTML = "the result is greater than 10.";
    }
    else if(sum < 10){
    text2.innerHTML = "the result is less than 10.";
    }
    else {
    text2.innerHTML = "the result is equal to 10.";
    }
}