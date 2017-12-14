var xhr = new XMLHttpRequest();
xhr.open("GET", "index.json", true);

xhr.onload = function() {
  var data = JSON.parse(this.responseText),
    coordinates = [],
    coords,
    content_ = [],
    dt = data.length;
  for (var i = 0; i < data.length; i++) {
    var coords = {
      lat: Number(data[i].lat),
      lng: Number(data[i].lng)
    }
    coordinates.push(coords);
    content_.push(data[i].content);
  }
  var settings = {
    zoom: 12,
    center: {lat:53.900172, lng:27.555347},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(div, settings);

  for (var i = 0; i < dt; i++) {
    var marker = new google.maps.Marker({
      position: coordinates[i],
      map: map,
    })
    var information = new google.maps.InfoWindow({
      content: content_[i]
    })
    clickMarker(marker, information);
  }

  function clickMarker(marker, wind) {
    marker.addListener('click', function() {
      wind.open(map, marker);
    })
  }
  var drawLine = new google.maps.Polyline({
    path: coordinates,
    strokeColor: "#000",
    strokeOpacity: 1,
    strokeWeight: 2
  })
  drawLine.setMap(map);
}

xhr.send(null);
