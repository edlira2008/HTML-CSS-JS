var butoni = document.getElementById('btn');
var input = document.getElementById('in1');
var input1 = document.getElementById('in2');
var head1 = document.getElementById('juhu');
var head = document.getElementById('juhu1');


butoni.onclick = function() {
    var sum1 = parseInt(input.value) + parseInt(input1.value);

    head.innerHTML = sum1;

    if(sum1 > 20) {
        head1.innerHTML = "ur in the wrong age to learn programming";
    }

    else if(sum1 < 10) {
        head1.innerHTML = "ur too young to learn programming";
    }
     else {
        head1.innerHTML = "ur in the right age to learn programming";

     }

}



var input5 = document.getElementById('in4');
var input4 = document.getElementById('in6');
var btn3 = document.getElementById('btn1');
var tttt = document.getElementById('juhu2');
var tttt1 = document.getElementById('juhu3');

btn3.onclick = function() {
    var sum4 = parseInt(input5.value) + parseInt(input4.value);


  tttt.innerHTML = sum4;


  if(sum4 > 10) {
    tttt1.innerHTML = "the number is greater than 10";

  }
  else if(sum4<10) {
    tttt1.innerHTML = "the number is lower than 10";
  }

  else {
    tttt1.innerHTML = "the numbers are equal";
  }
}



var students = ['Volvo', 'BMW', 'Audi', 'Mazda', 'Golf'];
console.log(students);

// var [p1 , p2 , p3 , p4] = students 

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);



// var emri = "edlira";
// var mbiemri = "kastrati";
// var fullText = emri + " " + mbiemri;
// console.log(fullText);



 students.splice(1, 2, "edlira");
 console.log(students);

  students.pop();
  console.log(students);

  students.push(2);
  console.log(students);


  students.unshift(2008);
  console.log(students);


  students.shift();
  console.log(students);




  var cars = ['volvo', 'golf', 'mercedes', 'opel', 'audi'];

  var text = ""


  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
  text += cars[4] + "<br>";


  document.getElementById('loop2').innerHTML = text;


  for(i=2; i < cars.length; i++){
  text += cars[i] + "<br>";
  }

  document.getElementById('loop3').innerHTML = text;