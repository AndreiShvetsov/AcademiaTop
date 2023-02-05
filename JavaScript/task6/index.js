//....................................... Задание 1 - Статситика введённой строки
let statistic = (text) => {
  let numm = /\d/g;
  let lett = /[a-z]/g;
  let simbols = 0;
  let numb = text.match(numm);
  let letter = text.match(lett);
let spec = `+'".,!?/*~@#$%^&()_-\\`;
for (let i=0; i< text.length; i++){
  let char = text[i];
  if (spec.indexOf(char) >= 0){simbols++}
};
  let sim = text.length - numb.length - letter.length - simbols;
  console.log(
    'В строке "' +
      text +
      '" ' +
      numb.length +
      " числа, " +
      letter.length +
      " букв и " + simbols + " символов " +
      sim +
      " пробелов"
  );
};
statistic("13 numbers+");
//......................................... Задание 2 - Число написать текстом
let namequeri = {
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
  10: "десять",
  11: "одиннадцать",
  12: "двенацать",
  13: "тринадцать",
  14: "четырнадцать",
  15: "пятнадцать",
  16: "шестнадцать",
  17: "семнадцать",
  18: "восемнадцать",
  19: "девятнадцать",
  20: "двадцать",
  30: "тридцать",
  40: "сорок",
  50: "пятьдесят",
  60: "шестьдесят",
  70: "семьдесят",
  80: "восемдесят",
  90: "девяносто",
};
let transform = (qu) => {
  if (qu in namequeri) {
    return console.log(
      "Введено число " + qu + " и текстом оно пишется - " + namequeri[qu]
    );
  } else {
    let string = qu.toString();
    let first = string[0] * 10;
    let last = string[1];
    console.log(
      "Введено число " +
        qu +
        " и текстом оно пишется - " +
        namequeri[first] +
        " " +
        namequeri[last]
    );
  }
};
transform(49);
//......................................... Задание 3 - Инверсия регистра букв и числа на подчеркивание
let registr = (nexttext) => {
  let result = "";
  for (let simbol of nexttext) {
    if (simbol === simbol.toUpperCase()) {
      result += simbol.toLowerCase();
    } else {
      result += simbol.toUpperCase();
    }
  }
  result = result.replace(/[0-9]/g, "_");
  console.log("Введён текст " + nexttext + " Результат работы функции " + result);
};
registr("BIG123smoll");
//......................................... Задание 4 - Преобразование в CamelCase
let camel = (nocamel) => {
  let result = "";
  let numerregist = 0;
  for (let simbol of nocamel) {
    if (simbol == "-") {
      numerregist = result.length;
      let simb = nocamel[numerregist + 1];
      result += simb.toUpperCase();
    } else {
      result += simbol;
    }
  }
  result = result.replace(nocamel[numerregist + 1], "");
  console.log("Введено " + nocamel + " переведено в " + result);
};
camel("font-size");
camel("bakground-color");
camel("text-align");
//......................................... Задание 5 - Из словосочетания в абревиатуру
let abbr = (text) => {
  let result = text[0];
  for (let pol = 0; pol !== text.length; pol++) {
    for (let simbol of text[pol]) {
      if (simbol == " ") {
        let regi = text.indexOf(" ", pol);
        let simb = text[regi + 1];
        result += simb.toUpperCase();
      }
    }
  }
  console.log("Вы ввели - " + text + " - аббериваатура будет - " + result);
};
abbr("Факультет ветеринарной медицины");
//......................................... Задание 6 - Принимает строки и выводит в одну
let bigstring = (...wave) => {
  let result = "";
  let quantum = 0;
  for (let str of wave) {
    result += (str+' ');
    quantum += 1;
  }
  console.log("Вы ввели " + quantum + " строк(и)");
  console.log(result);
};
bigstring ('Первая волна','Вторая волна','Третья волна');
// .........................................7 Задание - подсчёт из строки
let cankul = (text) => {
  let sign = 0;
  if (text.indexOf('+') != -1) { sign = text.indexOf('+') };
  { if (text.indexOf('-') != -1) { sign = text.indexOf('-') }; }
  { if (text.indexOf('*') != -1) { sign = text.indexOf('*') }; }
  { if (text.indexOf('/') != -1) { sign = text.indexOf('/') }; }
  let first = text.slice(0, sign);
  let last = text.slice(sign + 1, text.length);
  if (text[sign] == '+') { console.log('Вы ввели ' + text + '=' + (Number(first) + Number(last))); };
  { if (text[sign] == '-') { console.log('Вы ввели ' + text + '=' + (Number(first) - Number(last))); } };
  { if (text[sign] == '*') { console.log('Вы ввели ' + text + '=' + (Number(first) * Number(last))); } };
  { if (text[sign] == '/') { console.log('Вы ввели ' + text + '=' + (Number(first) / Number(last))); } };
}
cankul('14-7');
//........................................... 8 Задание - информация из URL
let urlinfo = (url) => {
  let protocols = url.slice(0, url.indexOf(':'));
  let indexdomen = url.slice(protocols.length + 3, url.length);
  let domen = indexdomen.slice(0, indexdomen.indexOf('/'));
  let way = indexdomen.slice(domen.length, indexdomen.length);
  console.log('Вы ввели адрес ' + url + ' в котором протокол - ' + protocols + ', домен - ' + domen + ', путь - ' + way);
}
urlinfo('https://itstep.org/ua/about');
//.................... 9 Задание - прописать функцию из строки в массив по разделителю не используя split
let nosplit = (text, deli) => {
  let result = [];
  let temp = '';
  for (let i = 0; i < text.length; i++) {
      if (text[i] != deli) {
          temp += text[i];
          if (text[i + 1] == deli || i == text.length - 1) {
              result.push(temp);
              temp = '';
          }
      }
  }
  console.log("Вы ввели " + text + " с делителем " + deli + ". Получаем результат " + result)
}
nosplit('Впервые/на/дороге/47/приехал/богатырь', '/');
//..................................................... 10 Задание - вывод текста по шаблону
let pattern = (patt, text) => {
  let result = '';
  let textarr = text.split(',')
  let instead = '%';
  let o = 0;
  for (let i = 0; i < patt.length; i++) {
      if (patt[i] !== instead) {
          result += patt[i]
      } else {
          o = patt[i + 1] - 1;
          result += textarr[o];
          i++;
      };
  }
  console.log("Введены параметры " + patt + " Сведения для этих параметров " + text +" Результат выполнения шаблона " + result);
}
pattern('Today is %4 %2.%3.%1', '“Monday”, 10, 8, 2020');