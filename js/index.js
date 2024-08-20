const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

const footerElem = document.createElement("footer");
const bodyElem = document.querySelector("body");
const currentYear = new Date().getFullYear();
const copyrightSymbol = "\u00A9";
footerElem.innerText = copyrightSymbol + " " + currentYear + " Cherise";
//creates a footer class called footer-class
footerElem.className = "footer-class";
// footer.style.background = "pink";
console.log(footerElem);
console.log("working!");
bodyElem.appendChild(footerElem);

// skils section
//Programming Languages
const skills = ["Javascript", "Python", "HTML", "CSS"];
const iconsArray = [
  "fa-solid fa-code",
  "fa-brands fa-python",
  "fa-solid fa-globe",
  "fa-solid fa-paintbrush",
];
// this will grab my skills section and store it in a a new var called skillsSection
const skillsSection = document.getElementById("skills");
const skillsList = document.getElementById("skills-items");

// creates a skills Title area
const skillsHeader = document.getElementById("skillsTitleh3");
skillsHeader.innerText = "Programming Languages:";

for (let i = 0; i < skills.length; i++) {
  // creates an li and saves it to var skillstext
  let skilltext = document.createElement("li");
  //create an i element and saves it to var iconElem
  // let iconElem = document.createElement("i");

  // skilltext.innerHTML = skills[i] + ' <i class="' + iconsArray[i] + '"></i>';

  skilltext.innerHTML = `${skills[i]} <i class="${iconsArray[i]}"></i>`;

  //adds the li to the ul
  skillsList.appendChild(skilltext);
}

//Web Development
const webDevSkills = [
  "DOM (Document Object Model)",
  "Responsive design",
  "Accessibility considerations",
  "Forms and form handling",
  "Browser development tools (e.g., Chrome DevTools)",
];
const webDevIconsArray = [
  "fas fa-desktop",
  "fas fa-mobile",
  "fas fa-universal-access",
  "fas fa-file-alt",
  "fas fa-tools",
];
// "fas fa-form" use a blank icon

const webDevskillsSection = document.getElementById("skills");
const webDevskillsList = document.createElement("ul");

const webDevHeader = document.createElement("h3");
webDevHeader.innerText = "Web Development:";
webDevskillsSection.appendChild(webDevHeader);
webDevskillsSection.appendChild(webDevskillsList);

for (let i = 0; i < webDevSkills.length; i++) {
  let webDevText = document.createElement("li");
  webDevText.innerHTML = `${webDevSkills[i]} <i class="${webDevIconsArray[i]}"></i>`;

  webDevskillsList.appendChild(webDevText);
}
