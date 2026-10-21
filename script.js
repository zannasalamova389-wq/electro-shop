const orderButton = document.querySelector('#order');
const cartCountSpan = document.querySelector('#cart-count');
let cartCount = 0;
//Кнопка <<Заказать  электронику>>
orderButton.addEventListener('click', function() {
alert('Спасибо за заказ! Мы свяжемся с вами.');
});
// Обрабатываем каждую карточку
const cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
const addButton = card.querySelector('.add');
const counter  = card.querySelector('.counter');
const minusButton = card.querySelector('.minus');
const plusButton = card.querySelector('.plus');
const qtySpan = card.querySelector('.qty');
let qty =1; // количество для карточки
// Нажали  <<В корзину>>
addButton.addEventListener('click', function() {
addButton.style.display = 'none';   // прячем кнопку
counter.style.display = 'flex';  // показываем счётчик
qty = 1;
qtySpan.textContent = qty;
cartCount = cartCount + 1;
cartCountSpan.textContent = cartCount;
});
// Нажать <<+>>
plusButton.addEventListener('click', function() {
qty = qty + 1;
qtySpan.textContent = qty;
cartCount = cartCount + 1;
cartCountSpan.textContent = cartCount;
});
// Нажали <<->>
minusButton.addEventListener('click', function() {
if (qty >1) {
qty = qty -1;
qtySpan.textContent = qty;
cartCount = cartCount -1;
cartCountSpan.textContent = cartCount;
} else {
// Если количество 0 - возвращаем кнопку <<В корзину>>
addButton.style.display = 'inline-block';
counter.style.display = 'none';
cartCount = cartCount - 1;
cartCountSpan.textContent = cartCount;
     }  
   });
});