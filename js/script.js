//DATA------------------------------------------------------------
let products = [
    { name: "Trà sữa trân châu đường đen", image: "img/product-1.png", stars: 5, price: 55000},
    { name: "Trà đào sữa", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa cafe và kem tươi", image: "img/product-1.png", stars: 4.5, price: 55000},
    { name: "Trà sữa vải", image: "img/product-1.png", stars: 5, price: 49000},
    { name: "Trà sữa ô long", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa Thái", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa A", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa B", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa C", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa D", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa E", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa F", image: "img/product-1.png", stars: 4.5, price: 49000},];

let sizeList = ['L', 'M', 'S'];
let sugarList = ['50', '70', '100'];
let iceList = ['50', '70', '100'];

// tạo mảng fullProducts bao gồm các thuộc tính size, sugar, ice:
let fullProducts = [];
products.forEach((product, index) => {
    sizeList.forEach(size => {
        sugarList.forEach(sugar => {
            iceList.forEach(ice => {
                // tạo ID:
                let id = `${index}_${size}_${sugar}_${ice}`;
                // cập nhật giá bán theo size:
                let updatedPrice = product.price;
                if (size === 'S') {
                    updatedPrice -= 10000;
                } else if (size === 'L') {
                    updatedPrice += 10000;
                } 
                // tạo đối tượng:
                let newProduct = {...product, id: id, size: size, sugar: sugar, ice: ice, price: updatedPrice};
                fullProducts.push(newProduct);
            });
        });
    });
});
console.log("fullProducts:");
console.log(fullProducts);



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
// thanh cuộn:
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    // cartItem.classList.remove('active');
}


//Payment btn------------------------------------------------------------
let paymentButton = document.querySelector('.payment');
document.addEventListener('DOMContentLoaded', function() {
    paymentButton.addEventListener('click', function() {
        window.location.href = 'thanhToan.html';
    });
});



//INIT MENU------------------------------------------------------------

// tìm giá nhỏ nhất của sản phẩm:
function productPriceMin(valueX){
    fullProducts.forEach(value =>{
        if(value.name == valueX.name && value.size == 'S')
            return value.price;
    })
    return null;
}

// tìm giá sản phẩm theo size:
function productPrice(fullProducts, valueX, sizeY){
    let min = productPriceMin(valueX);

    fullProducts.forEach(value => {
        if (value.name === valueX.name && value.size === sizeY) {
            min = value.price;
        }
    });
    return min;
}


//tạo danh sách menu:
function initMenu() {
    // idx để đánh dấu id xác định trong mỗi box:
    let idx = 1;
    products.forEach((value, key) => {
        // tạo ele mới:
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
            <img src= "${value.image}"/>
            <h4>${value.name}</h4>
            <div class="price">
                <!-- js script here! (show price by product size) -->
            </div>
            <div class="btn-change-size">
                <h5>Size: </h5>
                <input type="radio" name="size-level-${key}" id="size-s-${idx}" class="control-input" data-size="S">
                <label for="size-s-${idx}" class="custom-control-label">S</label>
                <input type="radio" name="size-level-${key}" id="size-m-${idx}" class="control-input" data-size="M">
                <label for="size-m-${idx}" class="custom-control-label">M</label>
                <input type="radio" name="size-level-${key}" id="size-l-${idx}" class="control-input" data-size="L">
                <label for="size-l-${idx}" class="custom-control-label">L</label>
            </div>
            <div class="btn-change-sugar">
                <h5>Đường (%):</h5>
                <input type="radio" name="sugar-level-${key}" id="sugar-50-${idx} sugar-${key}" class="control-input" data-sugar="50">
                <label for="sugar-50-${idx}" class="custom-control-label">50</label>
                <input type="radio" name="sugar-level-${key}" id="sugar-70-${idx} sugar-${key}" class="control-input" data-sugar="70">
                <label for="sugar-70-${idx}" class="custom-control-label">70</label>
                <input type="radio" name="sugar-level-${key}" id="sugar-100-${idx} sugar-${key}" class="control-input" data-sugar="100">
                <label for="sugar-100-${idx}" class="custom-control-label">100</label>
            </div>
            <div class="btn-change-ice">
                <h5>Đá (%):</h5>
                <input type="radio" name="ice-level-${key}" id="ice-50-${idx} ice-${key}" class="control-input" data-ice="50">
                <label for="ice-50-${idx}" class="custom-control-label">50</label>
                <input type="radio" name="ice-level-${key}" id="ice-70-${idx} ice-${key}" class="control-input" data-ice="70">
                <label for="ice-70-${idx}" class="custom-control-label">70</label>
                <input type="radio" name="ice-level-${key}" id="ice-100-${idx} ice-${key}" class="control-input" data-ice="100">
                <label for="ice-100-${idx}" class="custom-control-label">100</label>
            </div>
            <div class="btn-add-to-cart" id="cart-${key}"><button onclick="addToCart(${key})">thêm vào giỏ hàng</button></div>
        `;

        // tìm .price ele trong box:
        let priceDiv = box.querySelector('.price');

        //Trường hợp 1: lần hiển thị khi chưa tác động chọn size: hiển thị theo giá mặc định của size S:
        // lấy giá size S:
        let newPrice = productPrice(fullProducts, value, 'S');

        //nếu priceDiv ele tồn tại thì chèn html để hiển thị giá bán size S:
        if (priceDiv) {
            priceDiv.innerHTML = `${newPrice.toLocaleString()} <span>${(newPrice + 10000).toLocaleString()}</span>`;
        }

        //Trường hợp 2: hiển thị giá theo size được chọn:
        // thêm lắng nghe event tại btn-change-size ele để check xem size nào được chọn:
        let sizeInputs = box.querySelectorAll('.btn-change-size input[type="radio"]');
        sizeInputs.forEach(sizeInput => {
            sizeInput.addEventListener('change', function() {
                let selectedSize = this.getAttribute('data-size');
                console.log(`Size sản phẩm ${value.name}: ${selectedSize}`);

                // cập nhật hiển thị giá:
                let newPrice = productPrice(fullProducts, value, selectedSize);
                console.log('newPrice: ' + newPrice);

                //nếu priceDiv ele tồn tại thì chèn html để hiển thị giá bán size tương ứng:
                if (priceDiv) {
                    priceDiv.innerHTML = `${newPrice.toLocaleString()} <span>${(newPrice + 10000).toLocaleString()}</span>`;
                }
            });
        });

        //lệnh chèn html:
        listmenu.appendChild(box);

        idx++;
    });
}

initMenu();



//CART------------------------------------------------------------
let list = document.querySelector('.listmenu');
let listCard = document.querySelector('.listCard');
let header = document.querySelector('header');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let productLength = products.length;

let closeShopping = document.querySelector('.closeShopping');
document.querySelector('.closeShopping').onclick = () =>{
    cartItem.classList.remove('active');    
}


//----------------------------
//hiển thị số lượng trên giỏ hàng (ẩn class #QuanIsExisted trong html):
function quantityShow(){
    //giữ nguyên <span class="quantity" id="QuanIsExisted">0</span>
    if (!localStorage.getItem('cartQuantity') || localStorage.getItem('cartQuantity') == 0) {
        console.log("No quantity to show"); 
    }
    //xóa id trong <span class="quantity" id="QuanIsExisted">0</span>:
    var quantitySpan = document.querySelector('.quantity');
    if (parseInt(quantitySpan.innerText) !== 0) {
        quantitySpan.id = 'QuanIsExisted';
    } else {
        quantitySpan.removeAttribute('id');
    }

    console.log("Quantity to show = " + localStorage.getItem('cartQuantity'));
}
quantityShow();


// nếu giỏ hàng rỗng thì hiển thị 0:
if (!localStorage.getItem('cartQuantity')) {
    localStorage.setItem('cartQuantity', 0);
    localStorage.setItem('cartTotal', 0);
}
quantity.innerText = localStorage.getItem('cartQuantity');
total.innerText = localStorage.getItem('cartTotal');
//----------------------------


// bắt sự kiện đã nhấn nút thêm giỏ hàng:
function listenAddToCartEvent(){
    let IdNum = null;
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
        let id = btn.id; 
        btn.addEventListener('click', (event) => { // Thêm tham số event vào hàm xử lý sự kiện
            let extractId = id.split('-');
            IdNum = parseInt(extractId[extractId.length -1], 10);
            console.log("Đã nhấn vào nút 'thêm vào giỏ hàng' có id: " + IdNum);
            return IdNum;
        });
    });   
}
// listenAddToCartEvent();


//----------------------------
//thêm object mới vài listCards:
function addToListCards(newcard, listCards){
    // let listCards = JSON.parse(localStorage.getItem('listCards')) || {};
    listCards = newcard;
    localStorage.setItem('listCards', JSON.stringify(listCards));
}

// check nếu đối tượng đã có trong listCards: return vị trí đối tượng trong listCards
function checkInstance(listCards, newcard){
    for (const key in listCards){
        if(listCards[key].name === newcard.name
            && listCards[key].size === newcard.size
            && listCards[key].sugar === newcard.sugar
            && listCards[key].ice === newcard.ice
        ){
            return key;
        }     
    }
    return -1;
}

// cập nhật dữ liệu mới vào đối tượng đã có trong listCards:
function updateListCards(listCards, key){
    if(key >= 0){
        listCards[key].quantity++;
        listCards[key].total += listCards[key].price;
        localStorage.setItem('listCards', JSON.stringify(listCards));
        localStorage.setItem('cartTotal', localStorage.getItem('cartTotal') + listCards[key].price);
    }
}

//tính tổng tiền:
function grandTotal(listCards){
    let sum = 0;
    for (const key in listCards){
        sum += listCards[key].total;
    }
    return sum;
}




function reloadCard() {
    // tạo danh sách để lưu các sp add to cart:
    let listCards = JSON.parse(localStorage.getItem('listCards')) || {};
    let count = 0;
    let totalPrice = 0;

    // chèn html tại class="listCard":
    listCard.innerHTML = '';

    // vòng lặp để chèn các ptử Div trong giỏ hàng:
    for (const key in listCards) {

        if (listCards.hasOwnProperty(key) ) {

            const value = listCards[key];
            // totalPrice += value.price;
            totalPrice = grandTotal(listCards);
            count += value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <img src="${value.image}"/>

                <div class="cart-info">
                    <div class="cart-info-1">
                        <div class="cart-name">${value.name}</div>
                        <div class="cart-price">${value.price}</div>
                        <div class="cart-change">
                            <div class="count">${value.quantity}</div>
                            <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                            <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                        </div>
                    </div>

                    <div class="cart-info-2">
                        <span>Size: ${value.size}</span>
                        <span>Đường: ${value.sugar}</span>
                        <span>Đá: ${value.ice}</span>
                    </div>
                </div>
            `;
            
            listCard.appendChild(newDiv);
        }
    }

    // lưu tổng số lượng item trong giỏ hàng vào localstorage:
    localStorage.setItem('cartQuantity', count);
    console.log("Count: ************* " + count);
    // hiển thị tổng số lượng tại .quantity:
    quantity.innerText = localStorage.getItem('cartQuantity');
    
    // lưu tổng tiền trong giỏ hàng vào localstorage:
    localStorage.setItem('cartTotal', totalPrice);
    console.log("cartTotal: ************* " + totalPrice);
    // hiển thị tổng số lượng tại .total:
    total.innerText = localStorage.getItem('cartTotal');

    quantityShow();
}

// cập nhật hiển thị quantity và total:
quantity.innerText = localStorage.getItem('cartQuantity');
total.innerText = localStorage.getItem('cartTotal');
quantityShow();




// thêm giỏ hàng:
function addToCart(key) {
    console.log("key = " + key);

    // tạo danh sách để lưu các sp được thêm vào giỏ hàng:
    let listCards = JSON.parse(localStorage.getItem('listCards')) || {};
    console.log("listCards[key]: " + key);

    // get name:
    let getName = products[key].name;
    console.log("Check_name: " + getName);
    // get image:
    let imageElement = document.querySelector('.box img');
    let getImage = imageElement.getAttribute('src');
    console.log("image: " + getImage);
    // get price:
    let priceElement = document.querySelector('.price');
    let priceText = priceElement.textContent;
    let getPrice = parseInt(priceText.split(' ')[0].replace(',', ''));
    console.log("Check_price: " + getPrice);
    
    //push các thuộc tính vào newcard:
    let newcard= {name: getName
        , image: getImage
        , price: getPrice
        , quantity: 0
        , size: localStorage.getItem('size')
        , sugar: localStorage.getItem('sugar')
        , ice: localStorage.getItem('ice')
        , total: 0
    };
    
    //check if newcard obj is exited:
    isFirstAdd = checkInstance(listCards, newcard);
    console.log("newcard = " + isFirstAdd);

    // tạo key cho sản phẩm mới được add vào listCards:
    if(newcard.size === 'M')
        key += productLength;
    else if(newcard.size === 'L')
        key += productLength * 2;


    if(isFirstAdd == -1){ // giỏ hàng chưa có newcard:
        console.log("Sản phẩm này chưa có trước đó!");

        // gán lại giá trị mặc định chọn size S, sugar 100, ice 100:
        // ReturnInitRemark();

        // gán giá trị vào phần tử mới:
        listCards[key] = newcard;
        // cập nhật lại số lượng và tổng tiền:
        listCards[key].quantity = 1;
        listCards[key].total = getPrice;
        console.log("********************getPrice: " + getPrice);

        localStorage.setItem('listCards', JSON.stringify(listCards)); 
    }
    else{
        //update obj đã tồn tại:
        console.log("Tăng số lượng sản phẩm này trong giỏ hàng!");
        // key = listenAddToCartEvent();
        console.log("key: " + key);

        //kiểm tra size trước đó đã chọn:

        //nếu ko chọn lại size thì mặc định chọn giống size đã chọn

        updateListCards(listCards, key);
    }
    localStorage.setItem('listCards', JSON.stringify(listCards));
    console.log("check product length: " + productLength);

    // gán lại giá trị mặc định chọn size S, sugar 100, ice 100:
    // ReturnInitRemark();

    // Cập nhật size, sugar, ice vào các biến trong localstorage:
    getSugar();
    getIce();
    
    // load giỏ hàng
    reloadCard();
    
    // cập nhật hiển thị số lượng item:
    quantity.innerText = localStorage.getItem('cartQuantity');
    total.innerText = localStorage.getItem('cartTotal');
    quantityShow();
}

// thay đổi số lượng đơn hàng:
function changeQuantity(key, quantity) {
    // tạo danh sách để lưu các sp add to cart:
    let listCards = JSON.parse(localStorage.getItem('listCards')) || {};

    // xóa 1 loại sản phẩm trong giỏ hàng nếu số lượng item của sản phẩm đó = 0: 
    if (quantity === 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].total = quantity * listCards[key].price;
    }

    // lưu cập nhật listCards vào localstorage
    localStorage.setItem('listCards', JSON.stringify(listCards));
    reloadCard();

    // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện người dùng
    quantity.innerText = localStorage.getItem('cartQuantity');
    total.innerText = localStorage.getItem('cartTotal');
}


//RATIO------------------------------------------------------------
let sizeInputs = document.querySelectorAll('input[name^="size-level-"]');
let sugarInputs = document.querySelectorAll('input[name^="sugar-level-"]');
let iceInputs = document.querySelectorAll('input[name^="ice-level-"]');

getSize();
getSugar();
getIce();

// get size:
function getSize() {
    // Lặp qua từng radio button để gắn sự kiện 'change'
    sizeInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Kiểm tra xem radio button này có được chọn không
            if (this.checked) {
                // Lấy ra giá trị của data-size tương ứng
                localStorage.setItem('size', this.getAttribute('data-size'));
                console.log("sizeInputs: " + this.getAttribute('data-size'));
                
            }
        });
    });
}

// get sugar:
function getSugar() {
    // localStorage.setItem('cartSugar', '100');
    // Lặp qua từng radio button để gắn sự kiện 'change'
    sugarInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Kiểm tra xem radio button này có được chọn không
            if (this.checked) {
                // Lấy ra giá trị của data-size tương ứng
                localStorage.setItem('sugar', this.getAttribute('data-sugar'));
                console.log("sugarInputs: " + this.getAttribute('data-sugar'));
                // localStorage.setItem('cartSugar', sugar);
                // listCards[key].sugar = sugar;
            }
        });
    });
}

// get ice:
function getIce() {
    // localStorage.setItem('cartIce', '100');
    // Lặp qua từng radio button để gắn sự kiện 'change'
    iceInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Kiểm tra xem radio button này có được chọn không
            if (this.checked) {
                // Lấy ra giá trị của data-size tương ứng
                localStorage.setItem('ice', this.getAttribute('data-ice'));
                console.log("iceInputs: " + this.getAttribute('data-ice'));
                // localStorage.setItem('cartIce', ice);
                // listCards[key].ice = ice;
            }
        });
    });
}

function ReturnInitRemark(){
    localStorage.setItem('size', 'S' );
    localStorage.setItem('sugar', '100' );
    localStorage.setItem('ice', '100' );
}


//------------------------------------------------------------




//------------------------------------------------------------




//------------------------------------------------------------