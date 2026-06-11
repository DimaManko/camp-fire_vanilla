async function getProductDetails(productId) {
  try {
    const response = await fetch(
      `https://clothapi.progskill.ru/v1/products/${productId}`,
    );
    if (!response.ok) {
      throw new Error(`Неверный статус ответа: ${response.status}`);
    }
    const data = await response.json();
    const [brandResponse, categoryId] = await Promise.all([
      fetch(`https://clothapi.progskill.ru/v1/brands/${data.brand_id}`),
      fetch(`https://clothapi.progskill.ru/v1/categories/${data.category_id}`),
    ]);

    const brandData = await brandResponse.json();
    const categoriesData = await categoryId.json();

    console.log(
      `Название товара: ${data.name || `Не удалось загрузить информацию`}`,
    );
    console.log(`Цена: ${data.price || `Не удалось загрузить информацию`}`);
    console.log(
      `Категория: ${categoriesData.name || `Не удалось загрузить информацию`}`,
    );
    console.log(
      `Бренд: ${brandData.name || `Не удалось загрузить информацию`}`,
    );
    console.log(
      `Описание: ${data.description || `Не удалось загрузить информацию`}`,
    );
  } catch (error) {
    console.log(error);
  }
}

getProductDetails("3df43a13-a4b4-4ed6-bfa0-10ed1d741bac");
