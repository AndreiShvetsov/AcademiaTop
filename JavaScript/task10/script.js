async function submit() {
  let city = document.querySelector("#city").value;
  let key = "6563727fb56e34dfa864f4b72c585fa7";
  let query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=ru&units=metric`;
  let queryHour = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&cnt=10&lang=ru&units=metric`;
  let response = await fetch(query);
  let responseHour = await fetch(queryHour);
  if (response.ok) {
    let jsons = await response.json();
    let weat = jsons.weather[0].description;
    let dats = new Date(jsons.dt * 1000);
    document.querySelector("#Result").innerHTML = `
    <div>
    <p>Город ${jsons.name}</p>
    <p>${dats}</p>
    <p>Температура ${jsons.main.temp} &#8451</p>
    <p>Влажность ${jsons.main.humidity} %</p>
    <p>Минимальная температура ${jsons.main.temp_min} &#8451</p>
    <p>Максимальная температура ${jsons.main.temp_max} &#8451</p>
    <p>Давление ${jsons.main.pressure} Па</p>
    <p>Скорость ветра ${jsons.wind.speed} м/с</p>
    <p>${weat}</p>
    <figure>
    <img src="https://openweathermap.org/img/wn/${jsons.weather[0].icon}@2x.png"/>
    </figure>
    </div>`;
  }
  else  document.querySelector("#HourText").innerHTML = `
  <div>
  <p>Город не найден</p>
  </div>`;
  if (responseHour.ok) {
    let jsonsHour = await responseHour.json();
    document.querySelector("#HourText").innerHTML = `
    <div class="HourText">
    <p>Почасовой прогноз</p>
    </div>`;
    for (let i = 0; i < 10; i++) {
      let Hour = new Date(jsonsHour.list[i].dt * 1000);
      document.querySelector("#ResultHour").innerHTML += `
    <div>
    <p>${Hour.getHours()}:00 ч</p>
    <p>${jsonsHour.list[i].main.temp}  &#8451</p>
    <figure>
    <img src="https://openweathermap.org/img/wn/${
      jsonsHour.list[i].weather[0].icon
    }@2x.png"/>
    </figure>
    <p>${jsonsHour.list[i].weather[0].description}</p>
    <p>${jsonsHour.list[i].wind.speed} м/с</p>
    </div>`;
    }
  }
}
