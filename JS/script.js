// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то возвращается сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

const family = ["Peter", "Ann", "Alex", "Linda"];
function showFamily(arr) {
  let name = "";
  for (const element of arr) {
    name += ` ${element}`;
  }
  if (name === "") {
    return "Семья пуста";
  }
  return `Семья состоит из: ${name.trim()}`;
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element.toLowerCase());
  }
}

console.log(showFamily(family));
standardizeStrings(favoriteCities);
