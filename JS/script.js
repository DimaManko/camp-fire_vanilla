function login(username, pass) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", "https://clothapi.progskill.ru/v1/auth/login");
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      if (request.status === 200) {
        const responseData = JSON.parse(request.responseText);
        resolve({
          user: responseData.user,
          accessToken: responseData.access_token.value,
        });
      } else if (request.status === 401) {
        reject(new Error("Ошибка 401: Неверный логин или пароль."));
      } else {
        reject(new Error(`Ошибка: Не удалось отправить данные.`));
      }
    });
    request.addEventListener("error", () => {
      reject(new Error(`Сетевая ошибка запроса`));
    });
    request.send(JSON.stringify({ login: username, password: pass }));
  });
}

function updateFirstName(accessToken, userId, newUserName) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("PATCH", `https://clothapi.progskill.ru/v1/users/${userId}`);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Authorization", `Bearer ${accessToken}`);
    req.addEventListener("load", () => {
      if (req.status === 200) {
        const responseData = JSON.parse(req.responseText);
        resolve(responseData);
      } else if (req.status === 401) {
        reject(new Error(`Ошибка 401: Токен устарел.`));
      } else {
        reject(new Error(`Ошибка: Не удалось отправить данные.`));
      }
    });
    req.addEventListener("error", () => {
      reject(new Error(`Сетевая ошибка запроса`));
    });
    req.send(JSON.stringify({ first_name: newUserName }));
  });
}

login("admin", "admin")
  .then((data) => updateFirstName(data.accessToken, data.user.id, "asdasd"))
  .then((user) =>
    console.log(`Новое полное имя: ${user.first_name} ${user.last_name}`),
  )
  .catch((error) => console.error(error));
