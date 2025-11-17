/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let a = prompt("Один из последних просмотренных фильмов?");
// let b = +prompt("На сколько оцените его?");
// let c = prompt("Один из последних просмотренных фильмов?");
// let d = +prompt("На сколько оцените его?");

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?");
  const b = +prompt("На сколько оцените его?");
  if (a != "" && a != null && a.length < 50 && b != "" && b != null) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    i--;
    console.log("error");
  }
}

// Способ №2
// let count = 0;
// do {
//   let a = prompt("Один из последних просмотренных фильмов?");
//   let b = +prompt("На сколько оцените его?");
//   if (
//     a === "" ||
//     a === null ||
//     a.length > 50 ||
//     b === "" ||
//     b === null ||
//     b.length > 50
//   ) {
//     a = prompt("Один из последних просмотренных фильмов?");
//     b = +prompt("На сколько оцените его?");
//   } else {
//     personalMovieDB.movies[a] = b;
//   }
//   count++;
// } while (count < 2);

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

// personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
