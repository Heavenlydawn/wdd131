const currentYear = new Date().getFullYear();
document.querySelector("footer h2").innerText = `© 🤎 Ozioma Heaven Gabriel 🤎 Abuja ${currentYear}`;


const lastModified = document.lastModified;
document.getElementById("date").textContent = lastModified;