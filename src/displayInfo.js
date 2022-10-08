import getDate from './getDate';

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

export { displayCity }
