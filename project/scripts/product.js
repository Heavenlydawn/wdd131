const products = [
  {
    name: "Gentle Cleanser",
    description: "A soap-free cleanser that purifies without stripping.",
    price: "₦8,500",
    image: "images/sk1.webp",
  },
  {
    name: "Hydrating Toner",
    description: "Balancing toner with rose water and niacinamide.",
    price: "₦6,800",
    image: "images/sk2.webp",
  },
  {
    name: "Brightening Serum",
    description: "Vitamin C + Ferulic Acid blend for radiant skin.",
    price: "₦11,200",
    image: "images/sk3.webp",
  },
  {
    name: "Daily Moisturizer",
    description: "Lightweight hydration with hyaluronic acid and ceramides.",
    price: "₦9,000",
    image: "images/sk4.webp",
  },
  {
    name: "Mineral Sunscreen SPF 50",
    description: "UVA/UVB protection with a silky, no-white-cast finish.",
    price: "₦10,000",
    image: "images/sk5.webp",
  },
  {
    name: "Gentle Cleanser",
    description: "A soap-free cleanser that purifies without stripping.",
    price: "₦8,500",
    image: "images/sk6.webp",
  },
  {
    name: "Hydrating Toner",
    description: "Balancing toner with rose water and niacinamide.",
    price: "₦6,800",
    image: "images/sk7.webp",
  },
  {
    name: "Brightening Serum",
    description: "Vitamin C + Ferulic Acid blend for radiant skin.",
    price: "₦11,200",
    image: "images/sk8.webp",
  },
  {
    name: "Daily Moisturizer",
    description: "Lightweight hydration with hyaluronic acid and ceramides.",
    price: "₦9,000",
    image: "images/sk9.webp",
  },
  {
    name: "Mineral Sunscreen SPF 50",
    description: "UVA/UVB protection with a silky, no-white-cast finish.",
    price: "₦10,000",
    image: "images/sk10.webp",
  },
];

function addToCart(product, button) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  const counter = button.querySelector('.cart-count');
  if (counter) {
    let currentCount = parseInt(counter.textContent, 10) || 0;
    counter.textContent = currentCount + 1;
  }
}


function displayProducts() {
  const grid = document.getElementById("productGrid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy"/>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span class="price">${product.price}</span>
      <button class="add-btn">
        Add to Cart <span class="cart-count">0</span>
      </button>
    `;

    // Get the button element from the current card
    const btn = card.querySelector(".add-btn");
    btn.addEventListener("click", () => addToCart(product, btn));

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);
