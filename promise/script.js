// https://api.openweathermap.org/data/2.5/weather?lat=21.17&lon=72.83&appid=050bcc589fe73760676beb39119f11a3

const latInput = document.getElementById("lat-input");
const lonInput = document.getElementById("lon-input");
const searchBtn = document.getElementById("btn");

const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");

const searchWeather = async () => {
  const latValue = latInput.value;
  const lonValue = lonInput.value;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${lonValue}&appid=050bcc589fe73760676beb39119f11a3`,
  );
  
  const data = await res.json();
  console.log(data);
  cityTemp.textContent = Math.floor(data.main.temp - 273);
  cityTemp.textContent += " C";

  cityName.textContent = data.name;
};

searchBtn.addEventListener("click", searchWeather);
