const products = [
    {
        id: 1,
        name: "Stylish Shirt",
        price: 25.0,
        image: "images/product1.jpg"
    },
    {
        id: 2,
        name: "Elegant Dress",
        price: 45.0,
        image: "images/product2.jpg"
    },
    {
        id: 3,
        name: "Casual Shoes",
        price: 35.0,
        image: "images/product3.jpg"
    }
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        alert(`${product.name} has been added to your cart.`);
    }
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

