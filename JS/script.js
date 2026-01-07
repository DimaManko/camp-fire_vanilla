// Генерация массива уникальных случайных чисел
// Необходимо реализовать функцию generateUniqueRandomNumbers(count, min, max), которая вернет сгенерированный массив уникальных случайных целых чисел в заданном диапазоне.

// В функцию передаются следующие аргументы:

// count - необходимое количество значений в массиве
// min - минимально возможное значение
// max - максимально возможное значение
// Если невозможно сгенерировать требуемое количество уникальных чисел, необходимо выбросить ошибку типа Error с сообщением Unable to generate array in the specified range.

// Примечание:
// Функцию необходимо только реализовать, вызывать ее не нужно.
// Функция не должна ничего выводить, она должна вернуть сгенерированный массив.
// Подсказка:
// Подумайте, какую структуру данных было бы очень удобно использовать в данном решении.
// Подумайте еще раз, как мы можем данные структуры превратить в массив.

function generateUniqueRandomNumbers(count, min, max) {
  if (max - min <= count) {
    throw new Error("Unable to generate array in the specified range");
  }
  let set = new Set();
  for (let i = 0; set.size < count; i++) {
    set.add(Math.round(Math.random() * (max - min) + min));
  }
  const array = Array.from(set, (value, _) => {
    return value;
  });
  console.log(array);
}

generateUniqueRandomNumbers(5, 1, 10);
