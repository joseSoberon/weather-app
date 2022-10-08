export default function getCurrentPosition() {
    const id = navigator.geolocation.getCurrentPosition(succesCallback, errorCallback);
}

const succesCallback  = (position) => {
    let latitude = document.getElementById('latitude');
    latitude.textContent = position.coords.longitude;

    let longitude = document.getElementById('longitude')
    longitude.textContent = position.coords.latitude;
};

const errorCallback = () => {
    // TO DO : Set a random coords to display the weather when user dont allow position
}
