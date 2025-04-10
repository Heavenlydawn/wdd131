const products = [
    { id: "prod1", name: "Gentle Cleanser" },
    { id: "prod2", name: "Hydrating Toner" },
    { id: "prod3", name: "Brightening Serum" },
    { id: "prod4", name: "Daily Moisturizer" },
    { id: "prod5", name: "Mineral Sunscreen SPF 50" },
    { id: "prod6", name: "Salicylic Acid " },
    { id: "prod7", name: "Niacinamide Serum" },
    { id: "prod8", name: "Face Mask" },
  ];
  
  function populateProducts() {
    const select = document.getElementById("product");
    products.forEach((product) => {
      const option = document.createElement("option");

      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }
  
  populateProducts();
  
  const reviewForm = document.getElementById("review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.body.classList.add("page-flip");
  
      setTimeout(() => {
        const formData = new FormData(this);
        const params = new URLSearchParams(formData).toString();
        window.location.href = `${this.action}?${params}`;
      }, 600);
    });
  }
  