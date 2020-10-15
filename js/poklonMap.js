function myMap() {
//podesavanje koordinata mape na ICBLa ocitane sa Google Maps
var mapProp= {
  center:new google.maps.LatLng(44.776146, 17.201139),
  zoom:17, //isprobati razne vrijednosti zoom atributa
  panControl: true,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  overviewMapControl: true,
  rotateControl: true
};

//kreiranje mape
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//kreiranje markera za lokaciju koju zelimo naznaciti
var marker = new google.maps.Marker({position: mapProp.center, animation:google.maps.Animation.BOUNCE});//mjesto animation icon:....png
marker.setMap(map);

//zumiranje nakon klika na marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(20);
  map.setCenter(marker.getPosition());
});

//prikaz informacije sta je prikazano na mapi
var infowindow = new google.maps.InfoWindow({
  content:"Ovdje možete kupiti moj rođendanski poklon!"
});
infowindow.open(map,marker);

}