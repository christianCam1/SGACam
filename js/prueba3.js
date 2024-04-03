function busca_user_ultima() {
    // Variables de conexion a la base de datos y referencia a Usuarios        
  var db = firebase.database();
  var ref = db.ref("Agendados");

  var table = document.getElementById("tabla");

  //limpia la tabla
  table.innerHTML = "";

   //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

  var actual = 0;

 // Realiza una consulta ordenada por la propiedad "ultima_vez"
 ref.orderByChild("ultima_vez").once("value").then(snapshot => {
    var datos = snapshot.val();
    // itera sobre los datos recuperados de FB y se extraen las propiedades necesarias para mostrar en la DataTable
    for (const property in datos) {

      var d = datos[property]
      var fecha_ultima_vez = "Sin dato"
      var fecha_registro = "Sin dato"
      var uid = "Sin dato"
      var copiarUid = "Sin dato"
      var direccion = "No registrada"
      var generar_paseo = "Falta nombre o telefono del usuario"
      var nombre = d["nombre"] + " " + d["apellido_Paterno"] + " " + d["apellido_Materno"]
      var ultima_vez = "Sin dato"
      var registro = "Sin dato"
      var through = "Sin dato"
      var email = "Sin dato"
      var telefono1 = "Sin dato"
      var telefono2 = "Sin dato"
      var perros = "Sin dato"
      var fcompras = "Sin dato"


      if (d["uid"] == undefined || d["uid"] == "") { console.log(d["uid"]) } else {
        perros = '<button class="custom-button" onclick="busca_perros(\'' + d["uid"] + '\')">Ver</button>'
      }              

        var table = $('#tablaDatos').dataTable();

      // Se añade la fila a la dataTable
      tabla.rows.add([informacionUsuarios]);



    }
    // dibuja la tabla en la pagina
    tabla.draw()


 })
}

function busca_perros(query) {


    hideUsersTable();
    
    
    var db = firebase.database();
    var ref = db.ref("Perros").child(query);
    
    var table = document.getElementById("tablaPerrosbody");
    
    //limpia la tabla
    table.innerHTML = "";
    
     //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    
    ref.orderByChild("uidUsuario").once("value", function(snapshot){
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    //repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
    var exist = snapshot.val();
    if (exist == null) {
    
    table.innerHTML = 'Sin Resultados'
    
    
    } else {
    
    
    
    }
    
     snapshot.forEach(function(data) {
    
        var d = data.val();
    
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
    
    
    
        // asigna a las celdas el valir del Child especificado
        cell1.innerHTML = d.idPerro;
        cell2.innerHTML = d.nombre;
        cell3.innerHTML = d.comportamiento;
        cell4.innerHTML = d.raza;
        cell9.innerHTML = '<img src=\'' + d.foto + '\' width="200" height="200" />';
    
        if(d.vacunas != undefined){
    
            cell5.innerHTML = d.vacunas.desparacitado;
            cell6.innerHTML = d.vacunas.primeraDosis;
            cell7.innerHTML = d.vacunas.segundaDosis;
            cell8.innerHTML = d.vacunas.terceraDosis;
    
        } else{
    
            cell5.innerHTML = "Sin dato";
            cell6.innerHTML = "Sin dato";
            cell7.innerHTML = "Sin dato";
            cell8.innerHTML = "Sin dato";
    
        }
    
    
      });
    
    
    });
    
    }