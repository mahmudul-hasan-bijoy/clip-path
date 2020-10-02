//Mobile Navigation
function openNav() {
    document.getElementById("myNav").style.width = "50%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//COUNTER
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//map
var mymap = L.map('mapid').setView([23.76671, 90.42265], 13);
var marker = L.marker([23.76671, 90.42265]).addTo(mymap);
var circle = L.circle([23.76671, 90.42265], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
marker.bindPopup("<b>Rampura</b><br>Dhaka, Bangladesh").openPopup();