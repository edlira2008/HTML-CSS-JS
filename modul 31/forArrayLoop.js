var  names = [ 'steve' , 'bill', 'mark'];
var x;
for(x of names) {
    document.getElementById('forOfArrayLoop').innerHTML += x + "<br>";
}