//const db = firebase.database();

    // Mostrar la tabla con el id tablaAgenda
    $( "#tablaAgenda" ).show();
   // document.getElementById("demo").innerHTML ="Cargando paseos agendados......." ;

    // Variables para iniciar estancia en Firebase y referencia a 2 rutas dentro de Firebase
    var ref = db.ref("Agendados");
    var ref2 = db.ref("Usuarios");
    console.log(ref2);
    // Obtiene una referencia al elemento con el id tabla
    var table = document.getElementById("bodyInformacion");
    
    //limpia la tabla
    table.innerHTML = "";
    
    var query = "no_asignado";
    // Con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    // Realiza una consulta a la base de datos de Firebase para obtener todos los datos de la ubicación "Agendados"
    ref.orderByChild("id_paseador").startAt(query).endAt(query+"\uf8ff").once("value", function(snapshot){
    
      // Asigna el valor de snapshot a la variable exist
      var exist = snapshot.val();
      console.log(exist);
      if (exist == null) {
        //document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";
      } else {
        // Itera sobre los resultados de la consulta
        snapshot.forEach(function (child) {
          // Repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
          d = child.val();
    
          if (d.id_usr == "Y6nY3" || d.id_usr == "UulF5Mhqa2") {
            //document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";
          } else {
            //document.getElementById("demo").innerHTML = "Si  Hay Paseos Agendados";
    
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
           
            // asigna a las celdas el valir del Child especificado
    
              
            // 2da consulta para extraer informacion adicional y mostrarla en la tabla
            ref2
          .orderByChild("uid")
          .startAt(d.id_usr)
          .endAt(d.id_usr + "\uf8ff")
          .on("child_added", function (snapshotUser) {
            var d2 = snapshotUser.val();

            {
              cell1.innerHTML =
                d2.nombre +
                " " +
                d2.apellido_Paterno +
                " " +
                d2.apellido_Materno;
                
              cell2.innerHTML = d2.telefono1;
            // Asigna el valor al campo de entrada con id 'codigo'
            document.getElementById('codigo').value = d2.nombre + " " + d2.apellido_Paterno + " " + d2.apellido_Materno;
            }
          });
      }
        });
      }
    });
    
