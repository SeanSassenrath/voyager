'use strict';

angular.module('placesCtrl', [])
    .controller('PlacesCtrl', function(Places){

    var ctrl = this;

    ctrl.showMap = function(lat, lng) {
      console.log("Getting google map")

      var point = new google.maps.LatLng(lat, lng);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: point,
        zoom: 15
      })
    }

    ctrl.getLocation = function() {
      var lat;
      var lng;

      navigator.geolocation.getCurrentPosition(function(position) {
          lat = position.coords.latitude;
          lng = position.coords.longitude;
          ctrl.showMap(lat, lng);
        })
      }

    ctrl.getLocation();
  })
;