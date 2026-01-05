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

  document.querySelectorAll(".client-video-review").forEach(btn => {
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
$('.collaboration-slider-tems').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
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

document.getElementById("contactFormpage").addEventListener("submit", function (e) {
  e.preventDefault();

  var form = this;
  var formData = new FormData(form);

  fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(function (response) {
    if (response.ok) {
      document.getElementById("formMsg").style.display = "block";
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var form = this;
  var formData = new FormData(form);

  fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  })
    .then(function (response) {
      if (response.ok) {
        document.getElementById("headerMsg").innerHTML = "✅ Message sent successfully!";
        document.getElementById("headerMsg").style.color = "green";
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
});




// document.addEventListener("DOMContentLoaded", function () {

//   const form = document.getElementById("subscribeForm");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault(); // 🚫 Page reload stop

//     const formData = new FormData(form);

//     fetch("https://formsubmit.co/ajax/amit.creativecoder@gmail.com", {
//       method: "POST",
//       body: formData
//     })
//     .then(res => res.json())
//     .then(data => {
//       if (data.success === "true") {
//         document.getElementById("subscribeMsg").style.display = "block";
//         form.reset();
//       } else {
//         alert("Email not sent. Try again.");
//       }
//     })
//     .catch(() => alert("Network error"));
//   });

// });

document.getElementById("subscribeForm").addEventListener("submit", function(){
  setTimeout(function(){
    document.getElementById("subscribeMsg").style.display = "block";
    document.getElementById("subscribeForm").reset();
  }, 800); // thoda delay taaki email send ho jaye
});
