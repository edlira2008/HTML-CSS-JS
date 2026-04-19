var cars = ['Volvo' , 'BMW' , 'Audi' , 'Ford' ,'Mazda', 'Toyota'];
var text = '';

 text += cars[0] + '<br>';
 text += cars[1] + '<br>';
 text += cars[2] + '<br>';
text += cars[3] + '<br>';
 text += cars[4] + '<br>';
text += cars[5] + '<br>';

document.getElementById('forLoop1').innerHTML = text;
console.log(text);


for (i=0; i < cars.length; i++) {

    text += cars[i] + '<br>';
}


 document.getElementById('forLoop2').innerHTML = text;
 console.log(text);


var text1 = " ";

for(x=1; x <= 5; x++) {
    text1 += "the number is " + x + "<br>";
}
document.getElementById('forLoop3').innerHTML = text1;
console.log(text1);

var cars1 = ['golf' , 'ford' , 'fiat', 'mazda'];
var text2 = '';

text2 += cars1[0] + '<br>';
text2 += cars1[1] + '<br>';
text2 += cars1[2] + '<br>';
text2 += cars1[3] + '<b(r>';

document.getElementById('forLoop4').innerHTML = text2;
console.log(text2);



var text5 = '';

for(c=3; c <= 8; c++) {
    text5 += "the number is " + c + "<br>";
}
 document.getElementById('forLoop5').innerHTML = text5;
 console.log(text5);