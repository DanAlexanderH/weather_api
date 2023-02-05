var date = dayjs().format('DD/MM/YYYY');
var searchBtn = document.querySelector("#search-btn");
var cityInput = document.querySelector("#city-search");
var cityResults = document.querySelector(".result-btns");
var weatherContainer = document.querySelector(".displayWeather-container");
var weatherBox = document.querySelector(".weather-box");
var weatherTextBox = document.createElement("div");
weatherTextBox.className = "weatherText-box";



// Adds dayjs to navbar.
function day() {
    var header = document.querySelector("#dayjs");
     header.innerHTML = date
};

// Fetches Open weather API
var weatherAPI = function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid=6b2fe1f5e9c799498a3cb8dcfcab7b18')
    .then (function(response){
    if(response.ok){
    return response.json()
    } else {
        alert("Not a valid city")
    };
}) .then (function(data) {
    // var humidity = data.main.humidity + "% ";
    // var temperature = data.main.temp + " can you h";
    //  var windSpeed = data.wind.speed + " MPH";
 
    // weatherBox.append(humidity)
    // weatherBox.append(temperature)
    // weatherBox.append(windSpeed)

    // localStorage.setItem("Humidity", humidity);
    // localStorage.setItem("Temperature", temperature);
    // localStorage.setItem("Wind Speed", windSpeed);
    // localStorage.getItem(humidity);
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


