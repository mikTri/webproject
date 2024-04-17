let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cartItem.classList.remove('active');
}
let cartItem = document.querySelector('.cart-item-container')
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
    
}
let search = document.querySelector('.search-form')
document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    // cartItem.classList.remove('active');
}




// cart:
let closeShopping = document.querySelector('.closeShopping')
document.querySelector('.closeShopping').onclick = () =>{
    cartItem.classList.remove('active');    
}

let list = document.querySelector('.listmenu');
let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
let header = document.querySelector('header');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');




let listCards = [];
let products = [
    { name: "Trà sữa trân châu đường đen", image: "img/product-1.png", stars: 4.5, price: 55000},
    { name: "Trà đào sữa", image: "img/product-2.png", stars: 4.5, price: 49000},
    { name: "Trà sữa cafe và kem tươi", image: "img/product-3.png", stars: 4.5, price: 55000},
    { name: "Trà sữa vải", image: "img/product-4.png", stars: 4.5, price: 49000},
    { name: "Trà sữa ô long", image: "img/product-5.png", stars: 4.5, price: 49000}
];

function initMenu() {
    // let boxContainer = document.getElementById('listmenu');

    products.forEach((value, key) => {
        // Create a new box element
        let box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `
            <img src= "${value.image}"/>
            <h3>${value.name}</h3>
            <div class="price">${value.price.toLocaleString()} <span>${(value.price + 10000).toLocaleString()}</span> </div>
            <button onclick="addToCart(${key})">thêm vào giỏ hàng</button>
        `;
        listmenu.appendChild(box);
    });
}
initMenu(); 

// function initProduct() {
//     // Define an array of products

//     // Get the box container
//     let boxContainer = document.getElementById('list');

//     // Loop through the products array and create HTML for each product
//     products.forEach(product => {
//         // Create a new box element
//         let box = document.createElement('div');
//         box.classList.add('box');

//         // Create the icons container
//         let iconsDiv = document.createElement('div');
//         iconsDiv.classList.add('icons');
        
//         // Create and append the icons
//         ['fa-shopping-cart', 'fa-heart', 'fa-eye'].forEach(iconClass => {
//             let icon = document.createElement('a');
//             icon.href = '#';
//             icon.classList.add('fas', iconClass);
//             iconsDiv.appendChild(icon);
//         });

//         // Create the image element
//         let imageDiv = document.createElement('div');
//         imageDiv.classList.add('image');
//         let image = document.createElement('img');
//         image.src = product.image;
//         image.alt = product.name;
//         imageDiv.appendChild(image);

//         // Create the content element
//         let contentDiv = document.createElement('div');
//         contentDiv.classList.add('content');
//         // Set the content
//         contentDiv.innerHTML = `
//             <h3>${product.name}</h3>
//             <div class="stars">
//                 ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.stars))}
//                 ${product.stars % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
//             </div>
//             <div class="price">${product.price} <span>${product.discountedPrice}</span></div>
//         `;

//         // Append icons, image, and content to the box
//         box.appendChild(iconsDiv);
//         box.appendChild(imageDiv);
//         box.appendChild(contentDiv);

//         // Append the box to the box container
//         boxContainer.appendChild(box);
//     });


//     openShopping.addEventListener('click', () => {
//         body.classList.add('active');
//     });

//     closeShopping.addEventListener('click', () => {
//         body.classList.remove('active');
//     });
// }

// // Call the initApp1 function when the document is loaded
// document.addEventListener("DOMContentLoaded", initProduct);



function updateCartTitle() {
    let cartTitle = document.getElementById('cart-title');
    if (listCards.length === 0) {
        cartTitle.textContent = "Bạn chưa chọn sản phẩm nào";
    } else {
        cartTitle.textContent = "Bạn đã chọn";
    }
}
updateCartTitle();



function addToCart(key){

    if (!listCards[key]) { 
        listCards[key] = {...products[key], quantity: 0}; 
    }

    listCards[key].quantity++; 
    listCards[key].price = listCards[key].quantity * products[key].price;

    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    for (const key in listCards) {
        if (listCards.hasOwnProperty(key)) {
            const value = listCards[key];
            totalPrice += value.price;
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

