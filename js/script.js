let slideIndex = 0;
showSlides();


function ValidationForm() {
    var name = document.getElementById("your-name").value;
    var email = document.getElementById("email").value
    var interest = document.getElementById("interest").value

    if (name != "" && email!="" && interest !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 2000);
}
