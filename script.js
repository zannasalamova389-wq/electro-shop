// Эта функция вызывается при клике на кнопки + или -
function changeQty(itemId, change) {
    // Находим элемент с числом (например, qty-1)
    const qtyElement = document.getElementById(itemId);
    
    // Получаем текущее число и прибавляем/отнимаем
    let currentQty = parseInt(qtyElement.textContent);
    let newQty = currentQty + change;
    
    // Защита: количество не может быть меньше 0
    if (newQty < 0) {
        newQty = 0;
    }
    
    // Записываем новое значение на страницу
    qtyElement.textContent = newQty;
    
    // Теперь пересчитываем ОБЩЕЕ количество товаров в корзине
    updateTotalCart();
    
    // Анимация блока корзины в шапке
    const cartBox = document.querySelector('.cart');
    cartBox.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartBox.style.transform = 'scale(1)';
    }, 200);
}

// Функция для подсчета общего количества товаров
function updateTotalCart() {
    let total = 0;
    
    // Находим все элементы с классом qty-value на странице
    const allQuantities = document.querySelectorAll('.qty-value');
    
    // Проходимся по каждому и суммируем
    allQuantities.forEach(function(element) {
        total += parseInt(element.textContent);
    });
    
    // Выводим общую сумму в шапку
    document.getElementById('cart-count').textContent = total;
}