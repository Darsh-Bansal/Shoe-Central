// Shopping Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification(`${productName} added to cart!`);
    updateCartCount();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    showNotification(`${productName} removed from cart!`);
}

function updateQuantity(productName, newQuantity) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productName);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    }
}

function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;
    }
}

function loadCart() {
    const cartSection = document.querySelector('.cart');
    if (!cartSection) return;

    cartSection.innerHTML = '<h2 style="color:white;">Your Cart</h2>';

    if (cart.length === 0) {
        cartSection.innerHTML += '<p style="color:white; text-align:center;">Your cart is empty</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemHTML = `
            <div class="cart-item">
                <div style="flex: 1;">
                    <h3>${item.name}</h3>
                    <p>Price: ₹ ${item.price}</p>
                    <div class="quantity-control">
                        <button onclick="updateQuantity('${item.name}', ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.name}', ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div>
                    <p style="font-weight: bold;">₹ ${item.price * item.quantity}</p>
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
        cartSection.innerHTML += itemHTML;
    });

    const totalHTML = `
        <div class="total" style="color:white">
            <p>Total: <strong>₹ ${total}</strong></p>
            <button class="checkout" onclick="checkout()">Proceed to Checkout</button>
        </div>
    `;
    cartSection.innerHTML += totalHTML;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Proceeding to checkout... Total items: ' + cart.reduce((sum, item) => sum + item.quantity, 0));
    // Here you can add actual checkout logic
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Form Validation
function validateLoginForm() {
    const email = document.querySelector('input[type="email"]');
    const password = document.querySelector('input[type="password"]');

    if (!email || !password) return true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.value.trim()) {
        alert('Email is required');
        return false;
    }
    
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email');
        return false;
    }
    
    if (password.value.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    
    return true;
}

// Search and Filter Products
function filterProducts(searchTerm) {
    const cards = document.querySelectorAll('.card');
    const lowerSearchTerm = searchTerm.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(lowerSearchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load cart if on cart page
    if (document.querySelector('.cart')) {
        loadCart();
    }
    
    // Update cart count on all pages
    updateCartCount();
    
    // Validate login form submission
    const loginForm = document.querySelector('.login-box form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateLoginForm()) {
                showNotification('Login successful!');
                // Clear form
                this.reset();
            }
        });
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
