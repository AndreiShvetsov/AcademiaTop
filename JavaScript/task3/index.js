// 1 задание
// let NumberMin = parseFloat(prompt("Введите минимальную цифру диапазона."));
// let NumberMax = parseFloat(prompt("Введите максимальную цифру диапазона."));
// let step = NumberMax;
// let sum = 0;
// for ( NumberMax; step>= NumberMin; step -= 1) {
//   sum += step;
//   console.log(sum);
// }
// alert(
//   "Вы ввели минимальную цифру диапазона " +
//     NumberMin +
//     " максимальную цифру диапазона " +
//     NumberMax +
//     ". Сумма всех чисел диапазона равняется " +
//      +
//     sum
// );
// 2 задание
// let Number1 = parseFloat(prompt("Введите первое число"));
// let Number2 = parseFloat(prompt("Введите второе число"));
// let NewStep = 1;
// for (let step =1; Number1 >= step && Number2 >= step; step +=1){
//     if (Number1%step===0 && Number2%step===0){
//     NewStep = step
//     console.log (NewStep)}
//     else continue;
// }
// alert ('Введены цифры '+Number1+' и '+Number2+'. Их наибольший общий делитель '+NewStep);
// 3 задание
// let Number = parseFloat(prompt("Введите число"));
// for (let i=1; Number >= i; i +=1){
//     if (Number%i ===0)
//     console.log (i)
//     else continue;
// }
// 4 задание
// let NumberQuantity = parseFloat(prompt("Введите число"));
// let Quantity = 0
// for (let ten =1; NumberQuantity >= ten; ten *=10){
//     Quantity +=1;
//     console.log (ten);
// }
// alert ('Вы ввели '+NumberQuantity+' и это число состоит из '+Quantity+' цифр')
// 5 задание
// let plus = 0;
// let minus = 0;
// let zero =0;
// let del2 = 0;
// let Ndel2 = 0;
// for (let step2 = 1; step2 <= 10; step2 +=1){
//     let NumberStatis = parseFloat(prompt("Введите число"))
// if (NumberStatis >0) plus +=1;
// if (NumberStatis <0) minus +=1;
// if (NumberStatis ===0) zero +=1;
// if (NumberStatis%2 ===0) del2 +=1;
// if (NumberStatis%2 !==0) Ndel2 +=1;
// }
// alert ('Вы ввели 10 чисел и из них '+plus+' положительные, '+minus+' отрицательные, '+zero+' равны нулю, '+del2+' чётные и '+Ndel2+' не чётные')
// 6 задание
// let cont = true;
// for (let iN = 1; iN > 0 && cont===true; iN +=1){
// let Num1 = parseFloat(prompt("Введите первое число"));
// let Num2 = parseFloat(prompt("Введите второе число"));
// let sign = (prompt("Введите знак"));
// let result = Num1+sign+Num2;
// console.log (result)
// if (sign==='+') result = Num1+Num2;
// if (sign==='-') result = Num1-Num2;
// if (sign==='*') result = Num1*Num2;
// if (sign==='/') result = Num1/Num2;
// console.log (result)
// cont = confirm ('Вы ввели '+Num1+sign+Num2+'='+result+' Продолжим расчёты?')
// }
// 7 задание
// let NumShift = prompt("Введите число");
// let Shift = parseFloat(prompt("Введите на сколько цифер свдинуть число"));
// let NumShift2 = NumShift;
// alert(
//   "Вы ввели число " +
//     NumShift +
//     " и нужно сдвинуть его на " +
//     Shift +
//     " цифры. Получается " +
//     NumShift.slice(Shift) +
//     "" +
//     NumShift2.slice(0, Shift)
// );
// 8 задание
// let conti = true;
// let date = new Date();
// let date2 = new Date();
// let DayWeek = NaN;
// console.log(date);
// for (let iNew = 1; iNew > 0 && conti === true; iNew += 1) {
//   let dateEnd = new Date(date.setDate(date.getDate() + 1));
//   // date.setDate(date.getDate() - 1);
//   const BaseDate = new Intl.DateTimeFormat("ru", { dateStyle: "short" }).format(
//     date2
//   );
//   const BaseDateEnd = new Intl.DateTimeFormat("ru", {
//     dateStyle: "short",
//   }).format(dateEnd);
//   if (date.getDay() == 1) DayWeek = "Понедельник";
//   if (date.getDay() == 2) DayWeek = "Вторник";
//   if (date.getDay() == 3) DayWeek = "Среда";
//   if (date.getDay() == 4) DayWeek = "Четверг";
//   if (date.getDay() == 5) DayWeek = "Пятница";
//   if (date.getDay() == 6) DayWeek = "Суббота";
//   if (date.getDay() == 0) DayWeek = "Воскресенье";
//   conti = confirm(
//     "Начальная дата " +
//       BaseDate +
//       ". Дата +" +
//       iNew +
//       " дней равна " +
//       BaseDateEnd +
//       " " +
//       DayWeek
//   );
// }
// 9 задание
// let resu = 0;
// for (let vertical = 1; vertical<11; vertical +=1){
//     let resull = [];
//     for (let gorizont = 2; gorizont<=10; gorizont +=1){
//         resu= vertical*gorizont;
//         resull.push(resu);     
//     }
//     console.log (resull); 
// }
// 10 задание
// let Vari = NaN;
// alert ('Загадайте число от 0 до 100');
// for (let dist = 50; dist === 50; Vari = promt('Ваше число больше ">", меньше "<" или равно "="'+dist)){
//     if (Vari=== ">"){}
// }
