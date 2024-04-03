/* 
  Archivo JS donde se establecven las credenciales necesarias
  para poder ingresar a FireBase y poder obtener la información
  de la base de datos almacenada en el mismo servicio para poder
  utilizar la información almacenada en base a consultas jQuery
  para el llenado de tablas y actualización de información
*/

var config = {
    apiKey: "AIzaSyAweO2Lp7TAy6Dx94kWAwnRoaZ_N1dQSDk",
    authDomain: "caminandog-218818.firebaseapp.com",
    databaseURL: "https://caminandog-test-218818-bc038.firebaseio.com/",
    projectId: "caminandog-218818",
    storageBucket: "caminandog-218818.appspot.com",
    messagingSenderId: "684616064893"
  };
  firebase.initializeApp(config);