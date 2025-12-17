/* ===== ACCORDION (SERVICES) ===== */
document.querySelectorAll(".acc_box").forEach(box => {
box.classList.remove("open");
});

const accItems = document.querySelectorAll(".acc_box");

accItems.forEach(box => {
box.querySelector(".acc_head").addEventListener("click", () => {
const isOpen = box.classList.contains("open");
accItems.forEach(i => i.classList.remove("open"));
if (!isOpen) box.classList.add("open");
});
});

/* ===== COUNTER ANIMATION ===== */
(function(){
const counters = document.querySelectorAll('.reactive-counter .value');
if (!counters.length) return;

function animateValue(el, start, end, duration) {
let startTime = null;
function step(timestamp){
if (!startTime) startTime = timestamp;
const progress = Math.min((timestamp - startTime) / duration, 1);
const eased = 1 - Math.pow(1 - progress, 3);
const current = Math.floor(start + (end - start) * eased);
el.textContent = current;
if (progress < 1) requestAnimationFrame(step);
else el.textContent = end;
}
requestAnimationFrame(step);
}

let triggered = false;
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting && !triggered) {
triggered = true;
counters.forEach(el => {
const target = parseInt(el.dataset.target) || 0;
animateValue(el, 0, target, 1500);
});
observer.disconnect();
}
});
}, { threshold: 0.4 });

observer.observe(document.querySelector('#countersWrap'));
})();

/* ===== FAQ ACCORDION ===== */
const serviceItems = document.querySelectorAll(".service-item");
serviceItems.forEach(item => {
const btn = item.querySelector(".accordion-btn");
btn.addEventListener("click", () => {
serviceItems.forEach(i => i.classList.remove("active"));
item.classList.toggle("active");
});
});

/* ===== VIDEO TAB SCROLL ===== */
const tabLinks = document.querySelectorAll(".tab-link");
const videoSection = document.querySelector(".video-section");

tabLinks.forEach(link => {
link.addEventListener("click", e => {
e.preventDefault();
tabLinks.forEach(l => l.classList.remove("active"));
link.classList.add("active");
videoSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
});

/* ===== HAMBURGER MENU ===== */
function toggleMenu() {
document.getElementById("menuList").classList.toggle("open");
}


$(document).ready(function () {
  $('.testimonialslider').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navText: [
      `<svg fill="#fff" width="30" height="30" viewBox="0 0 100 100">
        <path d="M33.934,54.458l30.822,27.938c0.741,0.818,0.68,2.083-0.139,2.824
        c-0.818,0.742-2.083,0.68-2.824-0.139L33.768,51.059z"></path>
      </svg>`,
      `<svg fill="#fff" width="30" height="30" viewBox="0 0 100 100" transform="rotate(180)">
        <path d="M33.934,54.458l30.822,27.938c0.741,0.818,0.68,2.083-0.139,2.824
        c-0.818,0.742-2.083,0.68-2.824-0.139L33.768,51.059z"></path>
      </svg>`
    ],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 2,
        center: true
      }
    }
  });
});
