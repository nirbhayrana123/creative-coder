
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



if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.8,
      smoothTouch: false
    })

    /* header bg on scroll */
    lenis.on('scroll', ({ scroll }) => {
      if (scroll > 50) {
        header.classList.add("bg")
      } else {
        header.classList.remove("bg")
      }
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }










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

var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

(function () {
  var s1 = document.createElement("script");
  var s0 = document.getElementsByTagName("script")[0];

  s1.async = true;
  s1.src = "https://embed.tawk.to/675ffc63af5bfec1dbdcaad8/1if7f3q10";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");

  s0.parentNode.insertBefore(s1, s0);
})();

