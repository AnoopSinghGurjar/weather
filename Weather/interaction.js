function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = `38abdcb8326352a9370208043273e85a`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityNameElement = document.getElementById('cityName');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    cityNameElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;

    weatherInfo.classList.remove('hidden');
    weatherInfo.classList.add('visible');
}