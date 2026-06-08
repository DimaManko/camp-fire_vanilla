function getFilteredProducts(filters, callback) {
  const xhr = new XMLHttpRequest();
  let _baseUrl = new URL("https://clothapi.progskill.ru/v1/products");
  for (const [key, value] of Object.entries(filters)) {
    _baseUrl.searchParams.append(`${key}`, `${value}`);
  }
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      try {
        const data = JSON.parse(xhr.responseText);
        callback(data.data);
      } catch {
        callback(new Error("Не удалось распарсить ответ сервера"));
      }
    } else if (xhr.status === 422) {
      callback(new Error("Некорректные параметры запроса"));
    } else if (xhr.status === 400) {
      callback(new Error("Ошибка при валидации запроса"));
    } else {
      callback(new Error("Неизвестная ошибка"));
    }
  });

  xhr.addEventListener("error", (e) => {
    callback(new Error("Сетевая ошибка"));
  });

  xhr.open("GET", _baseUrl);
  xhr.send();
}

function displayProducts(products) {
  // Проверяем, если получили ошибку, выводим сообщение:
  if (products instanceof Error) {
    console.log(
      `Ошибка при попытке получить список товаров: ${products.message}`,
    );
    return;
  }
  // Если получили не ошибку, значит, запрос был успешным, выводим товары:
  products.forEach((product) => {
    console.log(`Название: ${product.name}, Цена: ${product.price}`);
  });
}

const filters = { min_price: 300000, max_price: 500000 };
// Вызов вашей функции, передаем список фильтров и callback-функцию.
getFilteredProducts(filters, displayProducts);
