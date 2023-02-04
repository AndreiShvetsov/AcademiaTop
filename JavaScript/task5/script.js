//___________________________________________________________1 задание. Список покупок
const orderList = [
  {
    name: "apple",
    quantity: 55,
    isBuy: false,
    price: 10,
  },
  {
    name: "juice",
    quantity: 10,
    isBuy: false,
    price: 15,
  },
  {
    name: "banana",
    quantity: 5,
    isBuy: true,
    price: 20,
  },
];
function task1() {
  // Вывод списка продуктов на экран без сортировки
  let nom = orderList.length;
  let texts = [`Объекты без сортировки`];
  function list(n) {
    return (texts += `<p> Продукт ${orderList[n].name} <br> В количестве ${orderList[n].quantity} шт.<br> Куплен? ${orderList[n].isBuy} <br> Цена за 1 шт. ${orderList[n].price}</p>`);
  }
  for (i = 0; i < nom; i++) {
    list(i);
  }
  document.getElementById("NotSort").innerHTML = texts;

  // Вывод списка продуктов на экран с сортировкой
  let textSort = [`Объекты сортированы по статусу "Куплен"`];
  function listSort() {
    for (let food of orderList) {
      if (food.isBuy == true) {
        textSort += `<p> Продукт ${food.name} <br> В количестве ${food.quantity} шт.<br> Куплен? ${food.isBuy} <br> Цена за 1 шт. ${food.price}</p>`;
      }
    }
    for (let food of orderList) {
      if (food.isBuy == false) {
        textSort += `<p> Продукт ${food.name} <br> В количестве ${food.quantity} шт.<br> Куплен? ${food.isBuy} <br> Цена за 1 шт. ${food.price}</p>`;
      }
    }
  }
  listSort();
  document.getElementById("Sort").innerHTML = textSort;
}

// Функция добавления покупки
function task2() {
  let names = document.querySelector("#name").value;
  let quantitys = document.querySelector("#quantity").value;
  let addToOrder = (arr, el) => {
    for (let product of arr) {
      if (product.name === el.name) {
        let num1 = parseInt(product.quantity);
        let num2 = parseInt(el.quantity);
        return (product.quantity = num1 + num2);
      }
    }
    arr.push(el);
  };
  addToOrder(orderList, {
    name: names,
    quantity: quantitys,
    isBuy: false,
    price: 10,
  });
  task1();
}
// Функция принимает название продукта и отмечает его как купленный
function task3() {
  let namesisBuy = document.querySelector("#nameisBuy").value;
  const orderProduct = (arr, name) => {
    for (const product of arr) {
      if (product.name === name) {
        return (product.isBuy = true);
      }
    }
  };
  orderProduct(orderList, namesisBuy);
  task1();
}

//__________________________________________ 2 задание. Чек в магазине

// Распечатка чека
function task4() {
  document.getElementById("cheque").innerHTML = `<p>Чек</p>`;
  let summ = 0; // Для подсчёта общей суммы расхода
  let maxCheque = 0; // Для самой дорогой стоимости покупки
  let maxName = []; // Для самой дорогой покупки
  let mediumCheque = 0; // Для подсчёта среднего чека
  for (let food of orderList) {
    if (food.isBuy == true) {
      let resultBuy = food.price * food.quantity;
      if (resultBuy > maxCheque) {
        maxCheque = resultBuy;
        maxName = food.name;
      } // Для самой дорогой покупки
      summ += resultBuy; // Для подсчёта общей суммы расхода
      mediumCheque += 1;
      document.getElementById("cheque").innerHTML += `
      <p> Вы купили <br> ${food.name} <br> в количестве ${food.quantity} <br> по цене ${food.price} за 1 шт. <br> Расход ${resultBuy}</p>`;
    }
  }
  document.getElementById(
    "cheque"
  ).innerHTML += `<p>ИТОГО ${summ} к оплате</p>`; // Вывод общей суммы расхода
  document.getElementById(
    "cheque"
  ).innerHTML += `<p>Самая дорогая покупка на ${maxCheque} за ${maxName} </p>`; // Вывод самой дорогой покупки
  document.getElementById("cheque").innerHTML += `<p>Средняя стоимость чека ${
    summ / mediumCheque
  }</p>`; // Вывод самой дорогой покупки
}
//__________________________________________ 3 задание. Стили CSS
const style = {
  color: ["green", "red", "blue"],
  size: ["30px", "40px", "50px"],
  aligment: ["center", "left", "right"],
  underline: ["underline", "underline dotted", "none"],
};

const libstyle = (style, text) => {
  for (let i = 0; i < style.color.length; ++i) {
    let col = style.color[i];
    let siz = style.size[i];
    let ali = style.aligment[i];
    let und = style.underline[i];
    document.getElementById(
      "resultStyle"
    ).innerHTML += `<p style="color: ${col}; font-size: ${siz}; margin: auto; display: flex; width: 400px; justify-content: ${ali}; text-decoration: ${und}">${text}</p>`;
  }
};
libstyle(style, "document.write?");

//__________________________________________ 4 задание. Аудитории
function task5() {
  alert("На сколько я понял, сгенерировать нажатие клавиши F12 нельзя. Прошу это сделать самостоятельно.");
}
const audiences = [
  {
    facultet: "prog",
    name: "lecture hall",
    quanplace: 20,
  },
  {
    facultet: "prog",
    name: "laboratory room",
    quanplace: 15,
  },
  {
    facultet: "prog",
    name: "3d design",
    quanplace: 10,
  },
  {
    facultet: "mehan",
    name: "lecture hall",
    quanplace: 20,
  },
  {
    facultet: "mehan",
    name: "workshop",
    quanplace: 15,
  },
  {
    facultet: "mehan",
    name: "drawing class",
    quanplace: 10,
  },
  {
    facultet: "veterinary",
    name: "lecture hall",
    quanplace: 20,
  },
  {
    facultet: "veterinary",
    name: "autopsy",
    quanplace: 15,
  },
  {
    facultet: "veterinary",
    name: "microbiological",
    quanplace: 10,
  },
];
// Вывод всех аудиторий
const audie = (audiences) => {
  console.log("Вывод всех аудиторий");
  console.log(audiences);
};
audie(audiences);
// Вывод аудитории по указанному факультету
const audiefac = (audiences, facul) => {
  console.log("Вывод аудитории по факультету");
  for (let i = 0; i < audiences.length; ++i) {
    if (audiences[i].facultet == facul) {
      console.log(audiences[i]);
    }
  }
};
// Вывод аудитории по заданной группе
const audigroup = (audiences, name, number, facul) => {
  console.log("Вывод аудитории по заданной группе");
  for (let i = 0; i < audiences.length; ++i) {
    if (audiences[i].facultet == facul) {
      if (audiences[i].quanplace >= number) {
        console.log(
          "Для группы по имени " +
            name +
            " факультета " +
            facul +
            " количеством " +
            number +
            " подходят аудитории на " +
            audiences[i].quanplace +
            " человек и называются " +
            audiences[i].name
        );
      }
    }
  }
};
// Сортировка аудиторий по количеству мест
const audinum = (audiences) => {
  console.log("Сортировка по количеству мест");
  let copy = audiences.slice();
  copy.sort(function compareNumbers(a, b) {
    if (a.quanplace > b.quanplace) {
      return 1;
    }
    if (a.quanplace < b.quanplace) {
      return -1;
    }
    return 0;
  });
  console.log(copy);
};
audinum(audiences);
// Сортировка по алфавиту
const audialf = (audiences) => {
  console.log("Сортировка по названию аудитории");
  let copy = audiences.slice();
  copy.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  console.log(copy);
};
audialf(audiences);

// Функции по 4 Заданию
// Вывод аудиторий по названию факультетов prog mehan veterinary
audiefac(audiences, "mehan");
// Вывод аудитории по заданной группе (массив, имя группы, количество человек, название факультета)
audigroup(audiences, "JS group", 17, "prog");
