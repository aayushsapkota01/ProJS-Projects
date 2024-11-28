document.addEventListener("DOMContentLoaded", () => {
    const products = [
      { id: 1, name: "Product 1", price: 9.99 },
      { id: 2, name: "Product 2", price: 19.99 },
      { id: 3, name: "Product 3", price: 29.99 },
      { id: 4, name: "Product 4", price: 39.99 },
      { id: 5, name: "Product 5", price: 49.99 },
    ];
  
    // Retrieve cart from localStorage, if it exists, otherwise initialize as an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");
  
    const total = document.getElementById("total");
  
    // Render the product list
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to cart</button>
      `;
      productList.appendChild(productDiv);
    });
  
    // Event listener for adding products to the cart
    productList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find((p) => p.id === productId);
        addToCart(product);
      }
    });
  
    // Function to add products to the cart
    function addToCart(product) {
      cart.push(product); // Add the product to the cart array
      renderCart();
      saveCart();
    }
  
    // Function to render the cart items on the screen
    function renderCart() {
      cartItems.innerHTML = "";
      let totalPrice = 0;
  
      if (cart.length > 0) {
        emptyCartMessage.classList.add("hidden");
        cartTotalMessage.classList.remove("hidden");
        cart.forEach((item) => {
          totalPrice += item.price;
          const cartItem = document.createElement("div");
          cartItem.innerHTML = `
          ${item.name} - $${item.price.toFixed(2)}
          `;
          cartItems.appendChild(cartItem);
        });
  
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
      } else {
        emptyCartMessage.classList.remove("hidden");
      }
    }
  
    // Event listener for the checkout button
    checkOutBtn.addEventListener("click", () => {
      cart.length = 0;
      totalPriceDisplay.textContent = `$0.00`;
      total.classList.add("hidden");
      alert("Checkout Successfully!!");
      renderCart();
      saveCart(); // Make sure to update localStorage after checkout
    });
  
    // Function to save the cart to localStorage
    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    // Render the cart on page load if there are items in localStorage
    renderCart();
  });
  