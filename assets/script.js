var date = dayjs().format('DD/MM/YYYY');
var searchBtn = document.querySelector("#search-btn");
var cityInput = document.querySelector("#city-search");
var cityResults = document.querySelector(".result-btns")








// Adds dayjs to navbar.
function day() {
    var header = document.querySelector("#dayjs");
     header.innerHTML = date
};
// Pressing on search button will add a button that has the city's name.
function addCityList() {
    var newCityBtn = document.createElement("button");
    newCityBtn.className = "city-btn";
    newCityBtn.innerHTML = cityInput.value; 
    cityResults.append(newCityBtn);

    cityInput.value = "";
}





searchBtn.addEventListener("click", addCityList);
day();