const input = document.getElementById("city");
const getBtn = document.getElementById("getBtn");
const dayOneBox = document.getElementById("dayOne");
const dayTwoBox = document.getElementById("dayTwo");
const dayThreeBox = document.getElementById("dayThree");

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const api_Key = "16fe864374e747f7b63143538230408";
let city;

getBtn.addEventListener("click", () => {
  city = input.value;
  getWeather(city);
});

async function getWeather(city) {
  let req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${api_Key}&q=${city}&days=3`
  );
  let res = await req.json();

  dayOneBox.innerHTML = `<div>
  <div class="mb-3 d-flex align-items-center justify-content-between"><span>${res.location.country}</span><span>${res.location.localtime}</span></div>
  <span class="fs-3 fw-bold">${res.location.region}</span>
  <div class='d-flex align-items-center '>
  <span class='fs-4 fw-bold d-block me-3'>${res.current.temp_c}o</span>
  <img src='${res.current.condition.icon}' class="img-fluid"/>
  </div>
  <span class="text-primary d-block mt-4">${res.current.condition.text}</span>
  <div class="d-flex align-items-center justify-content-between mt-3">
  <div>
  <img src='https://routeweather.netlify.app/images/icon-wind.png' class="img-fluid"/>
  <span>${res.current.wind_kph}KM/H</span>
  </div>
  <div>
  <img src='https://routeweather.netlify.app/images/icon-compass.png' class="img-fluid"/>
  <span>${res.current.wind_dir}</span>
  </div>
  <div>
  <img src='https://routeweather.netlify.app/images/icon-umberella.png' class="img-fluid"/>
  <span>${res.current.humidity}%</span>
  </div>
  </div>
  </div>`;

  dayTwoBox.innerHTML = `<div>
  <div class="mb-3 text-center"><span>${res.forecast.forecastday[1].date}</span></div>
  <div class='d-flex align-items-center flex-column'>
  <img src='${res.forecast.forecastday[1].day.condition.icon}' class="img-fluid"/>
  <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[1].day.maxtemp_c}o</span>
  <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[1].day.mintemp_c}o</span>
  </div>
  <span class="text-primary d-block mt-3  text-center">${res.forecast.forecastday[1].day.condition.text}</span>
  </div>`;

  dayThreeBox.innerHTML = `<div>
  <div class="mb-3 text-center"><span>${res.forecast.forecastday[2].date}</span></div>
  <div class='d-flex align-items-center flex-column'>
  <img src='${res.forecast.forecastday[2].day.condition.icon}' class="img-fluid"/>
  <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[2].day.maxtemp_c}o</span>
  <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[2].day.mintemp_c}o</span>
  
  </div>
  <span class="text-primary d-block mt-3  text-center">${res.forecast.forecastday[2].day.condition.text}</span>
  </div>`;
}

async function firstGetWeather(lat, long) {
  let req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${api_Key}&q=${lat},${long}&days=3`
  );
  let res = await req.json();

  dayOneBox.innerHTML = `<div>
    <div class="mb-3 d-flex align-items-center justify-content-between"><span>${res.location.country}</span><span>${res.location.localtime}</span></div>
    <span class="fs-3 fw-bold">${res.location.region}</span>
    <div class='d-flex align-items-center '>
    <span class='fs-4 fw-bold d-block me-3'>${res.current.temp_c}o</span>
    <img src='${res.current.condition.icon}' class="img-fluid"/>
    </div>
    <span class="text-primary d-block mt-4">${res.current.condition.text}</span>
    <div class="d-flex align-items-center justify-content-between mt-3">
    <div>
    <img src='https://routeweather.netlify.app/images/icon-wind.png' class="img-fluid"/>
    <span>${res.current.wind_kph}KM/H</span>
    </div>
    <div>
    <img src='https://routeweather.netlify.app/images/icon-compass.png' class="img-fluid"/>
    <span>${res.current.wind_dir}</span>
    </div>
    <div>
    <img src='https://routeweather.netlify.app/images/icon-umberella.png' class="img-fluid"/>
    <span>${res.current.humidity}%</span>
    </div>
    </div>
    </div>`;

  dayTwoBox.innerHTML = `<div>
    <div class="mb-3 text-center"><span>${res.forecast.forecastday[1].date}</span></div>
    <div class='d-flex align-items-center flex-column'>
    <img src='${res.forecast.forecastday[1].day.condition.icon}' class="img-fluid"/>
    <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[1].day.maxtemp_c}o</span>
    <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[1].day.mintemp_c}o</span>
    </div>
    <span class="text-primary d-block mt-3  text-center">${res.forecast.forecastday[1].day.condition.text}</span>
    </div>`;

  dayThreeBox.innerHTML = `<div>
    <div class="mb-3 text-center"><span>${res.forecast.forecastday[2].date}</span></div>
    <div class='d-flex align-items-center flex-column'>
    <img src='${res.forecast.forecastday[2].day.condition.icon}' class="img-fluid"/>
    <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[2].day.maxtemp_c}o</span>
    <span class='fs-4 fw-bold d-block me-3'>${res.forecast.forecastday[2].day.mintemp_c}o</span>
    
    </div>
    <span class="text-primary d-block mt-3  text-center">${res.forecast.forecastday[2].day.condition.text}</span>
    </div>`;
}
function success(pos) {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;
  firstGetWeather(lat, long);
}

function error() {
  console.log("Error Location");
}
navigator.geolocation.getCurrentPosition(success, error, options);
