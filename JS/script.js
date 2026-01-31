// Общая стоимость корзины с учетом скидки
// Вам на вход подается массив товаров в корзине, необходимо вывести общую стоимость корзины с учётом скидок. У каждого товара может быть указана скидка в виде десятичной дроби (например, 0.1 — это 10% скидка). Если скидка равна 0, то она не применяется.

// Каждый товар представлен объектом со следующими полями:

// name — название товара (строка),
// price — цена товара (число),
// discount — скидка на товар (число от 0 до 1).

const data = `[
  { "name": "Телефон", "price": 30000, "discount": 0.1 },
  { "name": "Чехол", "price": 1000, "discount": 0 },
  { "name": "Наушники", "price": 5000, "discount": 0.2 }
]`;
// 0
function amountWithDiscount(data) {
  const goods = JSON.parse(data);
  const amount = goods.reduce((acc, good) => {
    return acc + good.price * (1 - good.discount);
  }, 0);
  return amount;
}

amountWithDiscount(data);
