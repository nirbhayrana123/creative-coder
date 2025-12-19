
/*********header scroll header**********/
const editBtn = document.querySelector('.menu');
const model = document.querySelector('.header');

editBtn.addEventListener('click', function () {
  model.classList.toggle('activeshow');
});


/*********header scroll bg**********/

document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector(".header");

  if (!header) {
    console.error("Header not found");
    return;
  }

  if (typeof Lenis === "undefined") {
    console.error("Lenis not loaded");
    return;
  }

  const lenis = new Lenis({
    lerp: 0.08,
    smoothTouch: false
  });

  // ✅ HEADER BG ON SCROLL (LENIS WAY)
  lenis.on("scroll", ({ scroll }) => {
    if (scroll > 50) {
      header.classList.add("bg");
    } else {
      header.classList.remove("bg");
    }
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});










const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.card');
let index = 0;

function update(){
  slider.style.transform = `translateX(-${index * 390}px)`;
  cards.forEach(c=>c.classList.remove('active'));
  cards[index].classList.add('active');
}

document.getElementById('next').onclick = ()=>{
  if(index < cards.length-1){
    index++;
    update();
  }
}

document.getElementById('prev').onclick = ()=>{
  if(index > 0){
    index--;
    update();
  }
}