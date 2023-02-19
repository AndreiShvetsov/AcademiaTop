// Задание 1 Класс - окружность
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get Diametr() {
    let diametr = this.radius * 2;
    return diametr;
  }
  get circleLength() {
    let length = 2 * Math.PI * this.radius;
    return Math.round(length);
  }
  get circleSquare() {
    let square = Math.PI * Math.pow(this.radius, 2);
    return Math.round(square);
  }
  get Radius() {
    return this.radius;
  }
  setSaveRadius(radius) {
    this.radius = radius;
  }
}

function task1() {
  let task1 = new Circle();
  let radius = document.querySelector("#radius").value;
  task1.setSaveRadius(radius);
  let texts = `<p>Радиус окружности = ${task1.Radius}</p>`; // Показываем радиус
  texts += `<p> Диаметр окружности = ${task1.Diametr}</p>`; // Показываем диаметр
  texts += `<p> Длинна окружности = ${task1.circleLength}</p>`; // Показываем длинну
  texts += `<p> Площадь окружности = ${task1.circleSquare}</p>`; // Показываем площадь
  document.getElementById("result").innerHTML = texts;
}
