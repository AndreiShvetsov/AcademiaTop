// Нарисование прямоугольника
function paint(color, type, code) {
  if (type != "HEX") {
    document.querySelector("#StartColor").innerHTML += `
    <div class="color" style="border: 30px solid ${type}(${code}); background: white">
          <h3>${color}</h3>
          <p>${type}</p>
          <p>${code}</p>
  </div>`;
  } else {
    document.querySelector("#StartColor").innerHTML += `
    <div class="color" style="border: 30px solid ${code}; background: white">
          <h3>${color}</h3>
          <p>${type}</p>
          <p>${code}</p>
  </div>`;
  }
}
// Нарисовать начальные прямоугольники
function StartPaint() {
  let coloric = {
    variant1: {
      color: "YELLOWGREEN",
      type: "RGB",
      code: "154,205,50",
    },
    variant2: {
      color: "DARKCYAN",
      type: "RGBA",
      code: "0,139,139,1",
    },
    variant3: {
      color: "ORANGERED",
      type: "HEX",
      code: "#FF4500",
    },
  };
  paint(coloric.variant1.color, coloric.variant1.type, coloric.variant1.code);
  paint(coloric.variant2.color, coloric.variant2.type, coloric.variant2.code);
  paint(coloric.variant3.color, coloric.variant3.type, coloric.variant3.code);
}

// Проверка названия цвета
function validationName (name) {

}
// Проверка кода цвета
function validationCode (code) {
    if (document.querySelector("#typeColor").value == "RGB"){
        console.log(code);
let a = code.indexOf(",", 2);
console.log(a);


if (code == "((\d{1,3}), (\d{1,3}), (\d{1,3})\)"){console.log("RGB");}
    }
    console.log("noRGB");
};
// Нажатие кнопки (проверка формы, рисование прямоугольников)
function butSave() {
    
  console.log("Ghbdtn");
}

// Поле ввода для кода
function codeInput () {
    if (document.querySelector("#typeColor").value == "RGB"){
        document.querySelector("#Code").innerHTML =`
        <div style="display: flex">
        <label for="Code">Код </label>
        <input style="width: 30px"
            maxlength="3"
            min="0"
            max="255"
            type="number"
            name="Code"
            id="Code"
            placeholder="255"
          />
          <input style="width: 30px"
            maxlength="3"
            min=0
            max=255
            type="number"
            name="Code"
            id="Code"
            placeholder="255"
          />
          <input style="width: 30px"
            maxlength="3"
            min=0
            max=255
            type="number"
            name="Code"
            id="Code"
            placeholder="255"
          />          
          </div>`
    }
    if (document.querySelector("#typeColor").value == "RGBA"){
        document.querySelector("#Code").innerHTML =`
        <div style="display: flex">
        <label for="Code">Код </label>
        <input style="width: 30px"
            type="number"
            name="Code"
            id="Code"
            placeholder="255"
          />
          <input style="width: 30px"
            type="number"
            name="Code"
            id="Code"
            placeholder="255"
          />
          <input style="width: 30px"
            type="number"
            name="Code"
            id="Code"
            placeholder="255"
          />
          <input style="width: 30px"
          type="number"
          name="Code"
          id="Code"
          placeholder="1"
        />
          </div>`
    }
    if (document.querySelector("#typeColor").value == "HEX"){
        document.querySelector("#Code").innerHTML =`
        <div style="display: flex">
        <label for="Code">Код #</label>
        <input style="width: 50px"
            type="text"
            name="Code"
            id="Code"
            placeholder="FFFFFF"
          />
          </div>`
    }
} 

StartPaint();
codeInput ();