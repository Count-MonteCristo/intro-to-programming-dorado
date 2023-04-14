//inserts copyright text into footer
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = `© Luis Navarro ${thisYear}`;
footer.appendChild(copyright);

//creates list of skills
let skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "Yarn",
  "NPM",
  "Git",
  "GitHub",
  "VS Code",
  "C/C++",
  "Java",
  "Python",
  "SQL",
  "NoSQL",
  "WordPress",
  "Magento",
  "HubSpot CMS",
  "Bash",
  "Linux",
  "Figma",
  "UX/UI",
  "SEO",

];
let skillSection = document.getElementById("skills");
let skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

document.getElementById("messages").style.display = "none";

//function to determine if list is empty, used to hide messages section as needed
function isEmpty(id) {
  return document.getElementById(id).innerHTML.trim() == "";
}

//handles message form submits
let messageForm = document.querySelector("form");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formName = e.target.name;
  let formEmail = e.target.email;
  let formMessage = e.target.message;

  console.log(formName.value);
  console.log(formEmail.value);
  console.log(formMessage.value);

  //displays messages in a list
  let messageSelection = document.getElementById("messages");
  let messageList = messageSelection.querySelector("ul");

  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<div><a href="mailto:${formEmail.value}"> ${formName.value} </a> <span> wrote: ${formMessage.value} </span></div>`;

  //removes messages from list
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", (e) => {
    let entry = newMessage.querySelector("button").parentNode;
    entry.remove();
    if (isEmpty("list")) {
      document.getElementById("messages").style.display = "none";
    }
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //asseses the status of the list
  if (!isEmpty("list")) {
    document.getElementById("messages").style.display = "block";
  }

  messageForm.reset();
});

//fetches GitHub repositories
fetch("https://api.github.com/users/Count-MonteCristo/repos", { mode: "cors" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < response.length; i++) {
      let project = document.createElement("li");
      project.innerHTML = `<a class="link link--no-decor" href="${response[i].html_url}" target="_blank" rel="noopener noreferrer"> ${response[i].name} </a>`;
      projectList.appendChild(project);
    }
  })
  .catch(function (err) {
    console.log(err);
  });

//smooth scrolling animation when using anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//hamburger menu
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
