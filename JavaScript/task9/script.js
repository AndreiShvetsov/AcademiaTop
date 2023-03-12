// Задание 1
// Такое ощущение, что событие выбрал не правильное и дальше мысль не идёт, по времени явно не укладываюсь
let number = 0;
const qubstart = (event) => {
  if (number <= 75) {
    number += event.pageX / 100;
    document.querySelector("#eventQub").style.right = number + "px";
  }
};

// Задание 2
let pichersNum = [1, 2, 3, 4, 5];
let checkNum = 1;

const lefti = (event) => {
  if (checkNum > 1) {
    document.querySelector("#rightStrel").style.backgroundColor = "yellowgreen";
    checkNum -= 1;
    document.querySelector("#pichers").src = checkNum + ".jpg";
  } else {
    document.querySelector("#leftStrel").style.backgroundColor = "red";
    checkNum = 1;
  }
};
let righti = (event) => {
  if (checkNum < pichersNum.length) {
    document.querySelector("#leftStrel").style.backgroundColor = "yellowgreen";
    checkNum += 1;
    document.querySelector("#pichers").src = checkNum + ".jpg";
  } else {
    document.querySelector("#rightStrel").style.backgroundColor = "red";
    checkNum = 5;
  }
};

// Задание 3
// В начале на все дивы, которые должны быть скрыты прицепляется стиль, чтобы не отображался на экране. Это позволяет всегда их скрывать в случае если была кликнута какая-то строчка.
// Проблема, что при первом запуске функции сразу нужный див не откроется, только при повторном нажатии.
let offStels = (event) => {
  document.querySelector(
    "body > div:nth-child(4) > div:nth-child(2) > div"
  ).style.display = "none";
  document.querySelector(
    "body > div:nth-child(4) > div:nth-child(3) > div"
  ).style.display = "none";
  document.querySelector(
    "body > div:nth-child(4) > div:nth-child(4) > div"
  ).style.display = "none";
  document.querySelector(
    "body > div:nth-child(4) > div:nth-child(5) > div"
  ).style.display = "none";

  // Вешается слушатель события на конкретный див (в данном случае это заголовок) по которому в случае события на скртый див (данного заголовка) меняется стиль для отображения
  document
    .querySelector("body > div:nth-child(4) > div:nth-child(2)")
    .addEventListener(
      "click",
      (event) =>
        (document.querySelector(
          "body > div:nth-child(4) > div:nth-child(2) > div"
        ).style.display = "block")
    );
  document
    .querySelector("body > div:nth-child(4) > div:nth-child(3)")
    .addEventListener(
      "click",
      (event) =>
        (document.querySelector(
          "body > div:nth-child(4) > div:nth-child(3) > div"
        ).style.display = "block")
    );
  document
    .querySelector("body > div:nth-child(4) > div:nth-child(4)")
    .addEventListener(
      "click",
      (event) =>
        (document.querySelector(
          "body > div:nth-child(4) > div:nth-child(4) > div"
        ).style.display = "block")
    );
  document
    .querySelector("body > div:nth-child(4) > div:nth-child(5)")
    .addEventListener(
      "click",
      (event) =>
        (document.querySelector(
          "body > div:nth-child(4) > div:nth-child(5) > div"
        ).style.display = "block")
    );
};

// Задание 4
// Массив новостей
let news = [
  "1. «Ижевск превращается в Венецию», — пишут ижевчане в социальных сетях. Из-за потепления талые воды на дорогах города собираются в бурные потоки, в которых не едут, а плывут автомобили. «Ижевск превращается в Венецию», — пишут ижевчане в социальных сетях. Из-за потепления талые воды на дорогах города собираются в бурные потоки, в которых не едут, а плывут автомобили. «Ижевск превращается в Венецию», — пишут ижевчане в социальных сетях. Из-за потепления талые воды на дорогах города собираются в бурные потоки, в которых не едут, а плывут автомобили.",
  "2. Глава Удмуртии подписал указ о запрете использования в регионе беспилотников. Глава Удмуртии подписал указ о запрете использования в регионе беспилотников. Глава Удмуртии подписал указ о запрете использования в регионе беспилотников. Глава Удмуртии подписал указ о запрете использования в регионе беспилотников",
  "3. Столица Удмуртии вошла в число городов-антилидеров по количеству обращений по поводу плохой уборки улиц и дворов. Столица Удмуртии вошла в число городов-антилидеров по количеству обращений по поводу плохой уборки улиц и дворов. Столица Удмуртии вошла в число городов-антилидеров по количеству обращений по поводу плохой уборки улиц и дворов. Столица Удмуртии вошла в число городов-антилидеров по количеству обращений по поводу плохой уборки улиц и дворов.",
];
// Добавление новости
let numberNews = 0;
let starttask4 = (event) => {
  if (numberNews == news.length) {
    return;
  } else {
    let divNews = document.createElement("div");

    divNews.innerHTML = `<p> ${news[numberNews]}</p>`;

    let thisDiv = document.getElementById("#plusNews");
    document.body.insertBefore(divNews, thisDiv);
    numberNews += 1;
  }
};
// Запуск добавление новости по событию скролла
// Новости выскакивают раньше, чем можно заменить работу функции.
window.addEventListener("scroll", () => {
  if (scrollY >= 240 || scroll()) {
    starttask4();
  }
});
