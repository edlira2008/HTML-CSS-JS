var programingLanguages = ["Python","CSS","Java Script"];

console.log(programingLanguages);


// shton element nfund tlistes 
  programingLanguages.push('JavaCSS');
 document.write(programingLanguages);
//  e hek ni element nfund
 programingLanguages.pop();
 document.write(programingLanguages);

//  e shton nfillim tlistes 
 programingLanguages.unshift('edlira');
 console.log(programingLanguages);
//  e hek nfillim elementin 
 programingLanguages.shift('edlira');
 console.log(programingLanguages);


//  splice  
programingLanguages.splice(1,1, 'kastrati');
console.log(programingLanguages);
