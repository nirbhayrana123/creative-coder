
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
 

/////////tesimonials/////////////////////
 
const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.senials-client');
let index = 0;
const cardWidth = cards[0].offsetWidth + 30; // margin gap included

function update() {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;

  cards.forEach(c => c.classList.remove('active'));
  cards[index].classList.add('active');
}

document.getElementById('next').onclick = () => {
  if (index < cards.length - 1) {
    index++;
    update();
  }
};

document.getElementById('prev').onclick = () => {
  if (index > 0) {
    index--;
    update();
  }
};
////////////top-up/////////////

document.querySelector('.to-top').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


//////////tawk//////////////////

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


//////////parallax-img"//////////////////

window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax-img").forEach(img => {

    const speed = 0.08; // 🔥 slow & premium
    const parent = img.closest(".parallax-box");
    const rect = parent.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom > 0 && rect.top < windowHeight) {
      const offset = (rect.top - windowHeight / 2) * speed;
      img.style.transform = `translateY(${offset}px)`;
    }

  });
});