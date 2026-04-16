function validateForm() {

  let valid = true;

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value.trim();

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("subjectError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("successMessage").innerText = "";

  if (name === "") {
    document.getElementById("nameError").innerText = "Enter your name";
    valid = false;
  }

  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(pattern)) {
    document.getElementById("emailError").innerText = "Enter valid email";
    valid = false;
  }

  if (subject === "") {
    document.getElementById("subjectError").innerText = "Select subject";
    valid = false;
  }

  if (message.length < 10) {
    document.getElementById("messageError").innerText = "Message too short";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").innerText = "Message sent successfully!";
  }

  return false;
}

/* SMART SELECT */
function selectSubject(value) {
  document.getElementById("subject").value = value;
  window.scrollTo({
    top: document.querySelector('.contact-form-wrapper').offsetTop,
    behavior: 'smooth'
  });
}
