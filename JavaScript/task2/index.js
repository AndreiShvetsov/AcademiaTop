// 1 задание
let YouYear = prompt ('Сколько тебе лет?');
Number (YouYear);
if (YouYear>=60)
alert ("Тебе "+YouYear+', лет и ты пенсионер');
else if (YouYear>=18)
alert ("Тебе "+YouYear+', лет и ты взрослый');
else if (YouYear>=12)
alert ("Тебе "+YouYear+', лет и ты подросток');
else if (YouYear>=0)
alert ("Тебе "+YouYear+', лет и ты ребенок');
else if (YouYear<=0)
alert ("Тебе "+YouYear+', лет и ты ещё не родился');
// 2 задание
let  KeyNum = prompt ('Введине номер клавиши');
Number (KeyNum);
if (KeyNum==0)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ )');
else if (KeyNum==1)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ !');
else if (KeyNum==2)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ "');
else if (KeyNum==3)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ №');
else if (KeyNum==4)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ ;');
else if (KeyNum==5)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ %');
else if (KeyNum==6)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ :');
else if (KeyNum==7)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ ?');
else if (KeyNum==8)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ *');
else if (KeyNum==9)
alert ("Номер клавиши "+KeyNum+', и ему соотвествует символ (');
// 3 задание
let NumеThree = prompt ('Введите трёхзначное число');
Number (NumеThree);
Nume1 = Math.trunc (NumеThree / 100);
Nume2 = Math.trunc (NumеThree / 10-Nume1*10 );
Nume3 = Math.trunc (NumеThree-(Nume1*100+Nume2*10));
if (Nume1==Nume2)
{alert ("Введенное чиcло "+NumеThree+' и числа 1 и 2 равно');
if (Nume2==Nume3)
alert ("Введенное чиcло "+NumеThree+' и все числа одинаковые');}
else if (Nume2==Nume3)
alert ("Введенное чиcло "+NumеThree+' и числа 2 и 3 равно');
else if (Nume1==Nume3)
alert ("Введенное чиcло "+NumеThree+' и числа 1 и 3 равно');
else alert ('Введенное чиcло '+NumеThree+' и ни одно число не равно');
// 4 задание
let Year = parseFloat(prompt('Введите год'));
if (Year%400===0 || Year%4===0 && Year%100!==0)
alert ('Введён год '+Year+' и это високостный год');
else alert ('Введён год '+Year+' и это не високостный год');
// 5 задание
let NumerFive = parseFloat(prompt('Введите пятизначное число'));
NumerFive1 = Math.trunc (NumerFive / 10000);
NumerFive2 = Math.trunc (NumerFive / 1000-NumerFive1*10 );
NumerFive3 = Math.trunc (NumerFive / 100-(NumerFive1*100+NumerFive2*10) );
NumerFive4 = Math.trunc (NumerFive / 10-(NumerFive1*1000+NumerFive2*100+NumerFive3*10));
NumerFive5 = Math.trunc (NumerFive-(NumerFive1*10000+NumerFive2*1000+NumerFive3*100+NumerFive4*10));
console.log (NumerFive1+''+NumerFive2+''+NumerFive3+''+NumerFive4+''+NumerFive5);
if (NumerFive1===NumerFive5 && NumerFive2===NumerFive4)
alert ('Введено число '+NumerFive+' и оно является палиндромом');
else alert ('Введено число '+NumerFive+' и оно не является палиндромом');
// 6 задание
let Dollar = parseFloat(prompt ('Введи количество долларов'));
let DollarConvert = prompt ('Введи в какую валюуту нужно произвести конвертацию: EUR,UAH или AZN.');
let Convert = 1;
if (DollarConvert==='EUR')
{Convert  = Dollar*0.98;
alert ("При 1$=0.98 EVR всего "+Dollar+' $ будет '+Convert.toFixed(2)+' EVR')}
else if (DollarConvert==='UAH')
{Convert  = Dollar*36.93;
alert ("При 1$=36.93 UAH всего "+Dollar+' $ будет '+Convert.toFixed(2)+' UAH')}
else if (DollarConvert==='AZN')
{Convert  = Dollar*1.70;
alert ("При 1$=1,7 AZN всего "+Dollar+' $ будет '+Convert.toFixed(2)+' AZN')}
else alert ('Вы ввели что-то не то, попробуйте снова');
// 7 задание
let PriceMoney = parseFloat(prompt ('Укажите стоимость покупки в рублях'));
if (PriceMoney>=200 && PriceMoney<=299)
{discount = (PriceMoney*0.03).toFixed(2)
alert ('Ваша покупка составила '+PriceMoney+' руб. Для неё предоставляется скидка 3% и это будет '+discount+'руб.')}
else if (PriceMoney>=300 && PriceMoney<=499)
{discount = (PriceMoney*0.05).toFixed(2)
alert ('Ваша покупка составила '+PriceMoney+' руб. Для неё предоставляется скидка 5% и это будет '+discount+'руб.')}
else if (PriceMoney>=500)
{discount = (PriceMoney*0.07).toFixed(2)
alert ('Ваша покупка составила '+PriceMoney+' руб. Для неё предоставляется скидка 7% и это будет '+discount+'руб.')}
else alert ('Ваша покупка составила '+PriceMoney+' руб. Для неё не предоставляется скидка.');
// 8 задание
let quatrum = parseFloat(prompt ('Введите величину периметра квадрата в см'));
let circle = parseFloat(prompt ('Введите длинну окружности в см'));
let Squatrum = ((quatrum/4)*(quatrum/4)).toFixed(2);
let Scircle = ((circle**2)/(4*Math.PI)).toFixed(2);
if (Squatrum>=Scircle)
alert ('Периметр квадрата '+quatrum+' см. Площадь квадрата '+Squatrum+' см2. Длинна окружности '+circle+' см, а площадь круга '+Scircle+' см2 и круг помещается в квадрат')
else alert ('Периметр квадрата '+quatrum+' см. Площадь квадрата '+Squatrum+' см2. Длинна окружности '+circle+' см, а площадь круга '+Scircle+' см2 и круг не помещается в квадрат');
// 9 задание
let bal = 0;
let question1 = prompt ('Назови столицу Удмуртии (Ижевск, Глазов, Сарапул)');
switch (question1) {
    case 'Сарапул':bal +=0;
    break;
        case 'Глазов':bal +=1;
        break;
            case 'Ижевск':bal +=2;}
console.log ('Ижевск'+bal);
let question2 = parseFloat(prompt ('С какой скоростью бегает самый быстрый человек в мире в км/ч?  (38, 47, 55)'));
switch (question2) {
    case 55:bal +=0;
    break;
        case 38:bal +=1;
        break;
            case 47:bal +=2;}
            console.log ('47км/ч'+bal);
let question3 = parseFloat(prompt ('Сколько зубов у крокодила?  (45, 55, 65)'));
switch (question3) {
    case 45:bal +=0;
    break;
        case 55:bal +=1;
        break;
            case 65:bal +=2;}
            console.log ('не менее 60 зубов'+bal);
alert ('Вы набрали '+bal+' баллов. Правильные ответы: Ижевск, 47км/ч, 65 зубов ');
// 10 задание
let date = new Date (prompt('Введите дату в формате ГГГГ.ММ.ДД'));
console.log (date);
let dateEnd = new Date (date.setDate(date.getDate() + 1));
date.setDate(date.getDate() - 1)
const BaseDate = new Intl.DateTimeFormat("ru", {dateStyle: "short"}).format(date);
const BaseDateEnd = new Intl.DateTimeFormat("ru", {dateStyle: "short"}).format(dateEnd);
alert ('Вы ввели '+BaseDate+' а прибавив один день получаем '+BaseDateEnd);
