let order = {
    soup: null,
    main: null,
    drink: null
};

function addToOrder(meal) {
    order[meal.category] = meal;
    updateOrderDisplay();
}

function updateOrderDisplay() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';

    let totalCost = 0;
    let isOrderEmpty = true;

    for (const [category, meal] of Object.entries(order)) {
        if (meal) {
            const categoryTitle = document.createElement('h3');
            categoryTitle.textContent = getCategoryTitle(category); 
            orderSummary.appendChild(categoryTitle);

            const mealInfo = document.createElement('p');
            mealInfo.textContent = `${meal.name} ${meal.price}₽`; 
            orderSummary.appendChild(mealInfo);

            totalCost += meal.price;
            isOrderEmpty = false;
        }
    }


    if (isOrderEmpty) {
        orderSummary.innerHTML = '<p>Ничего не выбрано</p>';
    } else {
        const totalElement = document.createElement('h3');
        totalElement.textContent = 'Стоимость заказа';
        orderSummary.appendChild(totalElement);

        const totalCostElement = document.createElement('p');
        totalCostElement.textContent = `${totalCost}₽`;
        orderSummary.appendChild(totalCostElement);
    }
}
function getCategoryTitle(category) {
    switch (category) {
        case 'soup':
            return 'Суп';
        case 'main':
            return 'Главное блюдо';
        case 'drink':
            return 'Напиток';
        default:
            return '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const categories = {
        soup: document.querySelector('section:nth-of-type(1) .meals-grid'),
        main: document.querySelector('section:nth-of-type(2) .meals-grid'),
        drink: document.querySelector('section:nth-of-type(3) .meals-grid')
    };

    function displayMeals() {
        const sortedMeals = meals.sort((a, b) => a.name.localeCompare(b.name));
        sortedMeals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal-item');
            mealElement.setAttribute('data-dish', meal.keyword);
            mealElement.innerHTML = `
                <img src="${meal.image}" alt="${meal.name}">
                <p class="meal-name">${meal.name}</p>
                <p class="meal-price">Цена: ${meal.price}₽</p>
                <button>Добавить</button>
            `;
            mealElement.querySelector('button').addEventListener('click', () => addToOrder(meal));
            categories[meal.category].appendChild(mealElement);
        });
    }

    displayMeals();
});