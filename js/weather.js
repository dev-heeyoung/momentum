const API_KEY = "f968b8a14bd14b74c905d0902ac41cfc";

function handleSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {

    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");

    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = `@ ${data.name}`;
    })
}

function handleError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(handleSuccess, handleError);