const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const currentYear = new Date().getFullYear();
document.querySelector("footer h3").innerText = `© 🤎 Ozioma Heaven Gabriel 🤎 Abuja ${currentYear}`;


const lastModified = document.lastModified;
document.getElementById("date").textContent = lastModified;