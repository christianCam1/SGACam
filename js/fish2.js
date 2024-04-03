(function() {



    var db = firebase.database();
  var firebaseRef = db.ref("UNO");
  
  var ref2 = db.ref("Paseadores");
  
  var collection = new Array();
  
  
  var latitude = 19.409085966210142;
  var longitude =  -99.17360369444276 ;
  
  //var markers = [];
  
  
  var circles = [];
  var markers = [];
  var geoFire = new GeoFire(firebaseRef);
  var geoQuery;
  
  
  
  
  
  var myLatlng = new google.maps.LatLng(latitude, longitude);
  
  
     var mapOptions = {
    zoom: 13.2,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  colormarker2 = "http://maps.google.com/mapfiles/ms/micons/blue.png";
  
   var Markermio = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(latitude,longitude),
      icon:colormarker2,
      draggable:true,
      map: map
    });
  
  
  
  
    google.maps.event.addListener(Markermio,'dragend',function()
  
    {
  
  
   for(var i in circles) {
      circles[i].setMap(null);
    }
  
  
    for (var i = 0; i < markers.length; i++) {
              markers[i].setMap(null);
                log("markers"+markers[i]);
          }
            collection = [];
  
  
  
  
      /*markers.forEach(function(marker) {
              marker.setMap(null);
            });
            markers = [];*/
  
  
  
        log("dragend "+Markermio.getPosition());
  
        log("dragend lng "+Markermio.getPosition().lng());
  
        var latitud = Markermio.getPosition().lat();
      var longitud = Markermio.getPosition().lng();
  
      var queryLocation = [Markermio.getPosition().lat(), Markermio.getPosition().lng()];
      myLatlng = new google.maps.LatLng(Markermio.getPosition().lat(), Markermio.getPosition().lng());
  
      var radius = 1500;
    //var radius = 200000;
  var radius2 = radius * 2;
  var radius3 = radius * 3;
  
  
  var radiuskm = radius3/1000;
  
  
  
  
     cityCircle = new google.maps.Circle({
              strokeColor: '#66ff66',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#66ff66',
              fillOpacity: 0.30,
              map: map,
              center: myLatlng,
              radius: radius
            });
  
  
  circles.push(cityCircle);
  
    cityCircle2 = new google.maps.Circle({
              strokeColor: '#ffff4d',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#ffff4d',
              fillOpacity: 0.30,
              map: map,
              center: myLatlng,
              radius: radius2
            });
  
  circles.push(cityCircle2);
    cityCircle3 = new google.maps.Circle({
              strokeColor: '#ff4d4d',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#ff4d4d',
              fillOpacity: 0.15,
              map: map,
              center: myLatlng,
              radius: radius3
            });
  
    circles.push(cityCircle3);
  
  
  
  
  
  
  var infowindow = new google.maps.InfoWindow();
  
  // To add the marker to the map, call setMap()
  
  
    // Create a new GeoFire instance at the random Firebase location
  
  
    // Create the locations for each fish
  
  
    // Create a GeoQuery centered at fish2
      geoQuery = geoFire.query({
      center: queryLocation,
      radius: radiuskm
    });
  
  
    // Attach event callbacks to the query
    var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location) {
        var stringlocation = String(location);
      log(key + " entered the query. Hi " + stringlocation);
  
     stringlocation = stringlocation + "," + String(key)
  
  collection.push(stringlocation);
  
  
  
    });
  
  
  
  
  
   var onReadyRegistration = geoQuery.on("ready", function() {
        log("*** 'ready' event fired - cancelling query ***");
        geoQuery.cancel();
        log(collection);
  
  
  
  for(var i=0; i<collection.length; i++){
  
  
         log(collection[i]);
  
  
  // this will return an array with strings "1", "2", etc.
  temp = collection[i].split(",");
  log(temp[0]);
  log(temp[1]);
  log(temp[2]);
  
  
  
  
  var x = myFunction(temp[0],temp[1],temp[2],i);   // Function is called, return value will end up in x
  log("aqui imprime x");
  log(x);
  
  
  
  
  
  
     }
  
  
      })
  
  
  
  var colormarker = "";
  
  function myFunction(lat,long,id,i) {
  
  
  
  
  
  ref2.orderByChild("idPaseador").equalTo(id).on("child_added", function(snapshot){
  //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
  
    var d = snapshot.val();
  
    {
  
    log(d.nombre) ;
    log(d.estatus);
    log(d.idPaseador);
  
  
    if (d.estatus == (1))
         {
             log(lat);
             log(long);
  
     log("ocupado");
     colormarker = "http://maps.google.com/mapfiles/ms/micons/red.png";
  
  
  
  
               }
  
       else
  
         {
  
     log("disponible");
     colormarker = "http://maps.google.com/mapfiles/ms/micons/green.png";
  
  
  
  
               }
  
          /*var pointMarker
  
          markers.push(pointMarker = new google.maps.Marker({
                map: map,
                icon: colormarker,
                position: new google.maps.LatLng(lat,long)
              }));*/
  
  
  
  
      var pointMarker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(lat,long),
      icon:colormarker,
  
      map: map
    });
  
  
  
  
      log(i);
      google.maps.event.addListener(pointMarker, 'click', (function(pointMarker, i) {
                  return function() {
  
                    infowindow.setContent(id+","+d.nombre+' <button onclick="abrirPaseadores(\'' + id + '\')">Ver</button>');
                    infowindow.open(map, pointMarker);
                  }
                })(pointMarker, i));
              markers.push(pointMarker);
  
  
      log(temp[2]);
  
  
  
  
  
    }
  
  
  });
  
               // Function returns the product of a and b
  
  log(colormarker);
                    return colormarker;
  }
  
    });
  
  
  
  
  
  
  
  
  
    /*************/
    /*  HELPERS  */
    /*************/
    /* Logs to the page instead of the console */
    function log(message) {
      
      /*
      var childDiv = document.createElement("div");
      var textNode = document.createTextNode(message);
      childDiv.appendChild(textNode);
      document.getElementById("log").appendChild(childDiv);
      
      */
    }
  
  })();
  
  
  
  
  
  function abrirPaseadores(id) {
    
    window.open('pag.html?uidPaseador='+id,'_blank');
  }