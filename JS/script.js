// Определяем пик пользователей
// Вам подается на вход массив событий в формате JSON. Каждое событие содержит:

// timestamp — время события в формате ISO 8601
// event — тип события (login, logout и другие)
// userId — идентификатор пользователя
// События отсортированы по времени. Каждый пользователь может войти в систему (login) и выйти (logout). Сессия пользователя считается активной с момента login до logout.

// Ваша задача — определить максимальное количество одновременно активных пользователей (т.е. пик активных сессий) и вывести его в формате JSON с единственным полем peakActiveUsers, содержащим максимальное количество одновременно активных пользователей.

// Примечание
// Когда дело дойдет до хранения информации, подумайте, какая структура в данном задании лучше всего подойдет.

function peakUsers(data) {
  const users = JSON.parse(data);
  const userActive = new Set();
  let countActive = 0;
  let maxActive = 0;
  for (const userObj of users) {
    const { event, userId } = userObj;
    if (event === "login") {
      if (!userActive.has(userId)) {
        countActive++;
        userActive.add(userId);
        if (countActive > maxActive) {
          maxActive = countActive;
        }
      }
    } else if (event === "logout") {
      if (userActive.has(userId)) {
        countActive--;
        userActive.delete(userId);
      }
    }
  }
  console.log(JSON.stringify({ peakActiveUsers: maxActive }));
  console.log(userActive);
}
peakUsers(`[
  {"timestamp": "2026-01-01T10:00:00Z", "event": "login", "userId": "U1"},
  {"timestamp": "2026-01-01T10:01:00Z", "event": "login", "userId": "U2"},
  {"timestamp": "2026-01-01T10:02:00Z", "event": "login", "userId": "U3"},
  {"timestamp": "2026-01-01T10:03:00Z", "event": "login", "userId": "U4"},
  {"timestamp": "2026-01-01T10:04:00Z", "event": "login", "userId": "U5"},
  {"timestamp": "2026-01-01T10:05:00Z", "event": "login", "userId": "U6"},
  {"timestamp": "2026-01-01T10:06:00Z", "event": "login", "userId": "U7"},
  {"timestamp": "2026-01-01T10:07:00Z", "event": "login", "userId": "U8"},
  {"timestamp": "2026-01-01T10:08:00Z", "event": "login", "userId": "U9"},
  {"timestamp": "2026-01-01T10:09:00Z", "event": "login", "userId": "U10"},
  {"timestamp": "2026-01-01T10:10:00Z", "event": "logout", "userId": "U1"},
  {"timestamp": "2026-01-01T10:11:00Z", "event": "logout", "userId": "U2"},
  {"timestamp": "2026-01-01T10:12:00Z", "event": "logout", "userId": "U3"}
]`);
