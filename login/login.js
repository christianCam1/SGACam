firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      console.log("nombre",displayName);
      console.log("email",email);
      console.log("photoURL",photoURL);
      console.log("UID",uid);

      var db = firebase.database();
      var ref = db.ref("Usuarios_Sistema");
 


      ref.orderByChild("uid").equalTo(uid).once("child_added", function(snapshot){

        if(snapshot.exists()){

          var rolUsuario = snapshot.val();
          {
            console.log(rolUsuario.rol);
            console.log(rolUsuario.uid);

          if(rolUsuario.rol == "monitoreo"){

                location.href = "mapa.html"


          } else if(rolUsuario.rol == "admin"){

                location.href = "mapa.html"
          


          } else if(rolUsuario.rol == "finanzas"){


                  location.href = "finanzas.html"
            


          } else if(rolUsuario.rol == "ventas"){


                location.href = "users.html"


          } else if(rolUsuario.rol == "desarrollador"){

                location.href = "users.html"

          } else if(rolUsuario.rol == "contactoUsuarios"){

                location.href = "users.html"
          }



          }

      }

        else{

          alert("Error: No estas registrado en el sistema");
          $('#carga').hide();

          firebase.auth().signOut().then(function() {
          // Sign-out successful.
          }).catch(function(error) {
          // An error happened.
          });

}

});


// alert("Sesion Iniciada");


// ...

    } else {

$("#cover").hide();

   }
});



function handleEnter(e) {
    if(e.keyCode === 13){
       login();
    }
  }
  
  
  function login(){
  
  $('#carga').show();
  
      var usuario = document.getElementById("login").value;
      var password = document.getElementById("password").value;
  
    usuario = usuario.trim()
  
    
      console.log("usuario ",usuario);
  
      console.log("password ",password);
  
      if(usuario == "" || password == ""){
  
          alert("No puede dejar campos vacios");
          $('#carga').hide();
  
      } else{ 
    
          firebase.auth().signInWithEmailAndPassword(usuario, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
           var errorMessage = error.message;
    // ...
           console.log(errorCode);
  
           if(errorCode == "auth/wrong-password"){
  
            alert("Error: El password introducido es incorrecto");
             $('#carga').hide();
  
           }else if(errorCode == "auth/invalid-email"){
  
             alert("Error: El e-mail introducido es incorrecto");
             $('#carga').hide();
           }else if(errorCode == "auth/user-not-found"){
            alert("Error: El e-mail introducido no esta registrado");
             $('#carga').hide();
  
           }
           else{
  
           alert("Error "+errorCode+"\n"+errorMessage);
           $('#carga').hide();
  
           }
          
          });
  
      }
  
  
  }