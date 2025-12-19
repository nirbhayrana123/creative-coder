
/*********header scroll header**********/
const editBtn = document.querySelector('.menu');
const model = document.querySelector('.header');

editBtn.addEventListener('click', function () {
  model.classList.toggle('activeshow');
});


/*********header scroll bg**********/


window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
});






document.addEventListener("DOMContentLoaded", function () {

  const lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
    smoothTouch: false
  })

  lenis.on('scroll', (e) => {
    // console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

})










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