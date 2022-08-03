function fnCountDown() {
    let seconds = document.getElementById("alarmtime").value;

    function tick() {
        if (seconds > 0) {
            seconds = seconds - 1;
            alarmtime.value = seconds;
            setTimeout(tick, 1000);
            if (seconds == 0) {
                alarmtime.value = seconds;
                alert("Time's up!");
            }
        }
    }
    tick();
}


let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let myInterval;

// Start Auto SlideShow
let autoStart = () => {
    if (document.getElementById('interval').value) { //Check if interval i entered
        clearInterval(myInterval);  //clear any previous intervals
        let seconds = document.getElementById('interval').value;
        myInterval = setInterval(function () { plusSlides(1) }, seconds * 1000);
    }
}

//Stop Auto SlideShow
let autoStop = () =>
    clearInterval(myInterval);

