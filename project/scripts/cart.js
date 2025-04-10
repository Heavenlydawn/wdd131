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

  cart.forEach((item, index) => {
    const price = parseInt(item.price.replace(/[₦,]/g, ""));
    const itemTotal = price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" loading="lazy"/>
      <div class="item-details">
        <h4>${item.name}</h4>
        <p>₦${formatCurrency(price)} × ${item.quantity}</p>
        <p>Item Total: ₦${formatCurrency(itemTotal)}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });

  cartTotalEl.textContent = formatCurrency(total);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // remove item at that index
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();

  document.getElementById("cartItems").addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      removeFromCart(index);
    }
  });

  document.getElementById("clearCartBtn").addEventListener("click", clearCart);

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("Proceeding to checkout!");
  });
});