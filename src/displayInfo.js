import getDate from './getDate';
import { kelvinToCelcius, kelvinToFarenheit, celciusToFarenheit, farenheitToCelcius} from './tempConversion';

function displayCity(city) {
    let container = document.querySelector('main');

    let cityInfo = document.createElement('div');
    cityInfo.classList.add('city-info');

    let cityName = document.createElement('p');
    cityName.setAttribute('id', 'city');
    cityName.textContent = city;
    cityInfo.appendChild(cityName);

    let date = document.createElement('p');
    date.setAttribute('id', 'date');
    getDate(date);
    cityInfo.appendChild(date);

    container.appendChild(cityInfo);
}

function displayWeather(cityDescription, cityTemp) {
    let container = document.querySelector('main');

    let cityWeather = document.createElement('div');
    cityWeather.classList.add('city-weather');

    let descriptionDiv = document.createElement('div');
    let description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.textContent = cityDescription.description;
    descriptionDiv.appendChild(description);
    cityWeather.appendChild(descriptionDiv);

    let temperatureDiv = document.createElement('div');
    temperatureDiv.classList.add("temperature-div");
    let temperatureParagraph = document.createElement('p');
    temperatureParagraph.textContent = 'Temp: ';

    let temperature = document.createElement('span')
    temperature.classList.add('temperatures')
    temperature.classList.add('celcius');
    temperature.textContent = `${kelvinToCelcius(cityTemp.temp)}`;

    let symbol = document.createElement('span');
    symbol.classList.add('symbol');
    symbol.textContent = ' C';

    temperatureParagraph.appendChild(temperature);
    temperatureParagraph.appendChild(symbol);
    temperatureDiv.appendChild(temperatureParagraph);
    cityWeather.appendChild(temperatureDiv);

    container.appendChild(cityWeather);
}

function displayConverter() {
    let container = document.querySelector('body');

    let converterContainer = document.createElement('div');
    converterContainer.classList.add('converter');

    let converter = document.createElement('button');
    converter.textContent = 'Convert to Farenheit'

    converter.addEventListener('click', () => {
        let temperatures = document.querySelectorAll('.temperatures');
        temperatures.forEach(temperature => {
            let symbol = document.querySelector('.symbol');
            if (temperature.classList.contains('celcius')) {
                temperature.classList.remove('celcius');
                temperature.classList.add('farenheit');
                temperature.textContent = celciusToFarenheit(temperature.textContent);
                symbol.textContent = " F";
            }
            else if (temperature.classList.contains('farenheit')) {
                temperature.classList.remove('farenheit');
                temperature.classList.add('celcius');
                temperature.textContent = farenheitToCelcius(temperature.textContent);
                symbol.textContent = " C";
            }
        })
    })

    converterContainer.appendChild(converter);
    container.appendChild(converterContainer);

}

function displaySearchCity() {
    let container = document.querySelector('main');

    let searchbar = document.createElement('div');
    searchbar.classList.add('searchbar')

    let input = document.createElement('input')
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Search City');

    let button = document.createElement('button');
    button.setAttribute('id', 'search-button');
    button.textContent = 'Search';

    button.addEventListener('click', () => {
        if (input.value != '') {
            deleteChilds(container);
            displayNewCity(input.value);
        }
    })

    searchbar.appendChild(input);
    searchbar.appendChild(button);

    container.appendChild(searchbar);
}

async function displayNewCity(city) {
    let apiKey = '8a1dfe2baf222a773618cc95daa29f42';
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`

    try {
        let response = await fetch(url, {mode: 'cors'});
        let data = await response.json();
        let lat = data[0].lat;
        let lon = data[0].lon;

        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        let weatherResponse = await fetch(weatherUrl, {mode: 'cors'});
        let weatherData = await weatherResponse.json();

        displayCity(data[0].name);
        displayWeather(weatherData.weather[0], weatherData.main);
        displaySearchCity();

    } catch(err) {
        console.log('City not found');
        displaySearchCity();
    }
}

function deleteChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export { displayCity, displayWeather, displayConverter, displaySearchCity }
