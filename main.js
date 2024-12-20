// Initialize the cart from localStorage (if available)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a book to the cart
function addToCart(book) {
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
    updateCartCount(); // Update the cart count on the page
}

// Update the cart count in the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const book = {
            id: event.target.getAttribute('data-id'),
            title: event.target.getAttribute('data-title'),
            author: event.target.getAttribute('data-author'),
            description: event.target.getAttribute('data-description'),
            image: event.target.getAttribute('data-image'),
            price: event.target.getAttribute('data-price')
        };
        addToCart(book);
        alert(`${book.title} has been added to your cart!`);
    });
});

// Initial call to update the cart count when the page loads
updateCartCount();

