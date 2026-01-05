
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

document.getElementById("subscribeForm").addEventListener("submit", function () {

  setTimeout(function () {
    document.getElementById("subscribeMsg").style.display = "block";
    document.getElementById("subscribeForm").reset();
  }, 1200);

});

