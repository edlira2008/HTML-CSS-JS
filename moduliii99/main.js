var a = 45;
a++
console.log(a);
// document.write(a);
 

var b = 30;
b--
console.log(b);


var c = 50;
c+=8
console.log(c);

var d = 70
d-=85
console.log(d);


var f = 80
f/=2
console.log(f);


var g = 65;
g*=3
console.log(g)



var s = 80
var e = 50

console.log( s == e);
console.log( s != e);


console.log(!(s == 7 || s != 50));



places = ['period' , 'prishtina' , 'gjilan' , 'istog', 'peja']

names = [p1 , p2 , p3 , p4] = places

console.log(names);
console.log(p1);
console.log(p2);

function displayAlert() {
    alert('edlira the new programmer')
}
displayAlert();

function mbledhja(numri1,numri2) {
  return numri1 + numri2;
}
document.write(mbledhja(8,5));

 
function parametra(a,b,c) {
  return  a + b + c;
}

document.write(parametra(2,4,6));


var Car = { name: 'audi', type:'q3', licensePlate: '01-317-GS'};

alert(Car.licensePlate);
alert(Car.type);



var buton1 = document.getElementById('click1');


buton1.onclick = function(){
    alert('this button is clicked');
}

var buton2 = document.getElementById('mouse');


buton2.onmouseover = function() {
    alert('this button is mouse over function');
}


var buton3 = document.getElementById('click2');
var text = document.getElementById('head')



buton3.onclick = function() {
    text.style.color = 'red';
}


var butoni = document.getElementById('btn')
var prgf = document.getElementById('p');

butoni.onclick=function() {
    prgf.setAttribute('class' , 'paragrafi');
}


var btnn = document.getElementById('rrethi');
var btn2 = document.getElementById('katrori');

var circle1 = document.getElementById('circle');
var square1 = document.getElementById('square');


btnn.onclick = function() {
    circle1.setAttribute('class' , 'shapecircle');
}

btn2.onclick = function() {
    square1.setAttribute('class' , 'shapesquare');
}


circle1.onclick = function() {
    circle1.setAttribute('class' , 'hide');
}



square1.onclick = function() {
    square11.setAttribute('class' , 'hide');
}

var cars = [ 'Audi' , 'Bmw', 'Skoda' , 'Ford'];
cars.push('edlira');
console.log(cars);

cars.pop();
console.log(cars);



cars.unshift('mazda')
console.log(cars);


cars.shift();
console.log(cars);


cars.splice(1,2,1);
console.log(cars);



input = document.getElementById('input1');
buto = document.getElementById('b00');
header = document.getElementById('head1');


buto.onclick = function() {
    header.innerHTML = input.value;
}


var input1 = document.getElementById('input2');
var input2 = document.getElementById('input3');
var bi = document.getElementById('b000');
 var hit = document.getElementById('head3');
var result = document.getElementById('result');


bi.onclick = function() {
    var sum = parseInt(input1.value) + parseInt(input2.value);

    result.innerHTML = sum;



if(sum > 20) {
 hit.innerHTML = 'ur way too old for this';
}
 else if(sum < 20){
    hit.innerHTML = 'u cant be part of  our group';
} 
else {
   hit.innerHTML = 'u can be part of our group';


}


}



let i = 6;

var text = "";

do {
    i = i +1;
    text += "i=" + i + "<br>"
}while (i<20)

    document.getElementById('doWhileLoop').innerHTML = text;



    let e = 20;
    var text2 = "";

    do {
        e = e + 1;
        text += "e=" + e + '<br>'
    } while(e <85);

    document.getElementById('doWhileLoop2').innerHTML = text2;


    var names1 = ['edlira', 'jona' , 'zahir' , 'qefja'];
    var f;

    for(f of name) {
        document.getElementById('HEHE').innerHTML += f + '<br>';
    }