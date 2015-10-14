'use strict';

angular.module('placesCtrl', [])
    .controller('PlacesCtrl', function($scope){

    var ctrl = this;

    ctrl.newPlace = {
      activity: "",
      location: "",
    };

    ctrl.places = [];

    ctrl.resetPlaces = function() {
      ctrl.places = []
    }

    ctrl.submit = function(place) {
      console.log("New place = ", place.activity + " " + place.location);
      if(place.location === "" || place.location === "current location") {
        ctrl.getCurrentLocation(place)
      } else {
        ctrl.getLocation(place)
      }
    }

    ctrl.showMap = function(lat, lng, place) {
      console.log("Loading google map")

      var point = new google.maps.LatLng(lat, lng);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: point,
        zoom: 14
      })

      var infowindow = new google.maps.InfoWindow();

      var request = {
        location: point,
        radius: '500',
        query: place.activity,
      };

      var service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);

      function callback(results, status) {
        if (status === "OK") {
          ctrl.resetPlaces();
          for(var i = 0; i < results.length; i++) {
            createMarker(results[i])
            var address = results[i].formatted_address;
            var splitAddress = address.split(",");
            splitAddress.pop();
            results[i].formatted_address = splitAddress.join(",");
            ctrl.places.push(results[i])
          }
          console.log('Ctrl places ', ctrl.places)
          $scope.$apply();
        } else {
          console.log("Status ", status)
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
    }

    ctrl.getCurrentLocation = function(place) {
      navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Finding users current location")
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          console.log("About to pass in coords to map ", lat, lng)
          ctrl.showMap(lat, lng, place);
        })
      }

      ctrl.getLocation = function(place) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': place.location}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            console.log("location results ", results)
            var lat = results[0].geometry.location.lat();
            var lng = results[0].geometry.location.lng();
            console.log("Coordinates are " + lat + " lat, and " + lng + " lng")
            ctrl.showMap(lat, lng, place)
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      }

    // ctrl.getLocation();
  })
;