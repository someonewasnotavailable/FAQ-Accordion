'use script';

const faq1 = document.querySelector(".faq1");
const faq1h3 = document.getElementById('faq1h3');
const faq2 = document.querySelector(".faq2");
const faq3 = document.querySelector(".faq3");
const faq4 = document.querySelector(".faq4");

let neat = () => {
    faq2.classList.remove("active");
    faq3.classList.remove("active");
    faq4.classList.remove("active");
    faq1.classList.toggle("active");
}


let neat2 = () => {
    faq1.classList.remove("active");
    faq3.classList.remove("active");
    faq4.classList.remove("active");
    faq2.classList.toggle("active");
}

let neat3 = () => {
    faq1.classList.remove("active");
    faq2.classList.remove("active");
    faq4.classList.remove("active");
    faq3.classList.toggle("active");
}

let neat4 = () => {
    faq1.classList.remove("active");
    faq2.classList.remove("active");
    faq3.classList.remove("active");
    faq4.classList.toggle("active")
}

faq1.addEventListener("click", neat);
faq2.addEventListener("click", neat2);
faq3.addEventListener("click", neat3);
faq4.addEventListener("click", neat4);
