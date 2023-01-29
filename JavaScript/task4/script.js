// Задание 1
function task1() {
  let manufactur = document.querySelector("#manufactur").value;
  let model = document.querySelector("#model").value;
  let year = document.querySelector("#year").value;
  let speed = document.querySelector("#speed").value;
  let car = {
    manufactur: { manufactur },
    model: { model },
    year: { year },
    speed: { speed },
  };
  const travelTime = (distant, speed) => {
    speed = document.querySelector("#speed").value;
    distant = document.querySelector("#distant").value;
    let result = distant / speed;
    if (result > 4) {
      let timePlus = result / 4;
      result += timePlus;
    }
    return (document.getElementById("task1_result").innerHTML = `<p> 
      Автомобиль ${manufactur} ${model} ${year} года выпуска <br>
      Вы задали расстояние ${distant} км <br>
          Автомобиль едущий со скоростью ${speed} км/ч <br>
          Проедет данное расстояние за ${result} ч. <br>
         С учётом отдыха по 1 часу через каждые 4 часа.</p>`);
  };
  travelTime(car.distant, car.speed);
}
// Задание 2
function task2() {
  // let numerator1 = document.querySelector("#fra1num1").velue;
  // let numerator2 = document.querySelector("#fra2num2").velue;
  // let denumerator1 = document.querySelector("#fra1denum1").velue;
  // let denumerator2 = document.querySelector("#fra2denum2").velue;
  // let fraction1 = {
  //   numerator:  {numerator1},
  //   denumerator:  {denumerator1},
  // };
  // let fraction2 = {
  //   numerator: {numerator2},
  //   denumerator: {denumerator2},
  // };
  let fraction1 = {
    numerator: 4,
    denumerator: 8,
  };
  let fraction2 = {
    numerator: 2,
    denumerator: 6,
  };
  // Прибавление дробей
  console.log(fraction1, fraction2);
  let addition = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    if (a.denumerator !== b.denumerator) {
      fractionresult.denumerator = a.denumerator * b.denumerator;
      fractionresult.numerator = a.numerator + b.numerator;
      return (document.getElementById(
        "task2_result1"
      ).innerHTML = `<p>Сумма дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`);
    }
    let resultadd = (fractionresult.numerator = a.numerator + b.numerator);
    return (document.getElementById(
      "task2_result1"
    ).innerHTML = `<p>Сумма дробей <br> ${resultadd} / ${a.denumerator}</p>`);
  };
  addition(fraction1, fraction2);

  // Вычитание дробей
  const subtraction = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    if (a.denumerator !== b.denumerator) {
      fractionresult.denumerator = a.denumerator * b.denumerator;
      fractionresult.numerator = a.numerator - b.numerator;
      return (document.getElementById(
        "task2_result2"
      ).innerHTML = `<p>Разность дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`);
    }
    let resultsub = (fractionresult.numerator = a.numerator - b.numerator);
    return (document.getElementById(
      "task2_result2"
    ).innerHTML = `<p>Разность дробей <br> ${resultsub} / ${a.denumerator}</p>`);
  };

  subtraction(fraction1, fraction2);
  // Умножение дробей
  const multiplication = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    fractionresult.denumerator = a.denumerator * b.denumerator;
    fractionresult.numerator = a.numerator * b.numerator;
    return (document.getElementById(
      "task2_result3"
    ).innerHTML = `<p>Умножение дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`);
  };

  multiplication(fraction1, fraction2);
  // Деление дробей
  const division = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    fractionresult.denumerator = a.denumerator * b.numerator;
    fractionresult.numerator = a.numerator * b.denumerator;
    return (document.getElementById(
      "task2_result4"
    ).innerHTML = `<p>Деление дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`);
  };
  division(fraction1, fraction2);
  // Сокращение дроби
  const reduction = (fraction, num) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    const result = fraction;
    let resu = 1;
    const NOD = (numerator, denumerator) => {
      if (!denumerator) {
        return (resu = numerator);
      }
      return NOD(denumerator, numerator % denumerator);
    };
    NOD(result.numerator, result.denumerator);
    fractionresult.numerator = result.numerator / resu;
    fractionresult.denumerator = result.denumerator / resu;
    return (document.getElementById(
      "task2_result" + num
    ).innerHTML = `<p>Сокращение дроби <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`);
  };
  reduction(fraction1, 5);
  reduction(fraction2, 6);
}

// 3 задание. Объект время
function task3() {
  const time = {
    hour: document.querySelector("#hours").value,
    minutes: document.querySelector("#minuts").value,
    seconds: document.querySelector("#seconds").value,
  };
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  let str = hours + ":" + minutes + ":" + seconds;

  document.getElementById(
    "task3_result1"
  ).innerHTML = `<p>Время компьютера ${str}</p>`;

  // Вывод на экран
  const timeSee = (time) => {
    return (document.getElementById(
      "task3_result2"
    ).innerHTML = `<p>Вы ввели часы ${time.hour} минуты ${time.minutes} секунды ${time.seconds}</p>`);
  };
  timeSee(time);
  // Прибавление времени
  let addTime = (time1, time2) => {
    let recTime = new Date(
      2022,
      0,
      12,
      time1.hour + time2.hour,
      time1.minutes + time2.minutes,
      time1.seconds + time2.seconds
    );
    let timeres = recTime.hours + ":" + recTime.minutes + ":" + recTime.seconds;
    return (document.getElementById(
      "task3_result3"
    ).innerHTML = `<p>Результат прибавления времени ${timeres}</p>`);
  };
  addTime(time, date);

  // Прибавление секунд
  const addSec = (time, sec) => {
    let recTime = new Date(
      2022,
      0,
      12,
      time.hour,
      time.minutes,
      time.seconds + sec
    );
    console.log(
      "Прибавляем " +
        sec +
        " секунд к установленному времени и получаем " +
        recTime.getHours() +
        ":" +
        recTime.getMinutes() +
        ":" +
        recTime.getSeconds()
    );
  };
  addSec(time, 75);
  // Прибавление минуты
  const addMin = (time, min) => {
    let recTime = new Date(
      2022,
      0,
      12,
      time.hour,
      time.minutes + min,
      time.seconds
    );
    console.log(
      "Прибавляем " +
        min +
        " минуту к установленному времени и получаем " +
        recTime.getHours() +
        ":" +
        recTime.getMinutes() +
        ":" +
        recTime.getSeconds()
    );
  };
  addMin(time, 31);
  // Прибавление часов
  const addHour = (time, hour) => {
    let recTime = new Date(
      2022,
      0,
      12,
      time.hour + hour,
      time.minutes,
      time.seconds
    );
    console.log(
      "Прибавляем " +
        hour +
        " часов к установленному времени и получаем " +
        recTime.getHours() +
        ":" +
        recTime.getMinutes() +
        ":" +
        recTime.getSeconds()
    );
  };
  addHour(time, 6);
}
