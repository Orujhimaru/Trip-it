let allForecasts = [];

async function getAllProducts() {
  try {
    const res = await fetch(
      //   "http://api.weatherapi.com/v1/current.json?key=486b6d8f617f4184ade145624242704&q=Rome"
      "http://api.weatherapi.com/v1/forecast.json?key=486b6d8f617f4184ade145624242704&q=Rome&days=5"
    );
    const forecast = await res.json();
    allForecasts = forecast.forecast.forecastday;
  } catch (error) {
    console.error(error);
  }
  console.log(allForecasts);
  updateTemperature();
}
getAllProducts();

function updateTemperature() {
  for (let i = 0; i < 5; i++) {
    let temp = document.getElementById(`temp${i + 1}`);
    temp.innerText = allForecasts[i].day.avgtemp_c.toFixed(0) + "°";
  }
}

let previousButton = document.getElementById("0");

function changeBgC(navpage) {
  previousButton.classList.toggle("backgroundSelected");
  navpage.classList.add("backgroundSelected");
  previousButton = navpage;
}
