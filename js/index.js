const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show-nav");
});

//footer
const footerElem = document.createElement("footer");

const bodyElem = document.querySelector("body");
const today = new Date();
const thisYear = today.getFullYear();
const copyrightSymbol = "\u00A9";
footerElem.innerText = copyrightSymbol + " " + thisYear + " Cherise";
//creates a footer class called footer-class
footerElem.className = "footer-class";
// footerElem.style.background = "pink";
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
// gives the ul an id
webDevskillsList.id = "web-dev-skills-list";

const webDevHeader = document.createElement("h3");
webDevHeader.innerText = "Web Development:";
webDevskillsSection.appendChild(webDevHeader);
webDevskillsSection.appendChild(webDevskillsList);

for (let i = 0; i < webDevSkills.length; i++) {
  let webDevText = document.createElement("li");
  webDevText.innerHTML = `${webDevSkills[i]} <i class="${webDevIconsArray[i]}"></i>`;

  webDevskillsList.appendChild(webDevText);
}

//Tools and Technologies
const toolsSkills = [
  "Version control: Git, GitHub",
  "Agile development methodologies: Scrum, Kanban",
  "APIs: RESTful APIs, API design ",
  "Cloud platforms: Google Colab (for data analytics and Python development)",
  "Asynchronous programming",
];
const toolsIconsArray = [
  "fa-brands fa-github",
  "fas fa-form",
  "fa-solid fa-plug",
  "fa-solid fa-cloud",
  "fas fa-form",
];

const toolsSkillsSection = document.getElementById("skills");
const toolsSkillsList = document.createElement("ul");
// gives the ul an id
toolsSkillsList.id = "tools-skills-list";

const toolsHeader = document.createElement("h3");
toolsHeader.innerText = "Tools and Technologies:";
toolsSkillsSection.appendChild(toolsHeader);
toolsSkillsSection.appendChild(toolsSkillsList);

for (let i = 0; i < toolsSkills.length; i++) {
  let toolsText = document.createElement("li");
  toolsText.innerHTML = `${toolsSkills[i]} <i class="${toolsIconsArray[i]}"></i>`;

  toolsSkillsList.appendChild(toolsText);
}

//Data Analytics

const dataSkills = [
  "Data Analytics",
  "Data visualization (using Python and Google Colab)",
  "Data manipulation and analysis (using Python and Google Colab)",
  "Python libraries: NumPy, Pandas, Matplotlib, Scikit-learn",
];

const dataIconsArray = [
  "fas fa-chart-column",
  "fas fa-form",
  "fas fa-database",
  "fas fa-cubes",
];

const dataSkillsSection = document.getElementById("skills");
const dataSkillsList = document.createElement("ul");
// gives the ul an id
dataSkillsList.id = "data-skills-list";

const dataHeader = document.createElement("h3");
dataHeader.innerText = "Data Analysis:";
dataSkillsSection.appendChild(dataHeader);
dataSkillsSection.appendChild(dataSkillsList);

for (let i = 0; i < dataSkills.length; i++) {
  let dataText = document.createElement("li");
  dataText.innerHTML = `${dataSkills[i]} <i class="${dataIconsArray[i]}"></i>`;

  dataSkillsList.appendChild(dataText);
}

// const messageForm = document.getElementById("leave_message")
const messageForm = document.getElementsByName("leave_message")[0];
const messageSection = document.getElementById("messages");
const messageHeader = messageSection.querySelector("h2");

messageHeader.hidden = true;
// messageSection.hidden = true;

function showHeader() {
  messageHeader.style.display = "block";
  // messageSection.hidden = false;
}

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log("usersName", usersName);
  console.log("usersEmail", usersEmail);
  console.log("usersMessage", usersMessage);

  // Display messages in list
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${usersEmail}">&nbsp; &nbsp;${usersName}</a> <span>${usersMessage}</span>`;

  // create remove button
  removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    // if (messageList.children.length === 0) {
    //   messageList.style.display = "none";
    //   messageHeader.style.display = "none";
    //     messageSection.hidden = true;
    //     messageHeader.hidden = true;
    // }
  });

  // create edit button
  editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.setAttribute("type", "button");

  editButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = entry.querySelector("a").textContent.trim();

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.value = entry.querySelector("a").href.replace("mailto:", "");

    const messageInput = document.createElement("textarea");
    messageInput.value = entry.querySelector("span").textContent;

    const saveButton = document.createElement("button");
    saveButton.innerText = "save";
    saveButton.setAttribute("type", "button");

    saveButton.addEventListener("click", () => {
      const newName = nameInput.value;
      const newEmail = emailInput.value;
      const newMessage = messageInput.value;

      entry.querySelector("a").textContent = newName;
      entry.querySelector("a").href = `mailto:${newEmail}`;
      entry.querySelector("span").textContent = newMessage;

      entry.removeChild(nameInput);
      entry.removeChild(emailInput);
      entry.removeChild(messageInput);
      entry.removeChild(saveButton);
    });

    entry.appendChild(nameInput);
    entry.appendChild(emailInput);
    entry.appendChild(messageInput);
    entry.appendChild(saveButton);
  });

  newMessage.appendChild(editButton);
  
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  event.target.reset();

  if (messageList.children.length === 1) {
    showHeader();
  }
});

// fetch request
const url = "https://api.github.com/users/cherise231/repos";
fetch(url)
  .then((response) => response.json())
  .then((repos) => {
    console.log(repos);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    repos.forEach((repositories) => {
      // create an li for projects
      const project = document.createElement("li");
      project.innerText = repositories.name;
      projectList.append(project);
    });

  })

  .catch((error) => {
    console.error("error", error)
  });