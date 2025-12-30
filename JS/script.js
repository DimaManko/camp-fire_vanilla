// JSON/try/catch
function sumDate(data) {
  try {
    const arr = JSON.parse(data.toString());
    let result = 0;
    let count = 0;
    for (const element of arr) {
      if ("age" in element) {
        result += element.age;
        count++;
      }
    }
    if (count === 0) {
      console.log("Ни один объект не содержит свойства age");
    } else {
      console.log(result / count);
    }
  } catch {
    console.log(`Невалидный JSON`);
  }
}
