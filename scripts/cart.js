// Корзина
let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const bookId = button.dataset.id;
            addToCart(bookId);
        });
    });
});

function addToCart(bookId) {
    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: bookId, quantity: 1 });
    }
    console.log(cart); // For debugging
}