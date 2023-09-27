document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['content-form']['your-name'].value;
    let email = document.forms['content-form']['email'].value;
    let interest = document.forms['content-form']['interest'].value;

    if (!name) {
        document.getElementById("name-error").innerText ="Name cannot be blank!"
    } else {
        document.getElementById("name-error").innerText =""
    }

    if (!email) {
        document.getElementById("email-error").innerText ="Email cannot be blank!"
    } else {
        document.getElementById("email-error").innerText =""
    }

    if (!interest) {
        document.getElementById("interest-error").innerText ="Interest cannot be blank!"
    } else {
        document.getElementById("interest-error").innerText =""
    }
})


const carouselSlides = document.querySelectorAll(".slide")
let currentIndex = 0;
let interval = 2000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add("active");
}

function startSlide() {
    setInterval(nextSlide, interval);
}

(function() {
    startSlide()
})()