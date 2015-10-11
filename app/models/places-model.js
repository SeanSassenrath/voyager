'use strict';

angular.module('placesService', [])

.factory('Places', function($q) {

  var placeFactory = {};

  placeFactory.getLocation = function() {
    console.log("Testinggg")
  }

  return placeFactory;
})