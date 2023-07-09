const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p1 = document.createElement("p");
p1.classList.add("p1");
p1.textContent = "Hey I'm red!";
p1.setAttribute("color", "red");

container.appendChild(p1);

const header1 = document.createElement("h3");
header1.classList.add("p1");
header1.textContent = "I'm a blue H3!";
header1.setAttribute("color", "blue");

container.appendChild(header1);
