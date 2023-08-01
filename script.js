const apiKey = "a43f2c39037c3c10a94312bf3ca67562"
let search = ''
let cityForm = document.getElementById("city-form");
let cityInput = document.getElementById("city-input");
let cityName = document.getElementById("city-name");
let temp = document.getElementById("temp")
let feelsLike = document.getElementById("feelsLike")
let windSpeed = document.getElementById("windSpeed")
let weatherIcon = document.getElementById("weatherIcon")

cityForm.addEventListener("submit", event => {
    event.preventDefault();
    search = cityInput.value


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {
    cityName.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    feelsLike.innerHTML = data.main.feels_like;
    windSpeed.innerHTML = data.wind.speed;

    let iconLink = data.weather[0].icon
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${iconLink}@2x.png`)
    });

});