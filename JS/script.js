async function getCategoryPriceAnalysis() {
  const _baseURL = new URL(`https://clothapi.progskill.ru/v1/categories`);
  try {
    const categoriesResponse = await fetch(_baseURL);
    if (!categoriesResponse.ok) {
      throw new Error(`Неверный статус запроса: ${categoriesResponse.status}`);
    }
    const categories = await categoriesResponse.json();
    const categoriesPromises = categories.data.map(async (category) => {
      const url = new URL("https://clothapi.progskill.ru/v1/products");
      url.searchParams.append("category_id", category.id);
      url.searchParams.append("min_stock", "1");
      url.searchParams.append("order_by", "price_asc");
      url.searchParams.append("page", "1");

      const responseProd = await fetch(url);
      if (!responseProd.ok) {
        throw new Error(`Неверный статус запроса: ${responseProd.status}`);
      }
      const data = await responseProd.json();
      const arrProd = [...data.data];
      const totalPage = data.total_pages || 1;
      const totalProd = data.total_count;
      const countAnalyze = Math.ceil(totalProd * 0.1);

      if (totalProd === 0) {
        console.log(`Товары ${category.name} отсутсвует в наличии`);
        return {
          categoriesName: category.name,
          productsAnalyze: [],
        };
      }

      if (totalPage > 1 && countAnalyze > arrProd.length) {
        const pagePromises = [];
        for (let page = 2; page <= totalPage; page++) {
          const url = new URL("https://clothapi.progskill.ru/v1/products");
          url.searchParams.append("category_id", category.id);
          url.searchParams.append("min_stock", "1");
          url.searchParams.append("order_by", "price_asc");
          url.searchParams.append("page", `${page}`);

          const req = fetch(url);
          pagePromises.push(req);
        }
        const pageResponse = await Promise.all(pagePromises);
        const pageData = await Promise.all(
          pageResponse.map((res) => {
            if (!res.ok) {
              throw new Error(`Ошибка загрузки страницы`);
            }
            return res.json();
          }),
        );
        pageData.forEach((pageResult) => {
          arrProd.push(...pageResult.data);
        });
      }

      const finalArrProductsAnalyze = arrProd.slice(0, countAnalyze);

      return {
        categoriesName: category.name,
        productsAnalyze: finalArrProductsAnalyze,
      };
    });
    const productsByCategories = await Promise.all(categoriesPromises);
    console.log(productsByCategories);
    const dataAnalyze = new Map();
    productsByCategories.forEach((product) => {
      if (product.productsAnalyze.length === 0) {
        return;
      }
      const totalPriceCategories = product.productsAnalyze.reduce(
        (acc, item) => acc + item.price,
        0,
      );
      const averagePrice = Math.round(
        totalPriceCategories / product.productsAnalyze.length,
      );
      console.log(averagePrice);
      dataAnalyze.set(product.categoriesName, averagePrice);
    });
    console.log(dataAnalyze);

    return dataAnalyze;
  } catch (error) {
    return Promise.reject(error.message);
  }
}
getCategoryPriceAnalysis()
  .then((priceMap) => {
    if (priceMap.size === 0) {
      console.log("Нет данных для анализа.");
    } else {
      console.log("Результаты анализа (10-й перцентиль):");
      for (const [categoryName, avgPrice] of priceMap) {
        console.log(
          `Категория: ${categoryName}, Средняя цена (10% дешёвых): ${avgPrice}`,
        );
      }
    }
  })
  .catch((error) => console.error("Ошибка анализа:", error));
