// 1 задание
var YouName = prompt ('Как тебя зовут?');
alert ("Привет "+YouName+' !');
// 2 задание
var YouYear = prompt ('Напиши год своего рождения.');
const Year = 2022;
Number (YouYear);
remained = Year-YouYear;
alert ("Тебе "+remained+' лет.');
// 3 задание
var lengthSquare = prompt ('Напиши длину стороны квадрата');
Number (lengthSquare);
perimeter = lengthSquare*4;
alert ("Длина стороны квадарата "+lengthSquare+' , а периметр квадрата равен '+perimeter);
// 4 задание
var CircleRadius = prompt ('Напиши радиус окружности');
Number (CircleRadius);
square  = Math.PI*CircleRadius*CircleRadius;
alert ("Радиус окружности  "+CircleRadius+' , а площадь окружности равна '+square.toFixed(2));
// 5 задание
var Distance = prompt ('Напиши дистанцию между городам в км');
Number (Distance);
var Time = prompt ('Напиши вермя в часах за сколько хочешь добраться до города');
Number (Time);
Speed  = Distance/Time;
alert ("Расстояние между городами  "+Distance+' км, время в пути '+Time+' ч , а скорость '+Speed.toFixed(2)+' км/ч');
// 6 задание
var Dollar = prompt ('Введи количество долларов');
Number (Dollar);
Convert  = Dollar*0.98;
alert ("При 1$=0.98EVR всего "+Dollar+' $ будет '+Convert.toFixed(2)+' EVR');
// 7 задание
var Volume = prompt ('Напиши объём флешки в Гб');
Number (Volume);
const FailVolume = 0.820;
value = Volume/FailVolume;
alert ("При объёме флешки "+Volume+' Гб в неё поместяться '+value.toFixed(0)+' файлов размером 820Mb');
// 8 задание
var Money = prompt ('Сколько у тебя денег в рублях');
Number (Money);
var Price = prompt ('А сколько стоит шоколоадка в рублях');
Number (Price);
valueShocolat = Money/Price;
remains = Money-Math.floor(valueShocolat)*Price;
alert ("У тебя "+Money+' руб., шоколадка стоит '+Price+' руб. Можно купить '+Math.floor(valueShocolat)+' шоколадок и ещё останется '+remains+' руб.');
// 9 задание
var NumberNNN = prompt ('Введи трёхзначное число');
const str = NumberNNN;
const reverse = str.split('').reverse().join('');
alert ("Было введено "+NumberNNN+' , а наоборот это будет '+reverse+'в интернете не нашёл решения с % и не понимаю зачем остаток деления для реверса');
// 10 задание
var NumberWhole = prompt ('Введи целое число');
Number (NumberWhole);
var isEven = (NumberWhole%2 == 0);
alert ("У тебя "+NumberWhole+' и это число четное='+isEven);