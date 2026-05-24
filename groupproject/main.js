function  openMenu(){
    var menu = document.getElementById('menu');
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else (menu.style.display = 'block')
}


let images = ["images/hes.png" , "images/ooo.jpeg"]
let currentIndex = 0;

function changeSlides(direction) {
  currentIndex += direction;

  // Nëse kalon limitin, kthehet në fillim ose fund
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Ndrysho foton
  document.getElementById("f1").src = images[currentIndex];
}
