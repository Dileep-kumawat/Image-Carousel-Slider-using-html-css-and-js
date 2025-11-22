let currentSlide = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots = document.querySelectorAll(".dot");
let slides = document.querySelectorAll(".slide");

let interId = null;

function showSlide(index) {
    if (interId !== null) {
        clearInterval(interId);
    }
    slides.forEach(element => element.classList.remove("active"));
    dots.forEach(element => element.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;

    interId = setInterval(() => {
        nextSlide();
    }, 3000);
}

function prevSlide() {
    let index;
    if (currentSlide === 0) {
        index = 2;
    }
    else {
        index = currentSlide - 1;
    }
    showSlide(index);
}

function nextSlide() {
    let index = (currentSlide + 1) % slides.length;
    showSlide(index);
}

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

dots.forEach((ele) => {
    let index = Number(ele.getAttribute("data-index"));
    ele.addEventListener("click", () => {
        showSlide(index);
    })
});


showSlide(0);