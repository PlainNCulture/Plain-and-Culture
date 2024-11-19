let cart = [];

// Function to toggle cart modal visibility
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Function to add products to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartUI();
}

// Update the UI with the current items in the cart
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear current cart items
    cartItems.innerHTML = '';

    // Add new cart items
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update cart total
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Update the cart count
    cartCount.textContent = cart.length;
}

// Function to handle checkout
function checkout() {
    alert("Proceeding to checkout...");
    // You would implement checkout functionality here (e.g., payment integration)
    cart = [];  // Clear the cart after checkout
    updateCartUI();
}