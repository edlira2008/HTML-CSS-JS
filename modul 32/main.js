

// qito  e ka emrin regex = regular expresions 
var input1 = document.getElementById('input_id');
var btn = document.getElementById('btn_id');
var tekst = document.getElementById('tekst_id');




btn.onclick = function() {

    tekst.innerHTML = input1.value;
}



// e gjen fjalen digital school permes text.search permes ' dhe / osht njejt dmth edhe ta tregon indexin e qayina fdmth veq naj nr palidhje 



var text = 'the best school in the word is digital school';
var result = text.search('digital school');
document.getElementById("result1").innerHTML = result;



var text = 'the best school in the word is digital school';
var result = text.search(/digital school/);
document.getElementById("result2").innerHTML = result;

// kudo ntekst qe ikena digital shool shkojna e bojan replace e tani ku te gjen digital school shkon e zavendson me another school permes tagut replace 



var text = 'the best school in the word is digital school';
var result = text.replace(/digital school/,'another school');
document.getElementById('result3').innerHTML = result;

var text = 'abcdefg'
// qikjo e tregon qe nese ne var regex a osht qajo abc tani e kthen me false edhe me true nese gjenden qaty 
var regex = new RegExp('abc')
document.getElementById('result4').innerHTML = regex.test(text);


// global i bjen g qe e tregon sa her e4 4eka gjet fjalen school dmth si te gjen tparen vazhdonh edhe me tjera jo vew qaty snalet 


var text = '1.the best school in the word is digital school';
var regex = /school/g;
document.getElementById('result5').innerHTML = text.match
(regex);


var text = 'best school in the word is digital school';
var regex = /i/g;
document.getElementById('result6').innerHTML = text.match(regex);

var text = 'best school in the word is digital school';
// dmthy e gjen shkronjatr me ren cilat jon nqat fjali mas pari psh a tani b tani c 
var regex = /[abc]/g;
document.getElementById('result6').innerHTML = text.match(regex);


var text = 'digital school is in top 10 best school in the word';
// i gjen nr prej 0 deri 9 qe juon ne tekst 
var regex = /[0-9]/g;
document.getElementById('result8').innerHTML = text.match(regex);



var text = 'digital school is in top 10 best school in the word';
// i gjen fjalt ne t4ekst qe jon top best school
var regex = /(top|best|school)/g;
document.getElementById('result9').innerHTML = text.match(regex);

var text = '100 percent';
var regex = /\d/g;
document.getElementById('result10').innerHTML = text.match(regex);