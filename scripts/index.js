let products = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
};
total = 0;
function calculateTotal() {
    for (let i = 1; i <= 12; i++) {
        let quantity = products[i];
        let price = parseFloat(document.getElementById("price" + i).value);

        if (!isNaN(price)) {
            total += quantity * price;
        }
    }

    document.getElementById("total").innerText = total;
}

function calculateChange() {
    let payment = document.getElementById("payment").value;
    let change = payment - total;
    document.getElementById("change").innerText = change;
}

function addToCart(productId) {
    products[productId] += 1;
    document.getElementById("quantity" + productId).value = products[productId];
}

function increment(productId) {
    products[productId] += 1;
    document.getElementById("quantity" + productId).value = products[productId];
}

function decrement(productId) {
    if (products[productId] > 0) {
        products[productId] -= 1;
        document.getElementById("quantity" + productId).value =
            products[productId];
    }
}

function resetQuantities() {
    for (let i = 1; i <= 12; i++) {
        products[i] = 0;
        document.getElementById("quantity" + i).value = products[i];
    }
}

window.onload = function () {
    resetQuantities();
};
