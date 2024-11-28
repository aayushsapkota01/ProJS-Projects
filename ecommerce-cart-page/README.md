E-Commerce Cart Page

## Description

This project is a simple e-commerce cart page built using HTML, CSS, and JavaScript. It allows users to view products, add them to the shopping cart, delete items from the cart, and checkout. The cart data is saved to the browser's `localStorage`, ensuring that the cart persists across page reloads.

## Features

- **Product Listing**: Displays a list of products with options to add them to the shopping cart.
- **Cart Management**: Users can add products to the cart and view the total price of items in the cart.
- **Item Removal**: Each item in the cart has a delete button to remove it from the cart.
- **Persistent Cart**: The cart is saved to `localStorage`, so it remains intact even when the page is refreshed.
- **Checkout**: A checkout button clears the cart and resets the total price.

## Core Concepts Used

This project demonstrates several key concepts and techniques in web development:

1. **DOM Manipulation**: 
   - JavaScript is used to dynamically create and update HTML elements, such as products, cart items, and the total price, based on user actions.
   - Event listeners are used to handle actions like adding products to the cart and removing items from the cart.

2. **LocalStorage**: 
   - The `localStorage` API is used to store the cart data locally on the user's browser, allowing the cart to persist even after a page refresh.
   - Cart items are retrieved from `localStorage` when the page loads and saved back when changes are made.

3. **Flexbox Layout**: 
   - Flexbox is used to lay out the product list and cart items, providing a responsive and flexible layout.
   - The cart items are aligned using `justify-content: space-between;` to ensure that the product name is on the left, and the delete button is on the right.

4. **Event Handling**:
   - JavaScript event listeners handle user interactions, such as clicking the "Add to cart" button, deleting an item, and clicking the "Checkout" button.
   
5. **Conditional Rendering**:
   - The cart is dynamically updated based on whether it contains items or is empty. If the cart is empty, a message is displayed; otherwise, the cart and total price are shown.

6. **CSS Transitions**:
   - Smooth hover effects and transitions are applied to buttons, such as the "Add to cart" and "Delete" buttons, to improve the user experience.

## Project Setup

1. Clone the repository or download the files.

```bash
git clone https://github.com/aayushsapkota01/ProJS-Projects/tree/main/ecommerce-cart-page
