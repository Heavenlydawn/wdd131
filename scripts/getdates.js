const currentYear = new Date().getFullYear();
document.querySelector("footer h3").innerHTML = `&copy; 🤎 Ozioma Heaven Gabriel 🤎 Abuja ${currentYear}`;


const lastModified = document.lastModified;
document.getElementById("date").textContent = lastModified;