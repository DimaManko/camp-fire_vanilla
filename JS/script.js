// Парсинг JSON и reviver
// На вход дается JSON-строка с объектом внутри, необходимо самостоятельно получить ее и распарсить.

// Нас будет интересовать свойство date в объекте, оно хранит дату и время.

// Вам необходимо с помощью reviver (второго аргумента функции JSON.parse) преобразовать строку в объект Date и вывести день месяца, который получится, если к свойству date прибавить 15 дней.
function sumDate(data) {
  const date = JSON.parse(data, (key, value) => {
    if (key === "date") {
      const objDate = new Date(value);
      const newDay = objDate.getDate() + 15;
      const newDayObj = new Date(objDate.setDate(newDay));
      console.log(newDayObj.getDate());
    }
  });
}

sumDate('{"date":"2027-11-27T10:10:10Z"}');
