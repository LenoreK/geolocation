const map = L.map('map').setView([0, 0], 1);
// L.control.locate().addTo(map);
const attribution = 
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributor';


const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const tiles = L.tileLayer(tileUrl, {attribution});

tiles.addTo(map);

getPosition();

if (navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature")
} else {
    navigator.geolocation.getCurrentPosition(position)
}

function getPosition(position) {
    let lat = document.getElementById('lat').textContent
    let long = document.getElementById('lon').textContent

    lat = position.coords.latitude;
    long = position.coords.longitude;

    let marker = L.marker([lat, long]).addTo(map);

    map.fitBounds(marker.getBounds())
}