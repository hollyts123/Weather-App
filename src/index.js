// Displaying the current date
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

// Displaying the weather for a default city
function displayDefaultTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} Km/H`;
  
  console.log(defaultCityApiUrl);
}

let apiKey = "b533bb31ab6b7d26400f4e2f73516e81";
let defaultCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nikopol&appid=${apiKey}&units=metric`;
axios.get(defaultCityApiUrl).then(displayDefaultTemperature);

// Searching for a city and displaying the weather

function showWeather(response) {
  let city = document.querySelector(".city");
  let searchInput = document.querySelector("#search-input");
  city.innerHTML = `${searchInput.value}`;

  let temp = response.data.main.temp;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${Math.round(temp)}°C`;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = `${response.data.weather[0].description}`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} Km/H`;
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

// Converting temperature
function convertToCelsius(event) {
  event.preventDefault();
  let degree = document.querySelector(".degree");
  degree.innerHTML = "";
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let degree = document.querySelector(".degree");
  degree.innerHTML = "";
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFahrenheit);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToCelsius);
