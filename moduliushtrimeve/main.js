

// // //  var butoni1 = document.getElementById("btnCircle");
// // //  var butoni2 = document.getElementById("btnTriangle");
// // //  var butoni3 = document.getElementById("btnSquare");

// // //  var div1 = document.getElementById("circle");
// // //  var div2 = document.getElementById("triangle");
// // //  var div3 = document.getElementById("square");


// // //  butoni1.onclick = function() {
// // //     div1.setAttribute("class" , "shape_circle");
// // //  }


// // //   butoni2.onclick = function() {
// // //     div2.setAttribute("class" , "shape_triangle");
// // //  }


// // //   butoni3.onclick = function() {
// // //     div3.setAttribute("class" , "shape_square");
// // //  }


// // //   div1.onclick = function() {
// // //     div1.setAttribute("class" , "hide");
// // //  }


// // //    div2.onclick = function() {
// // //     div2.setAttribute("class" , "hide");
// // //  }

// // //    div3.onclick = function() {
// // //     div3.setAttribute("class" , "hide");
// // //  }




// // // qito jon array dmth ni variabel ku mrena saj me ru shum elemente 
// // var programingLanguages = [ "Python",  "C#","Java Script" ];

// // console.log(programingLanguages);

// // programingLanguages.push("CSS");
// // console.log(programingLanguages);

// // programingLanguages.pop();
// // console.log(programingLanguages);

// // programingLanguages.unshift("wordpress");
// // console.log(programingLanguages);


// // programingLanguages.shift();
// // console.log(programingLanguages);


// // programingLanguages.splice(1 , 2 , "wordp");
// // console.log(programingLanguages);


// // var input = document.getElementById('input1');
// // var input5 = document.getElementById('input2');
// // var btn3 = document.getElementById('hihi');
// // var txt = document.getElementById('text');
// // var result = document.getElementById('result');

// // btn3.onclick = function() {
// //     var sum = parseInt(input.value) + parseInt(input5.value);
// //     result.innerHTML = sum;

// //     if(sum > 10) {
// //         txt.innerHTML = "the result uis greater than 10"
// //     }
// //     else if(sum < 10) { 
// //        txt.innerHTML = "the result is lower than 10"
// //     }
// //     else {
// //         txt.innerHTML = "the result is equal"

// //     }
// // }




// var programingLanguages1 = ["Python" , "CSS" , "JavaScript", "C#" , "HTML" ];
// console.log(programingLanguages1);

// programingLanguages1.push("wordpress");    
// console.log(programingLanguages1);

// programingLanguages1.pop();
// console.log(programingLanguages1);


// programingLanguages1.unshift("edlira");
// console.log(programingLanguages1); 


// programingLanguages1.shift('edlira');
// console.log(programingLanguages1);


// programingLanguages1.splice(2, 243, "rigon");
// console.log(programingLanguages1)


// var noon = 12;


// function showCurrentTime() {
//     var clock = document.getElementById('clock');
//     var currentTime = new Date();


//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();


//     var meridian = "AM"

//     if(hours >= noon) {
//         meridian = "PM";
//     }

//     var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
//     clock.innerText = clockTime; 
// }

// var oneSecond = 1000;
// setInterval(showCurrentTime, oneSecond);

// function updateClock() {
//     var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
//         wakeuptime = wakeUpTimeSelector.value;

//         var dsTimeSelector = document.getElementById("dsTimeSelector");
//         dstime = dsTimeSelector.value;


//         var sleepTimeSelector = document.getElementById('sleepTimeSelector');
//         sleeptime = sleepTimeSelector.value;
//      }
//  var saveButton = document.getElementById('saveButton');
//  saveButton.addEventListener('click', updateClock);



//  var emra = ['edlira' , 'rigon', 'joni', 'ylli'];
//  var g;

//  for(g of emra){
//     document.getElementById('loops').innerHTML += g + '<br>'; }


//     let i = 8;
//     var text = '';

//     do{
//         i = i + 1;
//         text += 'edlira = ' + i + '<br>';
//     }while(i<20)

//         document.getElementById('loops4').innerHTML = text;
 


//         var emrat = {firstName: 'edlira', lastName: 'Kastrati' , Age: 17};
//         var text = ''
//         var x;


//         for(x in emrat){
//             text += emrat [x] + '<br>';
//         }
//         document.getElementById('loops5').innerHTML = text;


//         cars = ['audi' , 'bmw', 'mazda', 'ford', 'opel', 'golf'];
//         var text1 = '';

//         text1 += cars[0] += '<br>';
//         text1 += cars[1] += '<br>';
//         text1 += cars[2] += '<br>';
//         text1 += cars[3] += '<br>';
//         text1 += cars[4] += '<br>';
//         text1 += cars[5] += '<br>';

//         document.getElementById('loops6').innerHTML = text1;


//         for(s=0; s < cars.length; s++) {
//       text1 += cars[s];
//         }
//         document.getElementById('loops7').innerHTML = text1;



//         var loop = '';

//         for(o=1; o <=10; o++){
//             loop += 'the number is' + o + '<br>';
//         }
//         document.getElementById('loops8').innerHTML = loop;



//         var txt = 'edlira';
//         var g;
//         for(g of txt)
// { document.getElementById('loops9').innerHTML += g + "<br>"}




    var names = ['edlira' ,'ylli' ,'rigoni','gent'];
    var text = '';
    for(text of names) {
        document.getElementById('loops9').innerHTML += text + '<br>';
    }

//  var emri = {firstName:'lili', lastName:'kastrati' , age: 17}
//  var g;
//  var text ='';
//  for(g in emri){
//     text += emri[g] + '<br>';
//  }
//  document.getElementById('loops10').innerHTML = text;

 var juhu = 'edlira';
 var text3;

for(text3 of juhu){
    document.getElementById('loops11').innerHTML  += text3 + '<br>';
}



var i = 'kastrati';
var  h;
for(h of i){
    document.getElementById('loops10').innerHTML += h + '<br>'
}