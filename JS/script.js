// Фильтрация продуктов с зависимостями
// Вам на вход подается объект, содержащий список продуктов (products) и массив разрешённых тегов (allowedTags). Необходимо отфильтровать продукты по следующим правилам:

// Продукт должен быть в наличии (свойство inStock должно содержать true).
// Все теги продукта должны присутствовать в списке разрешённых тегов (allowedTags).
// В результате, необходимо вывести получившийся массив с названиями продуктов.

// Примечание:
// Что если бы вам сказали: "Слушай, список разрешенных тегов может быть очень большой в будущем". Повлияет ли эта информация как-либо на ваше решение?
// Sample Input 1:

// {
//   "allowedTags": ["электроника", "гаджеты", "мобильные"],
//   "products": [
//     { "name": "Айфон 15", "tags": ["мобильные", "электроника"], "inStock": true },
//     { "name": "Ноутбук Lenovo", "tags": ["электроника", "компьютеры"], "inStock": true },
//     { "name": "Умные часы", "tags": ["гаджеты", "электроника"], "inStock": false },
//     { "name": "Планшет Samsung", "tags": ["мобильные", "гаджеты"], "inStock": true }
//   ]
// }
// Sample Output 1:

// [ 'Айфон 15', 'Планшет Samsung' ]

const data = `{"allowedTags": ["электроника", "гаджеты", "мобильные"],
  "products": [
    { "name": "Айфон 15", "tags": ["мобильные", "электроника"], "inStock": true },
    { "name": "Ноутбук Lenovo", "tags": ["электроника", "компьютеры"], "inStock": true },
    { "name": "Умные часы", "tags": ["гаджеты", "электроника"], "inStock": false },
    { "name": "Планшет Samsung", "tags": ["мобильные", "гаджеты"], "inStock": true }
  ]
}`;

let product = JSON.parse(data);
let { allowedTags, products } = product;

function filterProd(products, tags) {
  let arr = products
    .filter(
      (product) =>
        product.inStock &&
        product.tags.every((tag) => allowedTags.includes(tag)),
    )
    .map((product) => product.name);
  return arr;
}

console.log(filterProd(products, allowedTags));
