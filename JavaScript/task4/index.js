// // 1 задание. Объект автомобиль
const car ={
    manufacturer: 'lada',
    model: 'vesta',
    release: 2019,
    meddlSpeed: 80
}
// Функция вывода информации об автомобиле
const infocar = (car)=> {
        console.log("Сведения об автомобиле");
        console.log("Производитель: "+car.manufacturer);
        console.log("Модель: "+car.model);
        console.log("Произведена: "+car.release+' г.');
        console.log("Среднаяя скорость: "+car.meddlSpeed+' км/ч');
       }

infocar(car);

// Функция определения затраты времени на преодоление заданного расстояния
const travelTime = (distance, speed) => {
let result = distance/speed;
if (result >4) {let timePlus = Math.floor(result/4); result+=timePlus};
console.log ('Вы задали расстояние '+distance+' км . И автомобиль едущий со скоростью '+speed+' км/ч проедет данное расстояние за '+Math.round(result)+' ч. С учётом отдаха по 1 часу через каждые 4 часа.')
}
travelTime(320,car.meddlSpeed);

// 2 задание. Объект дробь
const fraction ={numerator:3, denominator:4};
const fraction2 ={numerator:2, denominator:7};
// Прибавление дробей
let addition = (a,b)=>{
if (a.denominator !== b.denominator){a.denominator*=b.denominator;
a.numerator+=b.numerator; return console.log(fraction) }
return console.log ((a.numerator+=b.numerator)+'/'+ a.denominator);
}

addition (fraction, fraction2);
// Вычитание дробей
const subtraction=(a,b)=>{
    if (a.denominator !== b.denominator){a.denominator*=b.denominator;
        a.numerator-=b.numerator; return console.log(fraction) }
        return console.log ((a.numerator-=b.numerator)+'/'+ a.denominator);
}

subtraction(fraction2, fraction);