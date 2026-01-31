// Анализируем логи
// Вы работаете с логами сервера. Каждый лог представляет собой объект с двумя полями:

// endpoint — строка, путь к API-эндпоинту.
// status — целое число, HTTP-статус ответа.
// Вам подается массив таких логов, необходимо вывести в консоль объект в формате JSON, в котором по каждому endpoint подсчитано количество успешных и неуспешных запросов.

// Успешным запросом является любой статус в диапазоне 200–299, а неуспешным — любой другой статус (например, 4xx, 5xx и т.п.).

// Подсказка:
// Как отмечалось, формат вывода - JSON, можно использовать JSON.stringify(), однако, для правильного формата необходимо будет этой функции дать дополнительные аргументы, помимо самого объекта, который необходимо вывести.

const data = `[
  { "endpoint": "/api/cart", "status": 200 },
  { "endpoint": "/api/cart", "status": 403 },
  { "endpoint": "/api/checkout", "status": 502 },
  { "endpoint": "/api/checkout", "status": 200 },
  { "endpoint": "/api/cart", "status": 200 }
]`;

function checkLog(data) {
  const log = JSON.parse(data);
  const check = log.reduce((acc, point) => {
    if (!acc[point.endpoint]) {
      acc[point.endpoint] = { success: 0, error: 0 };
    }
    point.status >= 200 && point.status < 300
      ? (acc[point.endpoint].success += 1)
      : (acc[point.endpoint].error += 1);
    return acc;
  }, {});
  console.log(JSON.stringify(check));
}

checkLog(data);
