// Я найду тебя!
// Во входящих данных вам дается объект, содержащий список комнат (rooms). Каждая комната имеет название (name) и массив людей (people), находящихся в ней. Каждый человек описан объектом с полями id и name.

// Также в объекте указаны два дополнительных поля:

// targetRoom — название комнаты, в которой нужно искать
// targetPerson — имя человека, которого нужно найти
// Ваша задача — найти первого человека с именем targetPerson, который находится в комнате с названием targetRoom, и вывести его id в консоль. Если такого человека нет - необходимо вывести строку "Человек не найден".

const data = `{
  "rooms": [
    {
      "name": "Парадная",
      "people": [{ "id": 23, "name": "Павел" }, { "id": 42, "name": "Олег" }]
    },
    {
      "name": "Зал",
      "people": [{ "id": 22, "name": "Тимур" }, { "id": 123, "name": "Анна" }]
    },
    {
      "name": "Туалет",
      "people": [{ "id": 353, "name": "Лена" }]
    }
  ],
  "targetPerson": "Анна",
  "targetRoom": "Зал"
}`;

function findPersonOnRoom(data) {
  const roomsObj = JSON.parse(data);
  const { rooms, targetPerson, targetRoom } = roomsObj;
  console.log(
    rooms
      .find((room) => room.name === targetRoom)
      ?.people.find((person) => person.name === targetPerson)?.id ??
      `Человек не найден`
  );
}

findPersonOnRoom(data);
