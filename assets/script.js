var date = dayjs().format('MM/DD/YYYY');
var searchBtn = document.querySelector("#search-btn");
var cityInput = document.querySelector("#city-search");
var cityResults = document.querySelector(".result-btns");
var cityNameText = document.querySelector("#cityName-Text");
var weatherTemptext= document.querySelector("#weatherTemp-text");
var humidityText = document.querySelector("#humidity-text");
var windSpeedText = document.querySelector("#windspeed-text");
var cityIcon = document.querySelector("#icon");
var forecastBox = document.querySelectorAll(".forecast-box");
var forecast1 = document.querySelector("#forecast1");
var forecast2 = document.querySelector("#forecast2");
var forecast3 = document.querySelector("#forecast3");
var forecast4 = document.querySelector("#forecast4");
var forecast5 = document.querySelector("#forecast5");




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
    console.log(data)
    const { name } = data;
    const { icon } = data.weather[0];
    const { temp } = data.main;
    const { humidity } = data.main;
    const { speed } = data.wind;

    cityNameText.innerHTML = name;
    weatherTemptext.innerHTML = "Temperature: " + temp + "°F";
    humidityText.innerHTML = "Humidity: " + humidity + " %";
    windSpeedText.innerHTML = "Wind: " + speed + " MPH";  
    cityIcon.src = "http://openweathermap.org/img/wn/" + icon + ".png";
});
// Fetches forecast for 5 days
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityInput.value+'&units=imperial&appid=6b2fe1f5e9c799498a3cb8dcfcab7b18')
.then(function(response) {
    return response.json()

}) .then(function(data){
    console.log(data);


    

})


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


