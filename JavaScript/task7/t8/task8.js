// // Task 8
document.querySelector("#res").onmousedown = function (event) {
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    document.querySelector(".windo").style.width = pageX + 4 + "px";
    document.querySelector(".windo").style.height = pageY - 11 + "px";
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.querySelector("#res").onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    document.querySelector("#res").onmouseup = null;
  };
};

document.querySelector("#res").ondragstart = function () {
  return false;
};
