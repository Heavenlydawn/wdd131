const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Adelaide Australia",
    location: "Australia",
    dedicated: "2000, June, 15",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
  },
  {
    templeName: "Moses Lake Washington",
    location: "Moses Lake, Washington",
    dedicated: "2023, September, 17",
    area: 28933,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/moses-lake-washington-temple/moses-lake-washington-temple-39148-main.jpg",
  },
  {
    templeName: "Mount Timpanogos Utah",
    location: "American Fork, Utah",
    dedicated: "1996, October, 13",
    area: 107240,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979-main.jpg",
  },
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo, Illinois",
    dedicated: "1846, May, 27 - 30",
    area: 54000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg",
  },
  {
    templeName: "Chicago Illinois",
    location: "Chicago, Illinois",
    dedicated: "1985, June, 9 - 13",
    area: 37062,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg",
  },
];

// Function to filter and display temples
function displayTemples(filterFn) {
  const templeContainer = document.querySelector(".temple__card");
  templeContainer.innerHTML = "";

  temples.filter(filterFn).forEach((temple) => {
    // Create card div
    const card = document.createElement("div");
    card.classList.add("temple-card");

    // Temple Name
    const templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;

    // Location
    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    // Dedicated Date
    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    // Size
    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area}`;

    // Image
    const imageUrl = document.createElement("img");
    imageUrl.src = temple.imageUrl;
    imageUrl.alt = `Image of ${temple.templeName}`;
    imageUrl.loading = "lazy";

    // Append elements to card
    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(imageUrl);

    // Append card to container
    templeContainer.appendChild(card);
  });
}

// Event listeners for navigation menu
document.querySelector("#old").addEventListener("click", () => {
  displayTemples((temple) => new Date(temple.dedicated).getFullYear() < 1900);
});

document.querySelector("#new").addEventListener("click", () => {
  displayTemples((temple) => new Date(temple.dedicated).getFullYear() > 2000);
});

document.querySelector("#large").addEventListener("click", () => {
  displayTemples((temple) => temple.area > 90000);
});

document.querySelector("#small").addEventListener("click", () => {
  displayTemples((temple) => temple.area < 10000);
});

document.querySelector("#home").addEventListener("click", () => {
  displayTemples(() => true);
});

// Initial display of all temples
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(() => true);
});
