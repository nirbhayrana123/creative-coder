
// document.getElementById("contactFormpage").addEventListener("submit", function (e) {
//   e.preventDefault();

//   var form = this;
//   var formData = new FormData(form);

//   fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
//     method: "POST",
//     body: formData,
//     headers: { 'Accept': 'application/json' }
//   }).then(function (response) {
//     if (response.ok) {
//       document.getElementById("formMsg").style.display = "block";
//       form.reset();
//     } else {
//       alert("Something went wrong. Please try again.");
//     }
//   });
// });


// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   var form = this;
//   var formData = new FormData(form);

//   fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
//     method: "POST",
//     body: formData,
//     headers: { Accept: "application/json" }
//   })
//     .then(function (response) {
//       if (response.ok) {
//         document.getElementById("headerMsg").innerHTML = "✅ Message sent successfully!";
//         document.getElementById("headerMsg").style.color = "green";
//         form.reset();
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     });
// });




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







// CONTACT FORM (already working)
// document.getElementById("contactFormpage")?.addEventListener("submit", function (e) {
//   e.preventDefault();

//   var form = this;
//   var formData = new FormData(form);

//   fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
//     method: "POST",
//     body: formData,
//     headers: { 'Accept': 'application/json' }
//   }).then(function (response) {
//     if (response.ok) {
//       document.getElementById("formMsg").innerHTML = "✅ Message sent successfully!";
//       document.getElementById("formMsg").style.color = "green";
//       form.reset();
//     }
//   });

// });


document.getElementById("contactFormpage").addEventListener("submit", function (e) {
  e.preventDefault();

  var form = this;
  var msg = document.getElementById("formMsg");

  var name = form.name;
  var email = form.email;
  var subject = form.subject;
  var message = form.message;

  // reset old styles
  [name, email, subject, message].forEach(i => {
    i.classList.remove("input-error");
    i.classList.remove("input-success");
  });

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var valid = true;

  if (name.value.trim() === "") {
    name.classList.add("input-error");
    valid = false;
  }

  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("input-error");
    valid = false;
  }

  if (subject.value.trim() === "") {
    subject.classList.add("input-error");
    valid = false;
  }

  if (message.value.trim() === "") {
    message.classList.add("input-error");
    valid = false;
  }

  if (!valid) {
    msg.innerHTML = "❌ Please fix highlighted fields";
    msg.style.color = "red";
    return;
  }

  // success styling
  [name, email, subject, message].forEach(i => {
    i.classList.add("input-success");
  });

  var formData = new FormData(form);

  fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  }).then(function (response) {
    if (response.ok) {
      msg.innerHTML = "✅ Message sent successfully!";
      msg.style.color = "green";
      form.reset();

      setTimeout(() => {
        [name, email, subject, message].forEach(i => {
          i.classList.remove("input-success");
        });
      }, 2000);
    } else {
      msg.innerHTML = "❌ Something went wrong";
      msg.style.color = "red";
    }
  });
});










// HEADER FORM
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  var form = this;
  var formData = new FormData(form);

  fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  }).then(function (response) {
    if (response.ok) {
      document.getElementById("headerMsg").innerHTML = "✅ Message sent successfully!";
      document.getElementById("headerMsg").style.color = "green";
      form.reset();
    }
  });
});


// FOOTER SUBSCRIBE (REAL FIX)
document.addEventListener("DOMContentLoaded", function () {

  var footerForm = document.getElementById("footerSubscribeForm");
  if (!footerForm) return;

  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(footerForm);
    var email = footerForm.querySelector("input[name='email']").value;

    formData.set("subject", "New Newsletter Subscriber");
    formData.set("message", "Subscriber email: " + email);

    fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(res => res.json())

.then(function (response) {
    if (response.ok) {
      document.getElementById("footerSubscribeMsg").innerHTML = "✅ Message sent successfully!";
      document.getElementById("footerSubscribeMsg").style.color = "green";
      form.reset();
    }
  });

  });

});


