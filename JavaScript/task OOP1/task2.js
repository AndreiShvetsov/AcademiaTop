// Задание 2 Класс - описывающий html элемент
class HtmlElement {
  constructor(name, selfClosing, atribut, style, teg) {
    this.name = name;
    this.selfClosing = [true, false];
    this.text = [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque architecto libero quisquam, maiores non aut error quas nostrum reprehenderit, ea ipsa! Repudiandae obcaecati sint corporis voluptatum voluptates earum, optio quas!",
    ];
    this.atribut = ["id", "style", "class", "href", "target", "alt"];
    this.style = ["color", "font - saize", "border", "margin", "padding"];
    this.teg = ["div", "p", "img", "a", "h3"];
  }
  getAatribut(atribut, set) {
    let result = `${this.atribut[atribut]}=${set}`;
    return result;
  }
  getStyle(style, set) {
    let result = `${this.style[style]}=${set}`;
    return result;
  }
  getAddendum(teg) {
    let result = `${this.teg[teg]}`;
    return result;
  }
  getText() {
    let result = `${this.text}`;
    return result;
  }
  getHTML() {
    let result = `<${this.name} ${this.getStyle}>`;
    result += `${this.text}`;
    if ((this.selfClosing = true)) {
      result += `</${this.name}>`;
    } else result += `>`;
    return result;
  }
}

function task2() {
  let task = new HtmlElement("div");
  task.getAddendum(1);
  task.selfClosing = true;
  task.getStyle(0, "red");
  document.getElementById("result2").innerHTML = task.getHTML();
}
