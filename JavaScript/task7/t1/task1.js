function noDigits(event) {
//   let text = document.querySelector("#textName").value;
//   for (let i = 0; i < text.length; i++) {
    // if ("1234567890".indexOf(event.key) != -1) text = text[i].substring(0, 1);
//   }
    if ("1234567890".indexOf(event.key) != -1) event.preventDefault();
}
