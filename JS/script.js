// Вам на вход подается массив объектов, представляющих инопланетян, каждый из которых имеет имя и уровень IQ.

// Ваша задача - отсортировать список по убыванию IQ инопланетян и вывести его с их порядковым номером и значением IQ, используя метод массива .entries() в цикле for.

// Используйте следующий формат вывода:

// [номер]: [имя] (IQ: [iq])

// Sample Input 1:

// [
//   { "name": "Капитан Керн", "iq": 150 },
//   { "name": "Глорибас", "iq": 120 },
//   { "name": "Танос", "iq": 200 }
// ]
// Sample Output 1:

// 1: Танос (IQ: 200)
// 2: Капитан Керн (IQ: 150)
// 3: Глорибас (IQ: 120)

const data = `[
  { "name": "Капитан Керн", "iq": 150 },
  { "name": "Глорибас", "iq": 120 },
  { "name": "Танос", "iq": 200 }
]`;

function sortIqNlo(data) {
  const nlo = JSON.parse(data);
  const sortNlo = nlo.sort((a, b) => b.iq - a.iq);
  for (const [idx, persone] of sortNlo.entries()) {
    console.log(`${idx + 1}. ${persone.name} (IQ: ${persone.iq})`);
  }
}

sortIqNlo(data);
