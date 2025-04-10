// Utility function to format numbers as currency
function formatCurrency(amount) {
  return amount.toLocaleString();
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalEl.textContent = "0";
    return;
  }

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    // Create container for the cart item
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" loading="lazy"/>
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>₦${formatCurrency(item.price)} x ${item.quantity}</p>
          <p>Item Total: ₦${formatCurrency(itemTotal)}</p>
          <button class="remove-btn" data-id="${item.id}">Remove</button>
        </div>
      `;

    cartContainer.appendChild(cartItem);
  });

  cartTotalEl.textContent = formatCurrency(total);
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded – cart.js is running");
  loadCart();

  // Delegate event for remove buttons
  document.getElementById("cartItems").addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const id = parseInt(e.target.getAttribute("data-id"), 10);
      removeFromCart(id);
    }
  });

  // Clear Cart button handler
  document.getElementById("clearCartBtn").addEventListener("click", () => {
    clearCart();
  });

  // Checkout button handler (you can expand this for a full checkout process)
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("Proceeding to checkout!");
  });
});
