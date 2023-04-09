// key API 6563727fb56e34dfa864f4b72c585fa7 for https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function submit() {
  let city = document.querySelector("#city").value;
  let key = "6563727fb56e34dfa864f4b72c585fa7";
  let query = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=ru&units=metric`;
  let queryHour = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&cnt=10&lang=ru&units=metric`;
  let response = await fetch(query);
  let responseHour = await fetch(queryHour);
  if (response.ok) {
    let jsons = await response.json();
    console.log(jsons);
    console.log("Город " + jsons.name);
    console.log("Температура " + jsons.main.temp + "С");
    console.log("Влажность " + jsons.main.humidity + "%");
    console.log("Минимальная температура " + jsons.main.temp_min + "С");
    console.log("Максимальная температура " + jsons.main.temp_max + "С");
    console.log("Давление " + jsons.main.pressure + "Па");
    console.log("Скорость ветра " + jsons.wind.speed + "м/с");
    let weat = jsons.weather[0].description;
    console.log(weat);
    let dats = new Date(jsons.dt * 1000);
    console.log(dats);
    document.querySelector("#Result").innerHTML = `
    <div>
    <figure>
    <img src="https://openweathermap.org/img/wn/${jsons.weather[0].icon}@2x.png"/>
    </figure>
    </div>`;
  }
  if (responseHour.ok) {
    let jsonsHour = await responseHour.json();
    console.log(jsonsHour);
  }
}
