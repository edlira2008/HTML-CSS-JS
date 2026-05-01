let n = 0;
let x = 0;
var text = '';


while(n < 6) {
    n++
x+=n;

text += "after pass" + n + ', x =' + x + "<br>";
    // x+=n; x e rrit per n  si x=n

}


document.getElementById('whileLoop').innerHTML = text;