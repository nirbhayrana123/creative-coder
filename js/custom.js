
const editBtn = document.querySelector('.menu');
const model = document.querySelector('.header');

editBtn.addEventListener('click', function () {
  model.classList.toggle('active');
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