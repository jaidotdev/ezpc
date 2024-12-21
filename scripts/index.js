// TESTED ON CHROME
// NOT WORKING ON FIREFOX BECAUSE OF BROWSER COMPATIBILITY

let cart = [];
let totalPrice = 0;

function addToCart(productID) {
    let price = document.getElementById("price" + productID).value;
    let product = document.getElementById("item" + productID).value;
    console.log(price);
    console.log(product);

    let item = {
        product: product,
        price: price,
    };
    // console.log(item.price, item.product);
    cart = JSON.parse(localStorage.getItem("data"));

    // console.log(cart)

    if (cart) {
        cart.push(item);
        localStorage.setItem("data", JSON.stringify(cart));
    } else {
        cart = [];
        cart.push(item);
        localStorage.setItem("data", JSON.stringify(cart));
    }

    showNotification(`${product} Succesfully added to Cart!`);
    updateCart();
}

function updateCart() {
    let cart = JSON.parse(localStorage.getItem("data"));
    let count = document.getElementById("cartCount");
    count.innerHTML = cart.length;
}

function clearData() {
    localStorage.clear();
    totalPrice = 0;
    cart = [];
    document.getElementById("cash").value = 0;
    location.reload();
}

function calculate() {
    const userCash = document.getElementById("cash").value;
    // console.log(userCash);
    // console.log(totalPrice);
    totalPrice = userCash - totalPrice;
    // console.log(totalPrice)
    document.getElementById("change").innerText = totalPrice;
}

function setItem() {
    const tableBody = document.querySelector(".styled-table tbody");

    const cart = JSON.parse(localStorage.getItem("data")) || [];

    cart.forEach((item) => {
        const row = document.createElement("tr");

        let price = item.price;
        // console.log(price)

        totalPrice += parseInt(price);
        // console.log(totalPrice)

        const itemCell = document.createElement("td");
        itemCell.textContent = item.product;

        const priceCell = document.createElement("td");
        priceCell.textContent = item.price;

        row.appendChild(itemCell);
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });

    let quantity = document.getElementById("quantity");
    quantity.innerText = cart.length;
    // console.log(cart.length);
    // console.log(price)
    let price = document.getElementById("total");
    price.innerText = totalPrice;
}

function showNotification(message) {
    const notificationContainer = document.getElementById(
        "notificationContainer"
    );

    const notification = document.createElement("div");

    notification.classList.add("notification");

    notification.innerText = message;

    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("fade");
        setTimeout(() => notification.remove(), 1000);
    }, 3000);
}

function gotoCart() {
    location.href = "../pages/cart.html";
}
