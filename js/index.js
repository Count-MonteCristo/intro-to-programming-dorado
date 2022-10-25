//inserts copyright text into footer
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = `Luis Navarro ${thisYear}`;
footer.appendChild(copyright);

//creates list of skills
let skills = ["HTML/CSS/JavaScript", "UX/UI", "WordPress", "Copywriting"];
let skillSection = document.getElementById("skills");
let skillsList = skillSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}
