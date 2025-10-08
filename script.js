const products = [
    // FRUITS (7 items)
    { id: 1, name: "Fresh Apples", price: 2.99, category: "fruits", image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=60", description: "Crisp red organic apples" },
    { id: 2, name: "Bananas", price: 1.49, category: "fruits", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60", description: "Fresh yellow bananas, perfect for smoothies" },
    { id: 3, name: "Strawberries", price: 3.99, category: "fruits", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60", description: "Sweet red strawberries, perfect for desserts" },
    { id: 4, name: "Oranges", price: 3.49, category: "fruits", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60", description: "Juicy sweet oranges, rich in vitamin C" },
    { id: 6, name: "Blueberries", price: 5.49, category: "fruits", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&auto=format&fit=crop&q=60", description: "Fresh organic blueberries, antioxidant-rich" },
    { id: 7, name: "Pineapple", price: 4.99, category: "fruits", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop&q=60", description: "Sweet tropical pineapple, perfect for snacks" },
    { id: 8, name: "Mangoes", price: 2.99, category: "fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=60", description: "Sweet ripe mangoes, great for smoothies" },

    // VEGETABLES (7 items)
    { id: 9, name: "Carrots", price: 1.99, category: "vegetables", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60", description: "Organic fresh carrots, rich in vitamins" },
    { id: 10, name: "Broccoli", price: 2.49, category: "vegetables", image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=500&auto=format&fit=crop&q=60", description: "Fresh green broccoli, packed with nutrients" },
    { id: 11, name: "Tomatoes", price: 2.29, category: "vegetables", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&auto=format&fit=crop&q=60", description: "Vine-ripened tomatoes, great for salads" },
    { id: 13, name: "Spinach", price: 2.99, category: "vegetables", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60", description: "Fresh organic spinach, iron-rich" },
    { id: 14, name: "Potatoes", price: 1.99, category: "vegetables", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60", description: "Fresh potatoes, great for various dishes" },
    { id: 15, name: "Onions", price: 1.49, category: "vegetables", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=500&auto=format&fit=crop&q=60", description: "Fresh onions, essential for cooking" },
    { id: 16, name: "Lettuce", price: 1.99, category: "vegetables", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=60", description: "Crisp fresh lettuce for salads" },

    // DAIRY (6 items)
    { id: 17, name: "Milk", price: 3.99, category: "dairy", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60", description: "Fresh whole milk, 1 gallon" },
    { id: 18, name: "Cheese", price: 4.99, category: "dairy", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&auto=format&fit=crop&q=60", description: "Aged cheddar cheese, 8oz block" },
    { id: 19, name: "Eggs", price: 4.49, category: "dairy", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&auto=format&fit=crop&q=60", description: "Farm fresh eggs, dozen" },
    { id: 21, name: "Butter", price: 3.49, category: "dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=60", description: "Fresh salted butter, 1lb" },
    { id: 22, name: "Cream Cheese", price: 2.79, category: "dairy", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=500&auto=format&fit=crop&q=60", description: "Creamy cheese spread, perfect for bagels" },

    // BAKERY (2 items)
    { id: 25, name: "Bread", price: 2.99, category: "bakery", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=60", description: "Fresh baked whole wheat bread" },
    { id: 28, name: "Muffins", price: 5.49, category: "bakery", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format&fit=crop&q=60", description: "Fresh blueberry muffins, 6-pack" },

    // MEAT & SEAFOOD (2 items)
    { id: 29, name: "Chicken Breast", price: 8.99, category: "meat", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&auto=format&fit=crop&q=60", description: "Boneless skinless chicken breast, 1lb" },
    { id: 30, name: "Salmon", price: 12.99, category: "seafood", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60", description: "Fresh Atlantic salmon fillet" }
];

// Shopping cart array - UPDATED WITH LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display products
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Cart Functions - UPDATED WITH LOCALSTORAGE
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification(`${product.name} added to cart!`);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <strong>${item.name}</strong>
                <br>$${item.price.toFixed(2)} each
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <span>$${itemTotal.toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalPrice.textContent = total.toFixed(2);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCartToLocalStorage();
    showNotification('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            saveCartToLocalStorage();
        }
    }
}

function showNotification(message) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.transform = 'translateX(400px)';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order!\nTotal: $${total.toFixed(2)}\n\nThis is a demo. In a real app, you would proceed to payment.`);
    
    cart = [];
    updateCartDisplay();
    saveCartToLocalStorage();
}

// Filter Functions
function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const category = document.getElementById('category-filter').value;
    
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;
        productsGrid.appendChild(productCard);
    });
}

// LocalStorage function
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartDisplay();
});