let nomer = 0;
function setColor(event) {
    if (nomer == 3) {
        nomer = 0;
    } nomer += 1;
    function nomerColor(nomer) {
        if (nomer == 1) {
            red.style.backgroundColor = "red";
            green.style.backgroundColor = "white";
        }
        if (nomer == 2) {
            red.style.backgroundColor = "white";
            yellow.style.backgroundColor = "yellow";
        }
        if (nomer == 3) {
            yellow.style.backgroundColor = "white";
            green.style.backgroundColor = "green";
        }
    }
    nomerColor(nomer);
};