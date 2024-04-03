// Definición de una función anónima autoejecutable para evitar contaminar el ámbito global
(function () {
  var firebaseData = {};
  // Función para obtener el nombre de la página actual sin extensión
  function getPageName() {
    // Encuentra la última barra en la URL y obtiene el nombre del archivo sin extensión
    var index = window.location.href.lastIndexOf("/") + 1,
      filenameWithExtension = window.location.href.substring(index),
      filename = filenameWithExtension.split(".")[0];

    return filename;
  }

  // Evento que se dispara cuando cambia el estado de autenticación del usuario
  firebase.auth().onAuthStateChanged(function (user) {
    // Si el usuario es autenticado
    if (user) {
      // Accede a las propiedades del usuario autenticado
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      console.log("nombre", displayName);
      console.log("email", email);
      console.log("photoURL", photoURL);
      console.log("UID", uid);

      //  alert("Sesion Iniciada");
      // Accede a la base de datos de Firebase y realiza una consulta
      var db = firebase.database();
      var ref = db.ref("Usuarios_Sistema");

      ref
        .orderByChild("uid")
        .equalTo(uid)
        .once("value", function (snapshot) {
           // Si hay datos que coinciden con el UID del usuario
          if (snapshot.exists()) {
            // Itera sobre los resultados de la consulta - Inicio de funcion
            snapshot.forEach(function (data) {
              var rolUsuario = data.val();
              console.log(rolUsuario.rol);
              console.log(rolUsuario.uid);

              // Realiza acciones basadas en el rol del usuario
              // Aqui se puede implementar la funcionalidad para el cambio
              // de region
              if (rolUsuario.rol == "admin") {
                $("#nav-placeholder").load("navBaradmin.html");
                $("#cover").hide();
                console.log(getPageName());
                // Realiza acciones basadas en el rol de usuario finanzas
              } else if (rolUsuario.rol == "finanzas") {
                  // Si la pagina obtenida es distinta a ... y distinta a ...
                  if (
                    getPageName() != "finanzas" &&
                    getPageName() != "finanzas_reporte"
                  ) {
                    // Mandar la locacion de la pagina a la siguiente pagina
                    location.href = "finanzas.html";
                  } else {
                    $("#nav-placeholder").load("navBarfinanzas.html");
                    $("#cover").hide();
                  }
                //Realiza acciones basadas en el rol de usuario desarrollador
              } else if (rolUsuario.rol == "desarrollador") {
                  // Si la pagina obtenida es distinta a ... y distinta a ...
                  if (
                    getPageName() == "finanzas" ||
                    getPageName() == "finanzas_reporte"
                  ) {
                    // Mandar la locacion de la pagina a la siguiente pagina
                    location.href = "users.html";
                  } else {
                    $("#nav-placeholder").load("navBardesarrollador.html");
                    $("#cover").hide();
                  }
                // Realiza acciones basadas en el rol contactoUsuarios
              } else if (rolUsuario.rol == "contactoUsuarios") {
                console;
                // Si la pagina obtenida es distinta a cualquiera de las siguientes...
                if (
                  getPageName() != "mapa" &&
                  getPageName() != "users" &&
                  getPageName() != "contacto" &&
                  getPageName() != "reporteVentasVendedor" &&
                  getPageName() != "recuperandog_admin" &&
                  getPageName() != "recuperandog_otorgar" &&
                  getPageName() != "paseosDiarios" &&
                  getPageName() != "pag" &&
                  getPageName() != "detalle_usuario" &&
                  getPageName() != "tracking" &&
                  getPageName() != "chat" &&
                  getPageName() != "chatCaminandog" &&
                  getPageName() != "chatsCaminandogTabla" &&
                  getPageName() != "chatsCaminandogCandidatosTabla" &&
                  getPageName() != "agenda" &&
                  getPageName() != "solicitudes" &&
                  getPageName() != "paseosActivos" &&
                  getPageName() != "ultimo_paseo" &&
                  getPageName() != "historico" &&
                  getPageName() != "terminado" &&
                  getPageName() != "iniciarChat" &&
                  getPageName() != "cortesia" &&
                  getPageName() != "direccion" &&
                  getPageName() != "usersNuevo" &&
                  getPageName() != "pedirPaseo" &&
                  getPageName() != "bbvaRecupSis" &&
                  getPageName() != "perros" &&
                  getPageName() != "recuperandog_foundmydog" &&
                  getPageName() != "recuperandogCompras" &&
                  getPageName() != "calificacionInterna" &&
                  getPageName() != "chatsCaminandogCandidatosTabla" &&
                  getPageName() != "chatCaminandogCandidato" &&
                  getPageName() != "candidatos_detalle" &&
                  getPageName() != "paseador_detalle" &&
                  getPageName() != "compraPlaca" &&
                  getPageName() != "compraVigencia" &&
                  getPageName() != "cambiarDireccion" &&
                  getPageName() != "paseosAUsuarios" &&
                  getPageName() != "fichaspau" &&
                  getPageName() != "comprasfinuser"
                ) {
                  // Mandar la locacion de la pagina a la siguiente pagina
                  location.href = "users.html";
                } else {
                  $("#nav-placeholder").load("navBarcontactoUsuarios.html");
                  $("#cover").hide();
                }
              }
            }); // Fin de función
          } else { //Mandar mensaje de error si el usuario no esta registrado en BD
            alert("Error: No estas registrado en el sistema");
            $("#carga").hide();

            firebase
              .auth()
              .signOut()
              .then(function () {
                // Sign-out successful.
              })
              .catch(function (error) {
                // An error happened.
              });
          }
        });

      // ...
    } else { //Si el usuario no esta autenticado, redirigir a la pagina de login
        location.href = "login.html";
    }
  });
})();
