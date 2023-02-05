// 1 задание (а - число, b - степень) возведение в степень
const raise = (a, b, c = 0) => {
  if (b === 1) {
    return console.log("Возведённое число в степень = " + a);
  }
  if (c === 0) {
    c = a;
  }
  a = a * c;
  raise(a, b - 1, c);
};
raise(2, 4);
// 2 задание (а - число, b - второе число) общий делитель
const NOD = (a, b) => {
  if (!b) {
    return console.log("Общий делитель = " + a);
  }
  return NOD(b, a % b);
};
NOD(6, 33);
// 3 задание (а - число) максимальное чсло
const maxNum = (a) => {
  const masNum = Array.from(String(a), Number);
  let result = 0;
  for (let i of masNum) {
    if (i > result) {
      result = i;
    }
  }
  console.log("Максимальное число в числе " + a + " = " + result);
};
maxNum(1258213);
// 4 задание (a - число) Проверка на простоту числа
const Num = (a) => {
  let d = 0;
  for (let i = 1; i < 11; i++) {
    if (a % i === 0) {
      d += 1;
    }
  }
  if (d <= 2) {
    console.log(a + " число простое");
  } else console.log(a + " число составное");
};
Num(244);
// 5 задание (a - число) Вывод множителей
const multip = (a, i = 2) => {
  if (a / i === 1) {
    return console.log("Множитель " + i);
  }
  if (a % i === 0) {
    console.log("Множитель " + i);
    a /= i;
  } else {
    i += 1;
  }
  return multip(a, i);
};
multip(18);
// 6 задание (a - число) Вывод числа Фиббоначи по введённому порядковому номеру
const fibo = (a, i = 0, b = 1) => {
  if (a === 1) {
    return console.log("Число Фиббоначи = " + b);
  }
  b += i;
  return fibo(a - 1, b - i, b);
};
fibo(10);
