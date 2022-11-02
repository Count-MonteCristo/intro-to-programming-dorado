//inserts copyright text into footer
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = `ⓒ Luis Navarro ${thisYear}`;
footer.appendChild(copyright);

//creates list of skills
let skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C/C++",
  "Java",
  "Python",
  "SQL",
  "WordPress",
  "Bash",
  "Linux",
  "UX/UI",
  "Sitemaps",
  "Wireframes",
  "Mockups",
  "Prototypes",
  "Copywriting",
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
  newMessage.innerHTML = `<a href="mailto:${formEmail.value}"> ${formName.value} </a> <span> wrote: ${formMessage.value} </span>`;

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
let githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/Count-MonteCristo/repos')
githubRequest.onload = function() {
  let repositories = JSON.parse(githubRequest.response);
  console.log(repositories);
  
  let projectSection = document.getElementById("projects");
  let projectList = projectSection.querySelector("ul");

  for (let i = 0; i < repositories.length; i++) {
    let project = document.createElement("li");
    project.innerHTML = `<a class="link link--no-decor" href="${repositories[i].html_url}" target="_blank" rel="noopener noreferrer"> ${repositories[i].name} </a>`;
    projectList.appendChild(project);
  }
}
githubRequest.send();

//smooth scrolling animation when using anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});