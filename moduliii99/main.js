
// let i = 0;

// var text =''

// do{
//     i = i +1;
//    text += 'i=' + i + '<br>'
// }while(i<7)

//     document.getElementById('qkemi').innerHTML = text;



//     var students = ['edlira' , 'jona' , 'qefja'];
//     var o;

//   for(o of students) {
//     document.getElementById('hello').innerHTML += o + '<br>';
// }


// var emra = {firstName: 'edlira',  lastName: 'Kastrati' , age:'17'}
// var text ='';

// var x;


// for(x in emra){
//     text += emra[x] + '<br>'
// }
// document.getElementById('btm').innerHTML = text;

// var kerri = ['audi', 'bmw' , 'golf' , 'mazda'];
// var text = ''

// text += kerri[0] + '<br>';
// text += kerri[1] + '<br>';
// text += kerri[2] + '<br>';
// text += kerri[3] + '<br>';


// document.getElementById('kerre').innerHTML = text;


// for(e=0; e < kerri.length; e++) {
//     text += kerri[e] +'<br>';
// }

// document.getElementById('kerri').innerText = text;
  

// var text= '';

// for(u=1; u <5; u++){
// text += u + "<br>";
// }

// document.getElementById('numri').innerHTML = text;

// var text5 = '';

// for(j=4; j < 21; j++){
//     text5 += "the number is" + j + "<br>";

// }
// document.getElementById('numri2').innerHTML = text5;


// let r = 0;
// var text=''
// do{r = r +1;
//     text += "r=" + r + "<br>";}
//     while(r < 10);

//     document.getElementById('ex').innerHTML = text;

//     var juhu = ['numri' , 'shkronja' , 'pika' ,'presja']
//     var x;
//     for(x of juhu){
//    document.getElementById('ex1').innerHTML += x + "<br>" ;

//     }


//     var njerz = {firstName: 'edlirA', lastName:'kastro' , age: '19'}
//     var text = '';
//     var d;
//      for(d in njerz) {
//         text += njerz[d] + "<br>";
//      }
//      document.getElementById('ex2').innerHTML = text;

//      var js = 'javascript';

//      var x;

//      for(x of js){
//         document.getElementById('ex3').innerHTML += x + '<br>';
//      }


//      let y = 0;

//      var g ='';

//      do{ y = y +1;
//      g += "y=" + y + "<br>";
//      }while(y <25);

//      document.getElementById('ex4').innerHTML = g;

//      var nxansa = ['edi' , 'liloi', 'edli']
   
//      var t;
//      for(t of nxansa){
//         document.getElementById('ex5').innerHTML += t + "<br>";
//      }

//      var u = 'EDLIRAKASTRTAI';
//      var text;
//       for(text of u) {
//         document.getElementById('ex6').innerHTML += text + '<br>';
//       }

//       var text = 'the number 5 is the best number to use for that';
//       var result = text.search(/use|number/);
//       document.getElementById('result1').innerHTML = result;


//       var text = 'edlira kastrati is a student from gymnaisum 17 february';
//       var result = text.replace(/edlira kastrati/,'lili biqi');
//       document.getElementById('result2').innerHTML = result;


//       var text = 'jona is edliras sister';
//       var regex = /s/g;
//       document.getElementById('result3').innerHTML = text.match(regex);

//       var text = 'jona dhe edlira jane motra';
//       var regex = /(jona|edlira|motra)/g;
//       document.getElementById('result4').innerHTML = text.match(regex);


//       var text = 'edlira is a student at digital school for almost 1 year';
//       var regex = /[1-9]/g
//       document.getElementById('result6').innerHTML = text.match(regex);


//       var text = 'jona kastrati is a 20 years old';
//       var result = text.replace(/jona kastrati/,'xovi biqi');
//       document.getElementById('result7').innerHTML = result;


      

// var text = 'shkolla digjitale is the best school for programming';
// var regex = /t/g;
// document.getElementById('result8').innerHTML = text.match(regex);

// var text = 'abcgfksjfk';
// var regex = new RegExp('abcfg')
// document.getElementById('result9').innerHTML = regex.test(text);


// function validation() {
//   var name = document.getElementById('name').value;
//   var age = document.getElementById('age').value;
//   var city = document.getElementById('city').value;

//  var name_regex = /^[A-Za-z]+$/;


//     var age_regex = /^[0-9]+$/;



//     if(!(name.match(name_regex))|| !(age.match(age_regex)) || city == '') {

    
//     if(!(name.match(name_regex))){
//         document.getElementById('name_error').style.visibility = 'visible';
//     } else {

//         document.getElementById('name_error').style.visibility = 'hidden'
//     }
   

//     if(!(age.match(age_regex))){
//         document.getElementById('age_error').style.visibility = 'visible';
//     }else{
      
//         document.getElementById('age_error').style.visibility = 'hidden'
//     }
//   if( city == '') {
//     document.getElementById('city_error').style.visibility ='visible';
//   }else {
//     document.getElementById('city_error').style.visibility = 'hidden';
//   }
//   return false;


//  } else {
    
//     document.getElementById('name_error').style.visibility = 'hidden';
//     document.getElementById('age_error').style.visibility = 'hidden';
//     document.getElementById('city_error').style.visibility = 'hidden';

// return true;
//   }
  
// }


function validation() {

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;

    

    var name_regex = /^[A-Za-z]+$/;

    var age_regex = /^[0-9]+$/;

    if(!(name.match(name_regex)) || !(age.match(age_regex)) ||  city == ''){

     if(!(name.match(name_regex)))
        {
        document.getElementById('name_error').style.visibility = 'visible';
    }else {
        document.getElementById('name_error').style.visibility = 'hidden';
    }

if(!(age.match(age_regex)))
{
    document.getElementById('age_error').style.visibility = 'visible';
}else {
    document.getElementById('age_error').style.visibility = 'hidden';
}



if(city == '') {
    document.getElementById('city_error').style.visibility ='visible';
}else {
    document.getElementById('city_error').style.visibility ='hidden';
}
return false;

 }else {
document.getElementById('name_error').style.visibility = 'hidden';
document.getElementById('age_error').style.visibility = 'hidden';
document.getElementById('city_error').style.visibility = 'hidden';


return true; 

 }
}
 var color = ['red' , 'blue', 'pink', 'yellow'];

 var names = ['edlira','zahir' , 'qefja', 'jona'];

function changeColor() {
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)];
}





function changeName() {
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}


setInterval(changeColor , 100);
setInterval(changeName , 100);
