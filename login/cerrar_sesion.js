function cerrarSesion(){

    var r = confirm("¿Estas seguro que quieres cerrar sesión?");
  
    if (r == true) {
            firebase.auth().signOut().then(function() {
             // Sign-out successful.
              }).catch(function(error) {
              // An error happened.
              });
    } else {
  
  
    }
  
  }