startUl.addEventListener("click", function (event) {
    let end = document.getElementsByTagName('li');
    for (let i = 0; i != end.length; i += 1) {
        end[i].style.backgroundColor = 'aqua'
    }
    event.target.style.backgroundColor = 'red';
});
