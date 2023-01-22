//___________________________________________________________1 задание. Список покупок
const orderList = [
  {
    name: "apple",
    quantity: 55,
    isBuy: true,
  },
  {
    name: "juice",
    quantity: 10,
    isBuy: false,
  },
  {
    name: "banana",
    quantity: 5,
    isBuy: false,
  },
];
// Функция сортировки Купленные-не купленные
const listSort = (arr) => {
  const arrCopy = [...arr];
  return arrCopy.sort((product) => {
    if (product.isBuy) return 1;
    else return -1;
  });
};

const outputList = (arr) => console.log(listSort(arr));

// Функция добавления покупки
const addToOrder = (arr, el) => {
  for (const product of arr) {
    if (product.name === el.name) {
      return (product.quantity += el.quantity);
    }
  }
  arr.push(el);
};
// Функция принимает название продукта и отмечает его как купленный
const orderProduct = (arr, name) => {
  for (const product of arr) {
    if (product.name === name) {
      return (product.isBuy = true);
    }
  }
};

console.log(orderList);
console.log("---------------------------");
addToOrder(orderList, { name: "adfasdas", quantity: 3, isBuy: false });
console.log(orderList);
console.log("---------------------------");
orderProduct(orderList, "banana");
console.log(orderList);

//__________________________________________ 2 задание. Чек в магазине
const cheque = [
  {
    name: "apple",
    quantity: 55,
    price: 10,
  },
  {
    name: "juice",
    quantity: 10,
    price: 15,
  },
  {
    name: "banana",
    quantity: 5,
    price: 20,
  },
  (result = []),
];
// Распечатка чека
const printCheque = (cheque, name, quantity) => {
  for (const Cheque of cheque) {
    if (Cheque.name === name) {
      const result = Cheque.price * quantity;
      console.log(
        "Вы купили " +
          name +
          " в количестве " +
          quantity +
          " по цене " +
          Cheque.price +
          " за 1 шт. Общая стоимость " +
          result
      );
      cheque[3].push(result);
    }
  }
};

printCheque(cheque, "apple", 5);
printCheque(cheque, "banana", 3);
// Общая сумма покупки
const sumCheque = (cheque) => {
  let result = 0;
  for (i = 0; i < cheque.length; i++) {
    result += cheque[i];
  }
  return console.log("Итоговая стоимость покупок составила " + result);
};
sumCheque(cheque[3]);
// Самая дорогая покупка
const maxCheque = (cheque) => {
  let maxi = Math.max.apply(null, cheque[3]);
  console.log("Самая дорогая покупка составила " + maxi);
};
maxCheque(cheque);
// Средняя стоимость покупки
const averageCheque = (cheque) => {
  let result = 0;
  let average = 0;
  for (i = 0; i < cheque.length; i++) {
    result += cheque[i];
  }
  average = result / cheque.length;
  return console.log("Средняя стоимость покупок составила " + average);
};
averageCheque(cheque[3]);

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
    let row = document.createElement("p");
    row.innerHTML = `<p style="color: ${col}; font-size: ${siz}; margin: auto; display: flex; width: 400px; justify-content: ${ali}; text-decoration: ${und}">${text}</p>`;
    document.querySelector(".result").appendChild(row);
  }
};
libstyle(style, "document.write?");

//__________________________________________ 4 задание. Аудитории
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
  console.log(audiences);
};
audie(audiences);
// Вывод аудитории по указанному факультету
const audiefac = (audiences, facul) => {
  for (let i = 0; i < audiences.length; ++i) {
    if (audiences[i].facultet == facul) {
      console.log(audiences[i]);
    }
  }
};
audiefac(audiences, "mehan");
// Вывод аудитории по заданной группе
const audigroup = (audiences, name, number, facul) => {
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
audigroup(audiences, "JS group", 60, "prog");
// Сортировка аудиторий по количеству мест
const audinum = (audiences) => {
let copy = audiences.slice();
copy.sort(function compareNumbers (a, b) {
  if (a.quanplace > b.quanplace) {
    return 1; }
  if (a.quanplace < b.quanplace) {
    return -1; }
  return 0;
});
console.log (copy)}
audinum(audiences);
// Сортировка по алфавиту
const audialf = (audiences) => {
  let copy = audiences.slice();
  copy.sort(function (a, b) {
    if (a.name > b.name) {
      return 1; }
    if (a.name < b.name) {
      return -1; }
    return 0;
  });
console.log (copy);
}
audialf (audiences);