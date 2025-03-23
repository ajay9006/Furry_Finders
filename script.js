let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function slideImages() {
    slides.forEach(slide => slide.classList.remove("active"));
    index = (index + 1) % totalSlides;
    slides[index].classList.add("active");
}

setInterval(slideImages, 5000);

function subscribeNewsletter() {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Email entered successfully');
    } else {
        alert('Please enter a valid email address.');
    }
}