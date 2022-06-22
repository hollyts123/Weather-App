// Feature #1
let currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

if (currentDate.getMinutes() < 10) {
  currentMinutes = "0" + currentDate.getMinutes();
}

let currentDay = days[currentDate.getDay()];
let p = document.querySelector(".text p");
p.innerHTML = `${currentDay} ${currentHours}:${currentMinutes}`;

// Feature #2

function showWeather(response) {
  let city = document.querySelector(".city");
  let searchInput = document.querySelector("#search-input");
  city.innerHTML = `${searchInput.value}`;

  let temp = response.data.main.temp;
  let temperature = document.querySelector(".degree");
  temperature.innerHTML = `${Math.round(temp)}°C`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let apiKey = "b533bb31ab6b7d26400f4e2f73516e81";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

let search = document.querySelector(".search-bar");
search.addEventListener("submit", searchCity);

// Bonus Feature
// function convertToCelsius(event) {
//   event.preventDefault();
//   let degree = document.querySelector(".degree");
//   degree.innerHTML = "15°C";
// }
// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let degree = document.querySelector(".degree");
//   degree.innerHTML = "59°F";
// }
// let fahrenheit = document.querySelector("#fahrenheit");
// fahrenheit.addEventListener("click", convertToFahrenheit);

// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", convertToCelsius);
