// Фильтрация и преобразование массива студентов
// Вам подается массив объектов, представляющих студентов. Каждый объект содержит поля name (имя студента) и score (числовой балл).

// Вам нужно выполнить следующие действия:

// Отфильтровать массив, оставив только студентов, которые набрали больше 50 баллов.
// Преобразовать оставшиеся объекты в новый массив, где:
// Свойство name остаётся без изменений.
// Свойство score удалено.
// Добавлено свойство grade, со значением A, если score был больше или равен 90, если score был меньше, то значение должно быть B.
// Выведите полученный массив в виде JSON строки.
// Sample Input 1:

// [
//   { "name": "Аня", "score": 95 },
//   { "name": "Петя", "score": 45 },
//   { "name": "Саша", "score": 85 },
//   { "name": "Лена", "score": 92 }
// ]
// Sample Output 1:

// [{"name":"Аня","grade":"A"},{"name":"Саша","grade":"B"},{"name":"Лена","grade":"A"}]

const data = `[
  { "name": "Аня", "score": 95 },
  { "name": "Петя", "score": 45 },
  { "name": "Саша", "score": 85 },
  { "name": "Лена", "score": 92 }
]`;

const students = JSON.parse(data);

let studentsScoreHight = students
  .filter((student) => student.score > 50)
  .map((student) => {
    student.grade = student.score >= 90 ? "A" : "B";
    delete student.score;
    return student;
  });
console.log(studentsScoreHight);
console.log(JSON.stringify(studentsScoreHight));
