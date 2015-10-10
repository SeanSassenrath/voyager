var map;

(function initialize() {
  alert('hello');
  var point = new google.maps.LatLng(-33.8665433, 151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
    center: point,
    zoom: 15
  });

})();