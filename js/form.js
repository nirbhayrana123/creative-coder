


document.getElementById("contactFormpage")?.addEventListener("submit", function (e) {
  e.preventDefault();

  var form = this;
  var name = form.querySelector("input[name='name']").value.trim();
  var email = form.querySelector("input[name='email']").value.trim();
  var subject = form.querySelector("input[name='subject']").value.trim();
  var message = form.querySelector("textarea[name='message']").value.trim();
  var msgBox = document.getElementById("formMsg");

  // Email validation regex
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ❌ Validation
  if (name.length < 3) {
    msgBox.innerHTML = "❌ Name must be at least 3 characters";
    msgBox.style.color = "Green";
    return;
  }

  if (!emailPattern.test(email)) {
    msgBox.innerHTML = "❌ Enter a valid email address";
    msgBox.style.color = "Green";
    return;
  }

  if (subject.length < 3) {
    msgBox.innerHTML = "❌ Subject is too short";
    msgBox.style.color = "Green";
    return;
  }

  if (message.length < 10) {
    msgBox.innerHTML = "❌ Message must be at least 10 characters";
    msgBox.style.color = "Green";
    return;
  }

  // ✔️ All good – now send email
  var formData = new FormData(form);

  fetch("https://formsubmit.co/amit.creativecoder@gmail.com", {
    method: "POST",
    body: formData,
    headers: { "Accept": "application/json" }
  })
  .then(function (response) {
    if (response.ok) {
      msgBox.innerHTML = "✅ Message sent successfully!";
      msgBox.style.color = "green";
      form.reset();
    } else {
      msgBox.innerHTML = "❌ Something went wrong. Try again.";
      msgBox.style.color = "Green";
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


