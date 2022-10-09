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

export { displayCity, displayWeather, displayConverter }
