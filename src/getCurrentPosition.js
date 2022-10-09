import { displayCity, displayConverter, displayWeather } from './displayInfo';

export default function getCurrentPosition() {
    const id = navigator.geolocation.getCurrentPosition(succesCallback, errorCallback)
}

const succesCallback  = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let apiKey = '8a1dfe2baf222a773618cc95daa29f42';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {

            console.log(response);

            // Display city info in the screen (can put in a function)
            // 1. Display city name
            displayCity(response.name);

            // 2. Display city weather
            displayWeather(response.weather[0], response.main);

            // 3. Conversion button
            displayConverter(response.main.temp);
        })

};

const errorCallback = () => {
    // TO DO : Set a random coords to display the weather when user dont allow
}
