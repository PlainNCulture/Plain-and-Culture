// Function to open the product modal with the product details
function showProductDetails(name, image, description, price) {
    document.getElementById("product-name").innerText = name;
    document.getElementById("product-image").src = image;
    document.getElementById("product-description").innerText = description;
    document.getElementById("product-price").innerText = price;

    // Show the modal
    document.getElementById("product-modal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("product-modal").style.display = "none";
}
