function increaseQuantity(quantityId) {
    var quantityElement=document.getElementById(quantityId);
    var currentQuantity=parseInt(quantityElement.textContent);
    quantityElement.textContent=currentQuantity+1;
    updateTotal();
}

function decreaseQuantity(quantityId) {
    var quantityElement=document.getElementById(quantityId);
    var currentQuantity=parseInt(quantityElement.textContent);

    if (currentQuantity > 1) {
        quantityElement.textContent=currentQuantity - 1;
        updateTotal();
    }
}

function updateTotal() {}