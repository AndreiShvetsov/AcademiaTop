// Task 1
function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
        event.preventDefault();
}
// Task 2
function openWin(event) {
    main.style.display = "block";
};
function closeWin(event) {
    main.style.display = "none";
  
};
// Task 3
function moveBoll(e) {
    boll.style.display = 'block';
    boll.style.left = e.pageX + 'px';
    boll.style.top = e.pageY + 'px';
}

// Task 4
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

// Task 5
startUl.addEventListener("click", function (event) {
    let end = document.getElementsByTagName('li');
    for (let i = 0; i != end.length; i += 1) {
        end[i].style.backgroundColor = 'aqua'
    }
    event.target.style.backgroundColor = 'red';
});



