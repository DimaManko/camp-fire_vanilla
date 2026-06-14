async function login(username, pass) {
  try {
    const url = new URL(`https://clothapi.progskill.ru/v1/auth/login`);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: username, password: pass }),
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error(`Неверный статус ответа: ${res.status}`);
    }
    const data = await res.json();
    return data.access_token.value;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function increaseCheapestProductPrice(accessToken, brendId, procent) {
  try {
    const url = new URL(`https://clothapi.progskill.ru/v1/products`);
    url.searchParams.append("brand_id", `${brendId}`);
    url.searchParams.append("order_by", "price_asc");
    url.searchParams.append("page", "1");
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Неверный статус ответа: ${response.status}`);
    }

    const data = await response.json();

    if (data.data.length === 0 || !data.data) {
      throw new Error("На данный момент товары у выбранного бренда отсутсвуют");
    }
    const lowestPriceProduct = data.data[0];
    console.log(lowestPriceProduct);

    const newPrice = Math.round(lowestPriceProduct.price * (1 + procent / 100));

    const updateResponse = await fetch(
      `https://clothapi.progskill.ru/v1/products/${lowestPriceProduct.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          category_id: lowestPriceProduct.category_id,
          brand_id: lowestPriceProduct.brand_id,
          name: lowestPriceProduct.name,
          description: lowestPriceProduct.description,
          price: newPrice,
          stock: lowestPriceProduct.stock,
        }),
      },
    );
    if (!updateResponse.ok) {
      throw new Error(
        `Не удалось обновить цену: статус ${updateResponse.status}`,
      );
    }
    const updateData = await updateResponse.json();
    return updateData;
  } catch (e) {
    throw e;
  }
}

login("admin", "admin")
  .then((token) =>
    increaseCheapestProductPrice(
      token,
      "b3d4eef6-9e02-4858-b692-0000596f3a2d",
      15.5,
    ),
  )
  .then((updatedProduct) => {
    console.log(
      `Цена товара "${updatedProduct.name}" обновлена, новая цена: ${updatedProduct.price}`,
    );
  })
  .catch((error) => console.error("Ошибка:", error));
