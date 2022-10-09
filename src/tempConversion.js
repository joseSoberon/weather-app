function kelvinToCelcius(kelvin) {
    return truncate(kelvin - 273.15);
}

function kelvinToFarenheit(kelvin) {
    return truncate((9 / 5) * (kelvin - 273) + 32);
}

function celciusToFarenheit(celcius) {
    return truncate((celcius * (9 / 5)) + 32);
}

function farenheitToCelcius(farenheit) {
    return truncate((farenheit - 32) * (5 / 9));
}

function truncate(formula) {
    return Math.floor(formula * 100) / 100;
}

export { kelvinToCelcius, kelvinToFarenheit, celciusToFarenheit, farenheitToCelcius };
