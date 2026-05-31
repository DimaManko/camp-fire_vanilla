function printMyProfile(accessToken) {
  const xhl = new XMLHttpRequest();
  xhl.open("GET", "https://clothapi.progskill.ru/v1/users/me");
  xhl.setRequestHeader("Authorization", `Bearer ${accessToken}`);
  xhl.addEventListener("load", () => {
    if (xhl.status === 200) {
      const data = JSON.parse(xhl.responseText);
      console.log(
        `Полное имя: ${data.first_name} ${data.last_name}, Роль: ${data.role}. `,
      );
    } else if (xhl.status === 401) {
      console.log("Ошибка: Неверный или отсутствующий токен.");
    } else {
      console.log("Ошибка: Не удалось получить данные пользователя.");
    }

    xhl.addEventListener("error", () => {
      console.log("Сетевая ошибка: Не удалось получить данные пользователя.");
    });
  });
  xhl.send();
}

printMyProfile(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3ODAyNDQ0MjYsImlhdCI6MTc4MDI0MjYyNiwicm9sZSI6IkFETUlOIiwic3ViIjoiYjVhYmZjZDEtM2MwMy00ZTA2LWEyZGEtZGU1ZTkxMDkyMmQyIn0.Rvah34FlbHqVKKE7baVQ6XfgAgJaasS4B9SdzdbwZ9g",
);
