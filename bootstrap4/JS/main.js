let modalForm = document.getElementById("modalForm");
let modalAlert = document.getElementById("modalAlert");
let contactForm = document.getElementById("contactForm");



function msgSent() {
  contactForm.reset(); // reset form values
  modalAlert.style.display = "block"; // show alert message
  modalForm.style.display = "none";  // hide contact form
}

function getForm() {
  modalAlert.style.display = "none";  // hide alert message
  modalForm.style.display = "block";  // show contact form
}


