//DATA------------------------------------------------------------
let products = [
    { name: "Trà sữa trân châu đường đen", image: "img/product-1.png", stars: 5, price: 55000},
    { name: "Trà đào sữa", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa cafe và kem tươi", image: "img/product-1.png", stars: 4.5, price: 55000},
    { name: "Trà sữa vải", image: "img/product-1.png", stars: 5, price: 49000},
    { name: "Trà sữa ô long", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa Thái", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa bạc hà", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa trân châu trắng", image: "img/product-1.png", stars: 5, price: 49000},
    { name: "Trà sữa khoai môn", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa xoài kem cheese", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa Oreo Chocolate Cream", image: "img/product-1.png", stars: 4.5, price: 49000},
    { name: "Trà sữa Pudding đậu đỏ", image: "img/product-1.png", stars: 4.5, price: 49000},];

let sizeList = ['L', 'M', 'S'];
let sugarList = ['50', '70', '100'];
let iceList = ['50', '70', '100'];

// tạo mảng fullProducts bao gồm các thuộc tính size, sugar, ice:
let fullProducts = [];
let id = -1;
products.forEach((product, index) => {
    sizeList.forEach(size => {
        sugarList.forEach(sugar => {
            iceList.forEach(ice => {
                // tạo ID:
                // let id = `${index}_${size}_${sugar}_${ice}`;
                id += 1;
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

// thanh cuộn:
window.onscroll = () =>{
    navbar.classList.remove('active');
    // search.classList.remove('active');
    // cartItem.classList.remove('active');
}


//Payment btn------------------------------------------------------------


//TỔNG GIÁ TRỊ ĐƠN HÀNG:
// Lấy thẻ span:
let totalQuantityElement = document.querySelector('#grandTotal-quan');
let totalPriceElement = document.querySelector('#grandTotal-price');

// Cập nhật tổng số lượng và tổng giá trị:
totalQuantityElement.innerText = localStorage.getItem('cartQuantity');
totalPriceElement.innerText = localStorage.getItem('cartTotal');



// HIỂN THỊ CHI TIẾT ĐƠN HÀNG:
ordersInPayment();
function ordersInPayment(){
    // lưu listCards object từ localStorage
    let listCards = JSON.parse(localStorage.getItem('listCards'));
    let tableBody = document.querySelector('#grid-listCarts tbody');

    //nếu listCards object tồn tại:
    if (listCards && tableBody) {
        tableBody.innerHTML = '';   //xóa những value cũ

        //duyệt danh sách listCards:
        Object.keys(listCards).forEach(key => {
            let item = listCards[key];
            
            //tạo dòng html:
            let row = document.createElement('tr');

            //tạo table cells cho mỗi phần tử item:
            let imageCell = document.createElement('td');
            imageCell.innerHTML = `<img src="${item.image}" alt="${item.name}"/>`;
            row.appendChild(imageCell);

            //tạo ô Tên sản phẩm:
            let nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            nameCell.classList.add('product-name');  //thêm class để canh trái cho cột này bên css
            row.appendChild(nameCell);

            //tạo ô Đơn giá sản phẩm:
            let priceCell = document.createElement('td');
            priceCell.textContent = item.price;
            row.appendChild(priceCell);

            //tạo ô Size sản phẩm:
            let sizeCell = document.createElement('td');
            sizeCell.textContent = item.size;
            row.appendChild(sizeCell);

            //tạo ô số lượng sản phẩm:
            let quantityCell = document.createElement('td');
            quantityCell.textContent = item.quantity;
            row.appendChild(quantityCell);

            //tạo ô ghi chú các thông tin về đường đá:
            let othersCell = document.createElement('td');
            othersCell.textContent = item.sugar + '/ ' + item.ice;
            row.appendChild(othersCell);


            // thêm dòng vừa tạo vào bảng:
            tableBody.appendChild(row);
        });

        //tổng cộng:


    } else {
        console.log('Không tìm thấy listCards trong localstorage');
    }
}
