const date = dayjs().format('MM/DD/YYYY');
const searchBtn = document.querySelector("#search-btn");
const cityInput = document.querySelector("#city-search");
const cityResults = document.querySelector(".result-btns");
const cityNameText = document.querySelector("#cityName-Text");
const weatherTemptext= document.querySelector("#weatherTemp-text");
const humidityText = document.querySelector("#humidity-text");
const windSpeedText = document.querySelector("#windspeed-text");
const cityIcon = document.querySelector("#icon");
const forecastBox = [];
const forecastDate = [];
const forecastIcon = [];
const forecastTemps = [];
const forecastWindspeeds = [];
const forecastHumidities = [];
forecastBox.push(document.getElementById("forecast1"));
forecastBox.push(document.getElementById("forecast2"));
forecastBox.push(document.getElementById("forecast3"));
forecastBox.push(document.getElementById("forecast4"));
forecastBox.push(document.getElementById("forecast5"));
forecastDate.push(document.getElementById('forecast-date-1'));
forecastDate.push(document.getElementById('forecast-date-2'));
forecastDate.push(document.getElementById('forecast-date-3'));
forecastDate.push(document.getElementById('forecast-date-4'));
forecastDate.push(document.getElementById('forecast-date-5'));
forecastIcon.push(document.getElementById("forecast-icon-1"));
forecastIcon.push(document.getElementById("forecast-icon-2"));
forecastIcon.push(document.getElementById("forecast-icon-3"));
forecastIcon.push(document.getElementById("forecast-icon-4"));
forecastIcon.push(document.getElementById("forecast-icon-5"));
forecastTemps.push(document.getElementById('forecast-temp-1'));
forecastTemps.push(document.getElementById('forecast-temp-2'));
forecastTemps.push(document.getElementById('forecast-temp-3'));
forecastTemps.push(document.getElementById('forecast-temp-4'));
forecastTemps.push(document.getElementById('forecast-temp-5'));
forecastHumidities.push(document.getElementById('forecast-humidity-1'));
forecastHumidities.push(document.getElementById('forecast-humidity-2'));
forecastHumidities.push(document.getElementById('forecast-humidity-3'));
forecastHumidities.push(document.getElementById('forecast-humidity-4'));
forecastHumidities.push(document.getElementById('forecast-humidity-5'));
forecastWindspeeds.push(document.getElementById('forecast-windSpeed-1'));
forecastWindspeeds.push(document.getElementById('forecast-windSpeed-2'));
forecastWindspeeds.push(document.getElementById('forecast-windSpeed-3'));
forecastWindspeeds.push(document.getElementById('forecast-windSpeed-4'));
forecastWindspeeds.push(document.getElementById('forecast-windSpeed-5'));




// Adds dayjs to navbar.
function day() {
    var header = document.querySelector("#dayjs");
     header.innerHTML = date
};

// Fetches Open weather API for same day/hour weather
var weatherAPI = function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&units=imperial&appid=6b2fe1f5e9c799498a3cb8dcfcab7b18')
    .then (function(response){
    if(response.ok){
    return response.json()
    } else {
        alert("Not a valid city")
    };
}) .then (function(data) {
    // console.log(data)
    const { name } = data;
    const { icon } = data.weather[0];
    const { temp } = data.main;
    const { humidity } = data.main;
    const { speed } = data.wind;

    cityNameText.innerHTML = name;
    weatherTemptext.innerHTML = "Temperature: " + temp + "°F";
    humidityText.innerHTML = "Humidity: " + humidity + " %";
    windSpeedText.innerHTML = "Wind: " + speed + " MPH";  
    cityIcon.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
});
// Fetches forecast for 5 days
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&units=imperial&appid=6b2fe1f5e9c799498a3cb8dcfcab7b18')
.then(function(response) {
    return response.json()

}) .then(function(data){
    console.log(data);



var fcIndex = 0;
for(i = 0; i<data.list.length; i=i+8){
    forecastBox[fcIndex].style.display = "block";
     forecastDate[fcIndex].innerHTML = dayjs(data.list[i].dt_txt).format('MM/DD/YYYY');
     forecastIcon[fcIndex].src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
     forecastTemps[fcIndex].innerHTML = data.list[i].main.temp + "°F";
     forecastHumidities[fcIndex].innerHTML = data.list[i].main.humidity + "%";
     forecastWindspeeds[fcIndex].innerHTML = data.list[i].wind.speed + " MPH";

    fcIndex++;
};
}); 
};



// Pressing on search button will add a button that has the city's name.
function addCityList() {
    var newCityBtn = document.createElement("button");
    newCityBtn.className = "city-btn";
    newCityBtn.innerHTML = cityInput.value; 
 
    cityResults.append(newCityBtn);
    
    
    cityInput.value = "";


};






searchBtn.addEventListener("click", weatherAPI);
searchBtn.addEventListener("click", addCityList);
day();


