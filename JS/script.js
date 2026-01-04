// Вы из тестов получаете JSON-строку с объектом внутри. Необходимо с помощью деструктуризации достать два значения из данного объекта:

// Значение под свойством id из данного объекта, константа должна так же называться (id).
// Свойство firstname из внутреннего объекта, который лежит под свойством profile. Константа для этого значения должна быть названа name. Свойство profile, как и свойство firstname, могут отсутствовать - в таком случае, необходимо использовать значение Аноним.
function sumDate(data) {
  let count = data;
  console.log(count);
  const timerId = setInterval(function () {
    if (count === 0) {
      console.log("Время вышло!");
      clearInterval(timerId);
    } else {
      count--;
      console.log(count);
    }
  }, 1000);
}

sumDate(3);
