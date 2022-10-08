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
            let city = document.getElementById("city");
            city.textContent = response.name;

            console.log(city);
        })

};

const errorCallback = () => {
    // TO DO : Set a random coords to display the weather when user dont allow
}
