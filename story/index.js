/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_directions_travel_modes]
function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 28.20, lng: 83.98 },
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const selectedMode = document.getElementById("mode").value;

  directionsService
    .route({
      origin: { lat: 28.20, lng: 83.98 },
      destination: { lat: 28.24, lng: 83.95 },
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

window.initMap = initMap;
// [END maps_directions_travel_modes]
