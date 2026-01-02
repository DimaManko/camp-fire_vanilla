// Вам в переменной author предоставлен объект, необходимо с помощью деструктуризации достать два значения из этого объекта:

// Имя автора - свойство firstname, которое необходимо положить в константу authorName.
// У объекта в свойстве books лежит массив объектов - книги автора. Необходимо у первого объекта в массиве достать свойство title, это значение должно находиться в константе firstBook.
function sumDate(data) {
  const {
    firstname: authorName,
    books: [{ title: firstBook }],
  } = JSON.parse(data.toString());
  console.log(`${authorName} - ${firstBook}`);
}

sumDate(
  '{"firstname": "Александр", "books": [{"title": "Евгений Онегин", "form": "роман в стихах"}, {"title": "Капитанская дочка"}]}'
);
