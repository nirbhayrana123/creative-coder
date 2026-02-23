/*********header scroll header**********/
const editBtn = document.querySelector('.menu');
const model = document.querySelector('.header');

editBtn.addEventListener('click', function () {
  model.classList.toggle('activeshow');
});

document.querySelectorAll('.header a').forEach(link => {
  link.addEventListener('click', () => {
    model.classList.remove('activeshow');
  });
});
/*=============header scroll bg =============*/

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


  lenis.on("scroll", ({ scroll }) => {
    if (scroll > 9) {
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

// Sirf desktop pe chalega (768px se upar)
if (window.innerWidth > 768) {

  window.addEventListener("scroll", function () {

    const creativeText = document.querySelector(".creativetext");
    if (!creativeText) return;

    if (window.scrollY > 120) {
      creativeText.classList.add("creative-move");
    } else {
      creativeText.classList.remove("creative-move");
    }

  });

}



let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // 🔽 Scroll Down → Hide
    header.classList.add("header-hide");
  } else {
    // 🔼 Scroll Up → Show
    header.classList.remove("header-hide");
  }

  lastScroll = currentScroll;
});
/*============= tawk =============*/

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/675ffc63af5bfec1dbdcaad8/1if7f3q10';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();


/*============= parallax-img =============*/

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


document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("videoModal");
  const video = document.getElementById("reviewVideo");

  document.querySelectorAll(".client-video-review, .play-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");
      video.play();
    });
  });

  document.querySelectorAll(".close-video, .video-overlay").forEach(el => {
    el.addEventListener("click", function () {
      modal.classList.remove("active");
      video.pause();
      video.currentTime = 0;
    });
  });

});



jQuery(function ($) {
  var owl = $('.testimolcra');

  if (owl.length) {
    owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      items: 1,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }
});





jQuery(function ($) {
  $('.slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1.5 },
      1000: { items: 2.5 }
    }
  });




});


jQuery(document).ready(function($){

    var owl = $('.testimonial-slider');

    owl.owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        smartSpeed:800
    });

    // 👉 ORIGINAL TOTAL (Clones ignore karega)
    var totalItems = owl.find('.owl-item:not(.cloned)').length;
    $('#total').text(("0" + totalItems).slice(-2));

    // 👉 Slide Change
    owl.on('changed.owl.carousel', function(event){

        var current = event.item.index - event.relatedTarget._clones.length / 2;

        if(current < 0){
            current = totalItems - 1;
        }

        current = (current % totalItems) + 1;

        $('#current').text(("0" + current).slice(-2));
    });

});








jQuery(function ($) {

  var owl = $('.services-grid');

  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    smartSpeed: 3000,

    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });

  owl.on('mouseenter', function () {
    owl.trigger('stop.owl.autoplay');
  });

  owl.on('mouseleave', function () {
    owl.trigger('play.owl.autoplay', [3000]);
  });

});

jQuery(function ($) {
  var owl = $('.websitelogo-section');

  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,

    autoplay: true,
    autoplayTimeout: 1500,
    autoplaySpeed: 1500,
    smartSpeed: 1500,

    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 8 }
    }
  });

  // 🧠 Manual hover control
  owl.on('mouseenter', function () {
    owl.trigger('stop.owl.autoplay');
  });

  owl.on('mouseleave', function () {
    owl.trigger('play.owl.autoplay', [1500]);
  });

});

jQuery(document).ready(function () {

  $('.faq-question').click(function () {

    // Close other open accordions
    $('.faq-item').not($(this).parent()).removeClass('active')
      .find('.faq-answer').slideUp(300);

    // Toggle current
    $(this).parent().toggleClass('active');
    $(this).next('.faq-answer').slideToggle(300);
  });

});


$('.collaboration-slider-tems').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout:2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
AOS.init(
  {
    duration: 1200,
  });




document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Header load hone ke baad custom function call karo
      if (typeof initCustom === "function") {
        initCustom();
      }
    });
});








