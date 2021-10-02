// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
let marker;
var myLocation = { lat: 59.327, lng: 18.067 };
/*
const citymap = {
    chicago: {
        center: { lat: 59.327, lng: 18.067 },
        population: 28,
    },
    newyork: {
        center: { lat: 59.328, lng: 18.066 },
        population: 10,
    },
    losangeles: {
        center: { lat: 59.331, lng: 18.072 },
        population: 5,
    },
    vancouver: {
        center: { lat: 59.324, lng: 18.056 },
        population: 100,
    },
};*/

const citymap = {};
function populateMap() {
    for (let i = 0; i < 40; i++) {
        citymap[i] = {
            center: {
                lat: 59.31 + Math.random() * (0.03 - 0.001) + 0.001,
                lng: 18.05 + Math.random() * (0.03 - 0.001) + 0.001
            },
            population: Math.random() * (50 - 1) + 1,
        }
    }
}
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLocation,
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    populateMap();
    for (const city in citymap) {
        // Add the circle for this city to the map.
        const cityCircle = new google.maps.Circle({
            strokeColor: "#1574BB",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#1574BB",
            fillOpacity: 0.35,
            map,
            center: citymap[city].center,
            radius: citymap[city].population * 5,
        });
    }
    /*
    const locationButton = document.createElement("button");
    
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    */
}
// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map,
    });
}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}