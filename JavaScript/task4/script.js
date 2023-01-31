// Задание 1
function task1() {
  let manufactur = document.querySelector("#manufactur").value;
  let model = document.querySelector("#model").value;
  let year = document.querySelector("#year").value;
  let speed = document.querySelector("#speed").value;
  let car = {
    manufactur: manufactur,
    model: model,
    year: year,
    speed: speed,
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
  let fractionadd = {
    numerator: 0,
    denumerator: 0,
    id: "task2_result5",
  };
  let fractionsub = {
    numerator: 0,
    denumerator: 0,
    id: "task2_result6",
  };
  let fractionmult = {
    numerator: 0,
    denumerator: 0,
    id: "task2_result7",
  };
  let fractiondiv = {
    numerator: 0,
    denumerator: 0,
    id: "task2_result8",
  };
  let numerator1 = document.querySelector("#fra1num1").value;
  let numerator2 = document.querySelector("#fra2num2").value;
  let denumerator1 = document.querySelector("#fra1denum1").value;
  let denumerator2 = document.querySelector("#fra2denum2").value;
  let fraction1 = {
    numerator: numerator1,
    denumerator: denumerator1,
  };
  let fraction2 = {
    numerator: numerator2,
    denumerator: denumerator2,
  };
  // Сокращение дроби
  const reduction = (fraction) => {
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
      fraction.id
    ).innerHTML = `<p>Сокращение дроби <br> = ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`);
  };
  // Прибавление дробей
  let addition = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    if (a.denumerator !== b.denumerator) {
      fractionresult.denumerator = a.denumerator * b.denumerator;
      fractionresult.numerator =
        a.numerator * b.denumerator + b.numerator * a.denumerator;
      document.getElementById(
        "task2_result1"
      ).innerHTML = `<p>Сумма дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`;
      return (
        (fractionadd.numerator = fractionresult.numerator),
        (fractionadd.denumerator = fractionresult.denumerator)
      );
    }
    let resultadd = (fractionresult.numerator = a.numerator + b.numerator);
    document.getElementById(
      "task2_result1"
    ).innerHTML = `<p>Сумма дробей <br> ${resultadd} / ${a.denumerator}</p>`;
    return (
      (fractionadd.numerator = resultadd),
      (fractionadd.denumerator = a.denumerator)
    );
  };
  addition(fraction1, fraction2);
  reduction(fractionadd);
  // Вычитание дробей
  const subtraction = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    if (a.denumerator !== b.denumerator) {
      fractionresult.denumerator = a.denumerator * b.denumerator;
      fractionresult.numerator =
        a.numerator * b.denumerator - b.numerator * a.denumerator;
      document.getElementById(
        "task2_result2"
      ).innerHTML = `<p>Разность дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`;
      return (
        (fractionsub.numerator = fractionresult.numerator),
        (fractionsub.denumerator = fractionresult.denumerator)
      );
    }
    let resultsub = (fractionresult.numerator = a.numerator - b.numerator);
    document.getElementById(
      "task2_result2"
    ).innerHTML = `<p>Разность дробей <br> ${resultsub} / ${a.denumerator}</p>`;
    return (
      (fractionsub.numerator = resultsub),
      (fractionsub.denumerator = a.denumerator)
    );
  };

  subtraction(fraction1, fraction2);
  reduction(fractionsub);
  // Умножение дробей
  const multiplication = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    fractionresult.denumerator = a.denumerator * b.denumerator;
    fractionresult.numerator = a.numerator * b.numerator;
    document.getElementById(
      "task2_result3"
    ).innerHTML = `<p>Умножение дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`;
    return (
      (fractionmult.numerator = fractionresult.numerator),
      (fractionmult.denumerator = fractionresult.denumerator)
    );
  };

  multiplication(fraction1, fraction2);
  reduction(fractionmult);
  // Деление дробей
  const division = (a, b) => {
    let fractionresult = {
      numerator: 0,
      denumerator: 0,
    };
    fractionresult.denumerator = a.denumerator * b.numerator;
    fractionresult.numerator = a.numerator * b.denumerator;
    document.getElementById(
      "task2_result4"
    ).innerHTML = `<p>Деление дробей <br> ${fractionresult.numerator} / ${fractionresult.denumerator}</p>`;
    return (
      (fractiondiv.numerator = fractionresult.numerator),
      (fractiondiv.denumerator = fractionresult.denumerator)
    );
  };
  division(fraction1, fraction2);
  reduction(fractiondiv);
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
    ).innerHTML = `<p>Вы ввели ${time.hour}:${time.minutes}:${time.seconds}</p>`);
  };
  timeSee(time);
  // Прибавление времени
  let resultSum = {
    date: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  function timeaddsec(seconds1, seconds2) {
    resultSum.seconds += parseInt(seconds1) + parseInt(seconds2);
    for (resultSum.seconds; resultSum.seconds >= 60; resultSum.seconds -= 60) {
      resultSum.minutes += 1;
    }
  }
  function timeaddmin(minutes1, minutes2) {
    resultSum.minutes += parseInt(minutes1) + parseInt(minutes2);
    for (resultSum.minutes; resultSum.minutes >= 60; resultSum.minutes -= 60) {
      resultSum.hours += 1;
    }
  }
  function timeaddhour(hours1, hours2) {
    resultSum.hours += parseInt(hours1) + parseInt(hours2);
    for (resultSum.hours; resultSum.hours >= 24; resultSum.hours -= 24) {
      resultSum.date += 1;
    }
  }
  timeaddsec(time.seconds, date.getSeconds());
  timeaddmin(time.minutes, date.getMinutes());
  timeaddhour(time.hour, date.getHours());

  if (resultSum.hours < 10) resultSum.hours = "0" + resultSum.hours;
  if (resultSum.minutes < 10) resultSum.minutes = "0" + resultSum.minutes;
  if (resultSum.seconds < 10) resultSum.seconds = "0" + resultSum.seconds;

  return (document.getElementById(
    "task3_result3"
  ).innerHTML = `<p>Сумма времени равна  ${resultSum.date} дней ${resultSum.hours}:${resultSum.minutes}:${resultSum.seconds}</p>`);
}
