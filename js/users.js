var idUsuarioModal = ""
var telefonoUsuarioModal = ""
var nombreUsuarioModal = ""

function busca_user_ultima() {

// Configuracion de tipo de ordenamiento absoluto para ciertos valores
var nameType = $.fn.dataTable.absoluteOrder( {
    value: 'Sin dato', position: 'bottom'
} );

// Configuracion de DataTable con diferentes opciones
var  tabla = $('#tablaDatos').DataTable({

               search: { regex: true },
               pagingType: "full_numbers",
               paging:   true, //Muestra la paginacion y el combobox
               bFilter: true,
              //Muestra oculta filtro
              info:     true,

              columnDefs: [
              { "targets": [ 1 ], "visible": false },
              { "targets": [ 8 ], "visible": false },
              { "targets": [ 10 ], "visible": false },
              { "width": "15%", "targets": 0 },
              { "width": "25%", "targets": 6 },
              { "width": "7%", "targets": 13 },
              { "orderData": 8, "targets": 7},
              { "orderData": 10, "targets": 9},
              { "targets": 8, "type": nameType },
              { "targets": 10, "type": nameType }
              ],
                "order": [[ 7, "desc" ]],

                pageLength : 10,
                lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']],

                // Configuracion de idioma
                "language": {
                  "sProcessing":    "Procesando...",
                  "sLengthMenu":    "Mostrar _MENU_ registros",
                  "sZeroRecords":   "No se encontraron resultados",
                  "sEmptyTable":    "Ningún dato disponible en esta tabla",
                  "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                  "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
                  "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
                  "sInfoPostFix":   "",
                  "sSearch":        "Buscar:",
                  "sUrl":           "",
                  "sInfoThousands":  ",",
                  "sLoadingRecords": "Cargando...",
                  "oPaginate": {
                      "sFirst":    "Primero",
                      "sLast":    "Último",
                      "sNext":    "Siguiente",
                      "sPrevious": "Anterior"
                  },
                  "oAria": {
                  "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                  }
                }

            });
      
          // Oculta el filtro de busqueda predeterminado
          // Crea un nuevo campo de entrada que se muestra en su lugar       
          let oldInput = $('.dataTables_filter input');
          let newInput = $('<input>').on('change keyup input', () => {
              // Convierte el textto en una expresion regular
              let regex = textToRegex(newInput.val());
              oldInput.val(regex).trigger('input');
          });

          oldInput.hide().after(newInput);

          // Funcion para converir el texto de busqueda en una expresión regular
          function textToRegex(value) {
            return value
              .toLowerCase()
              .split('')
              .map(c => {
                if (/[-[\]{}()*+?.,\\^$|#]/.test(c)) {
                  return '\\' + c;
                }
                [
                  /[aàáâãäå]/, /[oòóôõöø]/, /[eèéêë]/, /[cç]/, /[dð]/,
                  /[ii̇ìíîï]/, /[uùúûü]/, /[nñ]/, /[sš]/, /[yÿý]/, /[zž]/
                ].some(r => {
                  if (r.test(c)) {
                    c = r.source;
                    return true;
                  }
                });
                return c;
              })
              .join('');
          }

  // Variables de conexion a la base de datos y referencia a Usuarios        
  var db = firebase.database();
  var ref = db.ref("Usuarios");

  var table = document.getElementById("tabla");

  //limpia la tabla
  table.innerHTML = "";

   //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)

  var actual = 0;

 // Realiza una consulta ordenada por la propiedad "ultima_vez"
 ref.orderByChild("ultima_vez").once("value").then(snapshot => {

    let lang = 'es-US' // you may use user's computer language: navigator.language || navigator.userLanguage
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:"numeric", minute:"numeric"};

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


      if (d["uid"] == undefined || d["uid"] == "") { uid = "SR : " + d; copiarUid = "SR : " + d; } else {
        uid = d.uid; copiarUid = '<button class="custom-button" onclick="copyToClipboard(\'' + d["uid"] + '\')">Copiar</button>';
        perros = '<button class="custom-button" onclick="busca_perros(\'' + d["uid"] + '\')">Ver</button>'
        fcompras = '<button class="custom-button" onclick="verFCompras(\'' + d["uid"] + '\')">Ver</button>';

      }

                if(d["direccion"] != undefined){ direccion = d["direccion"]+ '<button class="custom-button" onclick="verDireccion(\'' + d["latitud"] + '\',\'' + d["longitud"] + '\')">Ver</button>' }
                 if(nombre != "" && nombre != undefined && d.telefono1 != "" && d.telefono1 != undefined){ generar_paseo = '<button class="custom-button" onclick="generar_paseos(\'' + uid + '\',\'' + d["telefono1"] + '\',\'' + nombre + '\')">Realizar venta </button>'}

                  if(d["ultima_vez"] != undefined){ 
                       fecha_ultima_vez = new Date(d["ultima_vez"]);
                       fecha_ultima_vez = fecha_ultima_vez.toLocaleDateString(lang, options)
                       ultima_vez = d["ultima_vez"]

                  } 
                  if(d["creation_date"] != undefined){ 
                       fecha_registro = new Date(d["creation_date"]);
                       fecha_registro = fecha_registro.toLocaleDateString(lang, options)
                       registro = d["creation_date"]

                  }if(d["through"] != undefined){ through = d["through"] }
                 if( d["email"] != undefined){ email = d["email"] }
                  if( d["telefono1"] != undefined){ telefono1 = d["telefono1"] }
                    if( d["telefono2"] != undefined){ telefono2 = d["telefono2"] }

              // Informacion de cada usuario
               var informacionUsuarios = 

                 [

                         nombre,
                         uid,
                         copiarUid,
                         email,
                         telefono1,
                         telefono2,
                         direccion,
                         fecha_ultima_vez,
                         ultima_vez,
                         fecha_registro,
                         registro,
                         through,
                         perros,
                         generar_paseo,
                         '<button class="transparent_button" onclick="ver_chat(\'' + uid + '\')">  <img id="msjImg" src="img/mensaje.png"  width="30" height=" 30"> </button>',
                         fcompras

                ]



        var table = $('#tablaDatos').dataTable();

      // Se añade la fila a la dataTable
      tabla.rows.add([informacionUsuarios]);



    }
    // dibuja la tabla en la pagina
    tabla.draw()


 })





}


// Funcion para visualizar el chat
function ver_chat(uid) {

  // Abre una nueva ventana para visualizar el chat
  window.open('chatCaminandog.html?uid='+uid, '_blank');


}

// Funcion para visualizar la direccion, abre un mapa
function verDireccion(latitud,longitud) {
  // Abre en una nueva ventana un mapa para visualizar la dirección del usuario.
  window.open('direccion.html?latitud='+latitud+"&longitud="+longitud, '_blank');
}


function generar_paseos(uid,telefono,nombre) {


idUsuarioModal = uid
telefonoUsuarioModal = telefono
nombreUsuarioModal = nombre

  $('#myModal').modal('show');

}

function generar_compra_paseos() {


 window.open('pedirPaseo.html?uid='+idUsuarioModal+'&telefono='+telefonoUsuarioModal+'&nombre='+nombreUsuarioModal, '_blank');

}


function generar_compra_placas() {


window.open('compraPlaca.html?uid='+idUsuarioModal+'&telefono='+telefonoUsuarioModal+'&nombre='+nombreUsuarioModal, '_blank');

}



function generar_compra_vigencia() {


window.open('compraVigencia.html?uid='+idUsuarioModal+'&telefono='+telefonoUsuarioModal+'&nombre='+nombreUsuarioModal, '_blank');

}


function verFCompras(uid) {
  
  window.open('comprasfinuser.html?uid='+uid, '_blank');
}


window.onload = busca_user_ultima();


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




function hideUsersTable(){

$( "#tablaDatos" ).hide();
$(".dataTables_info").hide();
$(".dataTables_paginate").hide();
$(".dataTables_filter").hide();
$(".dataTables_length").hide();


$( "#tablaPerros" ).show();

$( "#regresar" ).show();


}

function showUsersTable(){

$( "#tablaDatos" ).show();
$(".dataTables_info").show();
$(".dataTables_paginate").show();
$(".dataTables_filter").show();
$(".dataTables_length").show();

$( "#tablaPerros" ).hide();

$( "#regresar" ).hide();
}




function copyToClipboard(val){

    var dummy = document.createElement("input");
    document.body.appendChild(dummy);

    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value=val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    
     var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}