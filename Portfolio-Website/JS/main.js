// get the contact form
let contact = document.getElementById("contact");

// Get the <span> element that closes the modal
let span = document.getElementById("close");

// open contact form 
function openForm() {
  contact.style.display = "block";
}

// close  contact form
function closeForm() {
  contact.style.display = "none";
}

// close form if click outside of the form
window.onclick = function (event) {
  if (event.target == contact) {
    closeForm();
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  closeForm();
}

// =========== SLIDESHOW =============

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
  var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
  if (n > slides.length) { slideIndex = 1 }; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
  if (n < 1) { slideIndex = slides.length }; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
  }
  slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
  dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}