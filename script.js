let cartItems = [];
let cartTotal = 0;
let cartCount = 0;

function addToCart(itemName) {
    const itemPrice = getItemPrice(itemName);
    cartItems.push({ name: itemName, price: itemPrice });
    cartTotal += itemPrice;
    cartCount += 1;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    cartTotalElement.textContent = cartTotal.toFixed(2);
    cartCountElement.textContent = cartCount; 
}

function getItemPrice(itemName) {
    switch (itemName) {
        case 'Red Robot':
            return 199.99;
        case 'Blue Robot':
            return 249.99;
        case 'Green Robot':
            return 299.99;
        default:
            return 0;
    }
}
