// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

function deepCount(a) {
  let sum = a.length;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (Array.isArray(element)) {
      sum += deepCount(element);
    }
  }
  return sum;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));
