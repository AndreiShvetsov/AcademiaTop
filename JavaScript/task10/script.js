// key API 6563727fb56e34dfa864f4b72c585fa7 for https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let learn = () => {
  let city = document.querySelector("#city").value;
  console.log(city);
  let key = "6563727fb56e34dfa864f4b72c585fa7";
  let query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=ru&units=metric`;
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  let jsonCity = JSON.stringify(city);
  request.open("POST", query);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      console.log(JSON.weather);
    }
  };
  request.send(jsonCity);
};
