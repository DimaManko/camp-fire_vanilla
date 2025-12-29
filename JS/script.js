// Разница в днях
// Вам необходимо реализовать функцию daysDiff, которая принимает две строки, которые содержат дату и время. Функция должна вернуть разницу между двумя датами в полных днях.

// Если какая-либо строка содержит некорректную дату, необходимо выбросить ошибку Error с сообщением Invalid date input: ДАТА.

// Примечание:
// Функция не должна ничего выводить.
// Вызывать функцию не нужно, она будет вызвана самостоятельно.
// Sample Input 1:

// {"dateStr1": "2025-01-01T00:00:00", "dateStr2": "2025-01-01T23:59:59"}
// Sample Output 1:

// 0
// Sample Input 2:

// {"dateStr1": "2025-01-01", "dateStr2": "2025-01-02T25:00:00"}
// Sample Output 2:

// Invalid date input: 2025-01-02T25:00:00
// Sample Input 3:

// {"dateStr1": "2025-02-01T00:00:00", "dateStr2": "2025-02-02T00:00:00"}
// Sample Output 3:

// 1
// Sample Input 4:

// {"dateStr1": "2023-01-01", "dateStr2": "2024-01-01"}
// Sample Output 4:

// 365
// Sample Input 5:

// {"dateStr1": "2024-01-01", "dateStr2": "2025-01-01"}
// Sample Output 5:

// 366
// Sample Input 6:

// {"dateStr1": "2025-03-01", "dateStr2": "15 марта 2005"}
// Sample Output 6:

// Invalid date input: 15 марта 2005
// Sample Input 7:

// {"dateStr1": "начало времен", "dateStr2": "2025-01-02"}
// Sample Output 7:

// Invalid date input: начало времен

function daysDiff(dateStr1, dateStr2) {
  const stampDate1 = new Date(dateStr1);
  const stampDate2 = new Date(dateStr2);
  let result = 0;
  if (isNaN(stampDate1.getDate())) {
    throw new Error(`Invalid date input: ${dateStr1}`);
  }
  if (isNaN(stampDate2.getDate())) {
    throw new Error(`Invalid date input: ${dateStr2}`);
  }
  result = (stampDate2 - stampDate1) / 86400000;
  return Math.trunc(result);
}
