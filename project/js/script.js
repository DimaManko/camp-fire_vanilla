/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const promoGenre = document.querySelector(".promo__genre");
  const adv = document.querySelectorAll(".promo__adv img");
  const promoBg = document.querySelector(".promo__bg");
  const interactiveList = document.querySelector(".promo__interactive-list");
  const btn = document.querySelector("button");
  const inp = document.querySelector(".adding__input");

  const deleteAdv = (adv) => {
    adv.forEach((item) => {
      item.remove();
    });
  };

  const changes = () => {
    promoBg.style.backgroundImage = "url('./img/bg.jpg')";
    promoGenre.textContent = "драма";
  };

  function sortArr(arr) {
    arr.sort();
  }

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    const checkbox = document.querySelector('[type="checkbox"]');

    let newFilm = inp.value;
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = newFilm.substring(0, 22) + "...";
      }
      if (checkbox.checked) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      addNewFilm(movieDB.movies, interactiveList);
    }
  });

  function addNewFilm(films, list) {
    interactiveList.innerHTML = "";
    sortArr(movieDB.movies);
    films.forEach((film, index) => {
      const li = document.createElement("li");
      li.classList.add("promo__interactive-item");
      li.textContent = `${index + 1}. ${film}`;
      list.append(li);
      const div = document.createElement("div");
      div.classList.add("delete");
      li.append(div);
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        addNewFilm(films, list);
      });
    });
  }

  addNewFilm(movieDB.movies, interactiveList);
  deleteAdv(adv);
  changes();
});
