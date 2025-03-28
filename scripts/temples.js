
const navigation = document.querySelector(".navigation");

document.querySelector("#menu").addEventListener("click", function () {
	this.classList.toggle("open");
	document.querySelector("nav ul").classList.toggle("open");
  });
  
const currentYear = new Date().getFullYear();
document.querySelector(
  "footer h3"
).innerText = `© 🤎 Ozioma Heaven Gabriel 🤎 Abuja ${currentYear}`;

const lastModified = document.lastModified;
document.getElementById("date").textContent = lastModified;
