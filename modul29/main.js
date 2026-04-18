var programingLanguages = ["Python" , "JavaScript" , "Css"];

console.log(programingLanguages);


var programingNumbers = [1,2,3,4,5,6,7,8,9];

console.log(programingNumbers);

//  del veq php

console.log(programingLanguages[1]);

// Push shton elemente ne fund te listes 

programingLanguages.push('Java');
programingNumbers.push('16');

document.write(programingLanguages);
document.write(programingNumbers);



//   pop delete last element
programingNumbers.pop()
 console.log(programingNumbers);



 //unshift - add an element at the beginning of the list
  programingLanguages.unshift("C#");
  console.log(programingLanguages);


// shift - delete the first Element of the list
  programingLanguages.shift();
  console.log(programingLanguages);



//   splice-  cilin pozit , sa elemente , cilen me shtu 

programingLanguages.splice(1, 2, 'Ruby');

console.log(programingLanguages)


// array destructuring 


var students = ["Ahmeti", "Edlira" , "Rigon", "trimi" , "Genti"];

var [s1, s2, s3, s4, s5] = students;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);


var places = ["Obiliq", "Prishtina", "Vushrtrri" , "Peja", "Prizreni", "Ferizaj", "Gjakova", "Tetova", "Istogu", "Kamenica", "Gilani", "Klina", "Paris", "Berlin", "Shkup", "Budapest", "Sarajeva", "Lisbona" , "Moska", "Helsinki" ];

var  [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20] = places;

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);
console.log(p8);
console.log(p9);
console.log(p10);
console.log(p11);
console.log(p12);
console.log(p13);
console.log(p14);
console.log(p15);
console.log(p16);
console.log(p17);
console.log(p18);
console.log(p19);
console.log(p20);
