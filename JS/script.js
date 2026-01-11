// Гонка сообщений
// Вы разрабатываете систему логирования для веб-приложения. В какой-то момент вы заметили, что логи могут приходить в неправильном порядке. Это может привести к некорректной интерпретации событий, необходимо исправить это дело, однако, для начала нужно понять, действительно ли логи записываются не по порядку.

// Вам на вход подается массив логов, каждый из которых содержит:

// id — уникальный идентификатор записи (число)
// timestamp — время события в формате ISO 8601 (строка)
// message — описание события (строка)
// Ваша задача — с помощью метода every проверить, что все записи в массиве идут в хронологическом порядке (по возрастанию времени) и вывести в консоль true, в случае если все верно, иначе false.

function chckLog(data) {
  const database = JSON.parse(data);
  console.log(new Date(database[1].timestamp).getTime());

  let check = database.every((log, i, arr) => {
    if (i === arr.length - 1) return true;
    let time = new Date(log.timestamp).getTime();
    let nextTime = new Date(arr[i + 1].timestamp).getTime();
    return time < nextTime;
  });
  console.log(check);
}

const data = `[
  {
    "id": 1001,
    "timestamp": "2025-04-05T14:30:00.000Z",
    "message": "Server started successfully"
  },
  {
    "id": 1002,
    "timestamp": "2025-04-05T14:30:05.000Z",
    "message": "Database connection established"
  },
  {
    "id": 1003,
    "timestamp": "2025-04-05T14:30:12.000Z",
    "message": "API endpoint /users initialized"
  },
  {
    "id": 1004,
    "timestamp": "2025-04-05T14:30:20.000Z",
    "message": "Cache warmed up"
  }
]`;

chckLog(data);
