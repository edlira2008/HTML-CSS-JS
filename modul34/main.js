// function printName() {
// document.write('Edlira');
// document.write('<br>');
// // settimeout tregon per sa koh podon me ndodh qaj ekzekutim
// setTimeout(
//     function(){
//          document.write('Detjon'); }, 3000 // qiky 3000 e tregon per sa sekonda 
// )
// document.write('Drin');

// }

// printName();



var color = ['red' , 'green' , 'purple'];

var names = ['omer' , 'rigon' , 'ernes'];

// queryselector kurndojna me marr diqka qe ska id 
function changeColor() {  
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)];
}


// math random (0.1) = ta jepn ni nr random  psh 0.1 , 0.3 , 0.7 e bojna herre 3 per color length se i kena veq 3 nghyra 

// math.floor e rrumbullakson nr psh 5.3 = 5 ,  6.6 =7 




function changeName() {
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)];
}


setInterval(changeColor, 2000);
// setInterval e perdorum per me i vendos sekondat per sa mu ndrru
setInterval(changeName, 2000);