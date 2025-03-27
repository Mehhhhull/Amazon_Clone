// Get the cart button and the cart notification
let cartButton = document.querySelector('.nav-cart');
let cartNotification = document.querySelector('.cart-notification');

// Display the cart notification when the cart icon is clicked
cartButton.addEventListener('click', () => {
    cartNotification.style.display = 'inline'; // Show the cart notification
    setTimeout(() => {
        cartNotification.style.display = 'none'; // Hide the notification after 2 seconds
    }, 2000);
});

function openCart() {
    alert("Opening Cart!");  // You can replace this with your cart functionality later
}

// Show the "Scroll to Top" button when user scrolls down
window.onscroll = function() {
    let scrollButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
