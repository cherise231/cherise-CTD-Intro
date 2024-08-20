

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});


const footer = document.createElement("footer");

const body = document.querySelector("body");
const currentYear = new Date().getFullYear();
footer.innerText = "Copyright  " + currentYear;
footer.className = "footer-class";
// footer.style.background = "pink";


body.appendChild(footer);
