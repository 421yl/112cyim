function increaseQuantity(quantityId) {
  var quantityElement = document.getElementById(quantityId);
  var currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  updateTotal();
}

function decreaseQuantity(quantityId) {
  var quantityElement = document.getElementById(quantityId);
  var currentQuantity = parseInt(quantityElement.textContent);

  if (currentQuantity > 1) {
      quantityElement.textContent = currentQuantity - 1;
      updateTotal();
  }
}

const add = document.getElementsByClassName('addBtn');
const remove = document.getElementsByClassName('removeBtn');

const addFn = (e) => {
  e.target.parentNode.querySelector('input').value++;
  updateTotal();
};

const removeFn = (e) => {
  const inputElement = e.target.parentNode.querySelector('input');
  let currentQuantity = parseInt(inputElement.value);

  if (currentQuantity > 1) {
      inputElement.value = currentQuantity - 1;
      updateTotal();
  }
};

for (let i = 0; i < add.length; i++) {
  add[i].addEventListener('click', addFn);
}

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener('click', removeFn);
}

function removeItem(btn) {
  var itemContainer = btn.parentNode;
  var nextElement = itemContainer.nextElementSibling;

  itemContainer.parentNode.removeChild(itemContainer);

  if (nextElement && nextElement.tagName === 'BR') {
    nextElement.parentNode.removeChild(nextElement);
  }

  updateTotal();
}