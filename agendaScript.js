var diasActual = 0;
var orderActual = "";
var diasEleccionActual = "";

var diasAsignarPaseadorActual  = 0;
var orderAsignarPaseadorActual = "";
var timestamp_ultimo_paseo_individual = 0

var timestamp1 = 0
var timestamp2 = 0
var timestamp3 = 0
var timestamp4 = 0
var timestamp5 = 0
var timestamp6 = 0
var timestamp7 = 0
var timestamp8 = 0
var timestamp9 = 0
var timestamp10 = 0
var timestamp11 = 0
var timestamp12 = 0
var timestamp13 = 0
var timestamp14 = 0
var timestamp15 = 0
var timestamp16 = 0
var timestamp17 = 0
var timestamp18 = 0
var timestamp19 = 0
var timestamp20 = 0
var timestamp21 = 0
var timestamp22 = 0
var timestamp23 = 0
var timestamp24 = 0
var timestamp25 = 0
var timestamp26 = 0
var timestamp27 = 0
var timestamp28 = 0
var timestamp29 = 0
var timestamp30 = 0

var actual = 0;
var paseadoresUtilizados = ""

var ordenDatos;

           $(function () {
                  $('#datetimepicker1').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),


                  });

                   $('#datetimepicker2').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker3').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker4').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker5').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker6').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker7').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker8').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker9').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                 $('#datetimepicker10').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                 $('#datetimepicker11').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker12').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker13').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker14').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker15').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker16').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker17').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker18').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker19').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker20').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker21').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker22').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker23').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker24').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker25').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker26').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                   $('#datetimepicker27').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker28').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker29').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });

                  $('#datetimepicker30').datetimepicker({

                   format:'dddd,DD,MMMM, YYYY HH:mm',
                   minDate:new Date().setHours(0,0,0,0),

                  });


              });



function busca_paseos() {


var botonCancelar = document.getElementById("cancelar");
var botonGuardar = document.getElementById("guardar");

var botonCancelarAsignarPaseador = document.getElementById("cancelarAsignarPaseador");
var botonGuardarAsignarPaseador = document.getElementById("guardarAsignarPaseador");

var fecha1 = document.getElementById("datetimepicker1");
var fecha2 = document.getElementById("datetimepicker2");
var fecha3 = document.getElementById("datetimepicker3");
var fecha4 = document.getElementById("datetimepicker4");
var fecha5 = document.getElementById("datetimepicker5");
var fecha6 = document.getElementById("datetimepicker6");
var fecha7 = document.getElementById("datetimepicker7");
var fecha8 = document.getElementById("datetimepicker8");
var fecha9 = document.getElementById("datetimepicker9");
var fecha10 = document.getElementById("datetimepicker10");
var fecha11 = document.getElementById("datetimepicker11");
var fecha12 = document.getElementById("datetimepicker12");
var fecha13 = document.getElementById("datetimepicker13");
var fecha14 = document.getElementById("datetimepicker14");
var fecha15 = document.getElementById("datetimepicker15");
var fecha16 = document.getElementById("datetimepicker16");
var fecha17 = document.getElementById("datetimepicker17");
var fecha18 = document.getElementById("datetimepicker18");
var fecha19 = document.getElementById("datetimepicker19");
var fecha20 = document.getElementById("datetimepicker20");
var fecha21 = document.getElementById("datetimepicker21");
var fecha22 = document.getElementById("datetimepicker22");
var fecha23 = document.getElementById("datetimepicker23");
var fecha24 = document.getElementById("datetimepicker24");
var fecha25 = document.getElementById("datetimepicker25");
var fecha26 = document.getElementById("datetimepicker26");
var fecha27 = document.getElementById("datetimepicker27");
var fecha28 = document.getElementById("datetimepicker28");
var fecha29 = document.getElementById("datetimepicker29");
var fecha30 = document.getElementById("datetimepicker30");
var fecha1Label = document.getElementById("datetimepicker1Label");
var fecha2Label = document.getElementById("datetimepicker2Label");
var fecha3Label = document.getElementById("datetimepicker3Label");
var fecha4Label = document.getElementById("datetimepicker4Label");
var fecha5Label = document.getElementById("datetimepicker5Label");
var fecha6Label = document.getElementById("datetimepicker6Label");
var fecha7Label = document.getElementById("datetimepicker7Label");
var fecha8Label = document.getElementById("datetimepicker8Label");
var fecha9Label = document.getElementById("datetimepicker9Label");
var fecha10Label = document.getElementById("datetimepicker10Label");
var fecha11Label = document.getElementById("datetimepicker11Label");
var fecha12Label = document.getElementById("datetimepicker12Label");
var fecha13Label = document.getElementById("datetimepicker13Label");
var fecha14Label = document.getElementById("datetimepicker14Label");
var fecha15Label = document.getElementById("datetimepicker15Label");
var fecha16Label = document.getElementById("datetimepicker16Label");
var fecha17Label = document.getElementById("datetimepicker17Label");
var fecha18Label = document.getElementById("datetimepicker18Label");
var fecha19Label = document.getElementById("datetimepicker19Label");
var fecha20Label = document.getElementById("datetimepicker20Label");
var fecha21Label = document.getElementById("datetimepicker21Label");
var fecha22Label = document.getElementById("datetimepicker22Label");
var fecha23Label = document.getElementById("datetimepicker23Label");
var fecha24Label = document.getElementById("datetimepicker24Label");
var fecha25Label = document.getElementById("datetimepicker25Label");
var fecha26Label = document.getElementById("datetimepicker26Label");
var fecha27Label = document.getElementById("datetimepicker27Label");
var fecha28Label = document.getElementById("datetimepicker28Label");
var fecha29Label = document.getElementById("datetimepicker29Label");
var fecha30Label = document.getElementById("datetimepicker30Label");

var fecha1Ingresar = document.getElementById("paseo1");
var fecha2Ingresar = document.getElementById("paseo2");
var fecha3Ingresar = document.getElementById("paseo3");
var fecha4Ingresar = document.getElementById("paseo4");
var fecha5Ingresar = document.getElementById("paseo5");
var fecha6Ingresar = document.getElementById("paseo6");
var fecha7Ingresar = document.getElementById("paseo7");
var fecha8Ingresar = document.getElementById("paseo8");
var fecha9Ingresar = document.getElementById("paseo9");
var fecha10Ingresar = document.getElementById("paseo10");
var fecha11Ingresar = document.getElementById("paseo11");
var fecha12Ingresar = document.getElementById("paseo12");
var fecha13Ingresar = document.getElementById("paseo13");
var fecha14Ingresar = document.getElementById("paseo14");
var fecha15Ingresar = document.getElementById("paseo15");
var fecha16Ingresar = document.getElementById("paseo16");
var fecha17Ingresar = document.getElementById("paseo17");
var fecha18Ingresar = document.getElementById("paseo18");
var fecha19Ingresar = document.getElementById("paseo19");
var fecha20Ingresar = document.getElementById("paseo20");
var fecha21Ingresar = document.getElementById("paseo21");
var fecha22Ingresar = document.getElementById("paseo22");
var fecha23Ingresar = document.getElementById("paseo23");
var fecha24Ingresar = document.getElementById("paseo24");
var fecha25Ingresar = document.getElementById("paseo25");
var fecha26Ingresar = document.getElementById("paseo26");
var fecha27Ingresar = document.getElementById("paseo27");
var fecha28Ingresar = document.getElementById("paseo28");
var fecha29Ingresar = document.getElementById("paseo29");
var fecha30Ingresar = document.getElementById("paseo30");
var fecha1LabelIngresar = document.getElementById("paseo1Label");
var fecha2LabelIngresar = document.getElementById("paseo2Label");
var fecha3LabelIngresar = document.getElementById("paseo3Label");
var fecha4LabelIngresar = document.getElementById("paseo4Label");
var fecha5LabelIngresar = document.getElementById("paseo5Label");
var fecha6LabelIngresar = document.getElementById("paseo6Label");
var fecha7LabelIngresar = document.getElementById("paseo7Label");
var fecha8LabelIngresar = document.getElementById("paseo8Label");
var fecha9LabelIngresar = document.getElementById("paseo9Label");
var fecha10LabelIngresar = document.getElementById("paseo10Label");
var fecha11LabelIngresar = document.getElementById("paseo11Label");
var fecha12LabelIngresar = document.getElementById("paseo12Label");
var fecha13LabelIngresar = document.getElementById("paseo13Label");
var fecha14LabelIngresar = document.getElementById("paseo14Label");
var fecha15LabelIngresar = document.getElementById("paseo15Label");
var fecha16LabelIngresar = document.getElementById("paseo16Label");
var fecha17LabelIngresar = document.getElementById("paseo17Label");
var fecha18LabelIngresar = document.getElementById("paseo18Label");
var fecha19LabelIngresar = document.getElementById("paseo19Label");
var fecha20LabelIngresar = document.getElementById("paseo20Label");
var fecha21LabelIngresar = document.getElementById("paseo21Label");
var fecha22LabelIngresar = document.getElementById("paseo22Label");
var fecha23LabelIngresar = document.getElementById("paseo23Label");
var fecha24LabelIngresar = document.getElementById("paseo24Label");
var fecha25LabelIngresar = document.getElementById("paseo25Label");
var fecha26LabelIngresar = document.getElementById("paseo26Label");
var fecha27LabelIngresar = document.getElementById("paseo27Label");
var fecha28LabelIngresar = document.getElementById("paseo28Label");
var fecha29LabelIngresar = document.getElementById("paseo29Label");
var fecha30LabelIngresar = document.getElementById("paseo30Label");

  fecha1.style.display = "none";
  fecha2.style.display = "none";
  fecha3.style.display = "none";
  fecha4.style.display = "none";
  fecha5.style.display = "none";
  fecha6.style.display = "none";
  fecha7.style.display = "none";
  fecha8.style.display = "none";
  fecha9.style.display = "none";
  fecha10.style.display = "none";
  fecha11.style.display = "none";
  fecha12.style.display = "none";
  fecha13.style.display = "none";
  fecha14.style.display = "none";
  fecha15.style.display = "none";
  fecha16.style.display = "none";
  fecha17.style.display = "none";
  fecha18.style.display = "none";
  fecha19.style.display = "none";
  fecha20.style.display = "none";
  fecha21.style.display = "none";
  fecha22.style.display = "none";
  fecha23.style.display = "none";
  fecha24.style.display = "none";
  fecha25.style.display = "none";
  fecha26.style.display = "none";
  fecha27.style.display = "none";
  fecha28.style.display = "none";
  fecha29.style.display = "none";
  fecha30.style.display = "none";


  fecha1Label.style.display = "none";
  fecha2Label.style.display = "none";
  fecha3Label.style.display = "none";
  fecha4Label.style.display = "none";
  fecha5Label.style.display = "none";
  fecha6Label.style.display = "none";
  fecha7Label.style.display = "none";
  fecha8Label.style.display = "none";
  fecha9Label.style.display = "none";
  fecha10Label.style.display = "none";
  fecha11Label.style.display = "none";
  fecha12Label.style.display = "none";
  fecha13Label.style.display = "none";
  fecha14Label.style.display = "none";
  fecha15Label.style.display = "none";
  fecha16Label.style.display = "none";
  fecha17Label.style.display = "none";
  fecha18Label.style.display = "none";
  fecha19Label.style.display = "none";
  fecha20Label.style.display = "none";
  fecha21Label.style.display = "none";
  fecha22Label.style.display = "none";
  fecha23Label.style.display = "none";
  fecha24Label.style.display = "none";
  fecha25Label.style.display = "none";
  fecha26Label.style.display = "none";
  fecha27Label.style.display = "none";
  fecha28Label.style.display = "none";
  fecha29Label.style.display = "none";
  fecha30Label.style.display = "none";


  botonCancelar.style.display = "none";
  botonGuardar.style.display = "none";


  fecha1Ingresar.style.display = "none";
  fecha2Ingresar.style.display = "none";
  fecha3Ingresar.style.display = "none";
  fecha4Ingresar.style.display = "none";
  fecha5Ingresar.style.display = "none";
  fecha6Ingresar.style.display = "none";
  fecha7Ingresar.style.display = "none";
  fecha8Ingresar.style.display = "none";
  fecha9Ingresar.style.display = "none";
  fecha10Ingresar.style.display = "none";
  fecha11Ingresar.style.display = "none";
  fecha12Ingresar.style.display = "none";
  fecha13Ingresar.style.display = "none";
  fecha14Ingresar.style.display = "none";
  fecha15Ingresar.style.display = "none";
  fecha16Ingresar.style.display = "none";
  fecha17Ingresar.style.display = "none";
  fecha18Ingresar.style.display = "none";
  fecha19Ingresar.style.display = "none";
  fecha20Ingresar.style.display = "none";
  fecha21Ingresar.style.display = "none";
  fecha22Ingresar.style.display = "none";
  fecha23Ingresar.style.display = "none";
  fecha24Ingresar.style.display = "none";
  fecha25Ingresar.style.display = "none";
  fecha26Ingresar.style.display = "none";
  fecha27Ingresar.style.display = "none";
  fecha28Ingresar.style.display = "none";
  fecha29Ingresar.style.display = "none";
  fecha30Ingresar.style.display = "none";


  fecha1LabelIngresar.style.display = "none";
  fecha2LabelIngresar.style.display = "none";
  fecha3LabelIngresar.style.display = "none";
  fecha4LabelIngresar.style.display = "none";
  fecha5LabelIngresar.style.display = "none";
  fecha6LabelIngresar.style.display = "none";
  fecha7LabelIngresar.style.display = "none";
  fecha8LabelIngresar.style.display = "none";
  fecha9LabelIngresar.style.display = "none";
  fecha10LabelIngresar.style.display = "none";
  fecha11LabelIngresar.style.display = "none";
  fecha12LabelIngresar.style.display = "none";
  fecha13LabelIngresar.style.display = "none";
  fecha14LabelIngresar.style.display = "none";
  fecha15LabelIngresar.style.display = "none";
  fecha16LabelIngresar.style.display = "none";
  fecha17LabelIngresar.style.display = "none";
  fecha18LabelIngresar.style.display = "none";
  fecha19LabelIngresar.style.display = "none";
  fecha20LabelIngresar.style.display = "none";
  fecha21LabelIngresar.style.display = "none";
  fecha22LabelIngresar.style.display = "none";
  fecha23LabelIngresar.style.display = "none";
  fecha24LabelIngresar.style.display = "none";
  fecha25LabelIngresar.style.display = "none";
  fecha26LabelIngresar.style.display = "none";
  fecha27LabelIngresar.style.display = "none";
  fecha28LabelIngresar.style.display = "none";
  fecha29LabelIngresar.style.display = "none";
  fecha30LabelIngresar.style.display = "none";

  botonCancelarAsignarPaseador.style.display = "none";
  botonGuardarAsignarPaseador.style.display = "none";

  diasActual = 0
  orderActual = ""

  diasAsignarPaseadorActual = 0
  orderAsignarPaseadorActual = ""

  actual = 0;


timestamp1 = 0
timestamp2 = 0
timestamp3 = 0
timestamp4 = 0
timestamp5 = 0
timestamp6 = 0
timestamp7 = 0
timestamp8 = 0
timestamp9 = 0
timestamp10 = 0
timestamp11 = 0
timestamp12 = 0
timestamp13 = 0
timestamp14 = 0
timestamp15 = 0
timestamp16 = 0
timestamp17 = 0
timestamp18 = 0
timestamp19 = 0
timestamp20 = 0
timestamp21 = 0
timestamp22 = 0
timestamp23 = 0
timestamp24 = 0
timestamp25 = 0
timestamp26 = 0
timestamp27 = 0
timestamp28 = 0
timestamp29 = 0
timestamp30 = 0

fechaDefinitiva1 = ""
fechaDefinitiva2 = ""
fechaDefinitiva3 = ""
fechaDefinitiva4 = ""
fechaDefinitiva5 = ""
fechaDefinitiva6 = ""
fechaDefinitiva7 = ""
fechaDefinitiva8 = ""
fechaDefinitiva9 = ""
fechaDefinitiva10 = ""
fechaDefinitiva11 = ""
fechaDefinitiva12 = ""
fechaDefinitiva13 = ""
fechaDefinitiva14 = ""
fechaDefinitiva15 = ""
fechaDefinitiva16 = ""
fechaDefinitiva17 = ""
fechaDefinitiva18 = ""
fechaDefinitiva19 = ""
fechaDefinitiva20 = ""
fechaDefinitiva21 = ""
fechaDefinitiva22 = ""
fechaDefinitiva23 = ""
fechaDefinitiva24 = ""
fechaDefinitiva25 = ""
fechaDefinitiva26 = ""
fechaDefinitiva27 = ""
fechaDefinitiva28 = ""
fechaDefinitiva29 = ""
fechaDefinitiva30 = ""

ordenDatos = "";

paseadoresUtilizados = ""

// Mostrar la tabla con el id tablaAgenda
$( "#tablaAgenda" ).show();

// Inicializa una instancia de las funciones de Firebase
var functions = firebase.functions();

document.getElementById("demo").innerHTML ="Cargando paseos agendados......." ;

// Variables para iniciar estancia en Firebase y referencia a 2 rutas dentro de Firebase
var db = firebase.database();
var ref = db.ref("Agendados");
var ref2 = db.ref("Usuarios");

// Obtiene una referencia al elemento con el id tabla
var table = document.getElementById("tabla");

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
    document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";
  } else {
    // Itera sobre los resultados de la consulta
    snapshot.forEach(function (child) {
      // Repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
      d = child.val();

      if (d.id_usr == "Y6nY3" || d.id_usr == "UulF5Mhqa2") {
        document.getElementById("demo").innerHTML = "No Hay Paseos Agendados";
      } else {
        document.getElementById("demo").innerHTML = "Si  Hay Paseos Agendados";

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
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        var cell15 = row.insertCell(14);
        var cell16 = row.insertCell(15);
        var cell17 = row.insertCell(16);
        var cell18 = row.insertCell(17);
        // asigna a las celdas el valir del Child especificado

        cell1.innerHTML = d.order_id;

        cell4.innerHTML = d.dias;
        var nuevo_tiempo = "";
        if (d.tiempo_paseo == 1) {
          nuevo_tiempo = "1 Hora";
        } else if (d.tiempo_paseo == 2) {
          nuevo_tiempo = "2 Horas";
        } else if (d.tiempo_paseo == 0.5) {
          nuevo_tiempo = "30 Minutos";
        } else if (d.tiempo_paseo == 1.5) {
          nuevo_tiempo = "90 Minutos";
        } else {
          nuevo_tiempo = d.tiempo_paseo;
        }    

        cell5.innerHTML = nuevo_tiempo;
        cell6.innerHTML = d.num_perros;
        cell7.innerHTML = d.categoria;
        cell8.innerHTML = d.perrosNombre;
        cell9.innerHTML = d.direccion;
        cell10.innerHTML = procesarDiasEleccion(d.diasEleccion);//convertirFecha(d.diasEleccion);
        cell11.innerHTML = '<button class="custom-button" onclick="cambiarCategoria(\'' + d.order_id + "','" + d.categoria + "')\">Cambiar</button>";
        cell12.innerHTML = '<button class="custom-button" onclick="cambiarFechas(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + "')\">Cambiar</button>";
        cell13.innerHTML = '<button class="custom-button" onclick="verDireccion(\'' + d.latitud + "','" + d.longitud + "')\">Ver</button>";
        cell14.innerHTML = '<button class="custom-button" onclick="cambiar_ubicacion(\'' + d.order_id + "','" + d.latitud + "','" + d.longitud + "')\">Cambiar ubicación</button>";
        cell15.innerHTML = '<button class="custom-button" onclick="asignarPaseador(\'' + d.order_id + "')\">Asignar</button>";
        cell16.innerHTML = '<button class="custom-button" onclick="asignarPaseadorIndividual(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + "')\">Asignar</button>";
        cell17.innerHTML = '<button class="custom-button" onclick="eliminarPaseo(\'' + d.order_id + "','" + d.diasEleccion + "','" + d.dias + "')\">Eliminar</button>";
        cell18.innerHTML = '<button class="custom-button" onclick="verFCompras(\'' + d.id_usr + "')\">Ver</button>";

        // 2da consulta para extraer informacion adicional y mostrarla en la tabla
        ref2
          .orderByChild("uid")
          .startAt(d.id_usr)
          .endAt(d.id_usr + "\uf8ff")
          .on("child_added", function (snapshotUser) {
            var d2 = snapshotUser.val();

            {
              cell2.innerHTML =
                d2.nombre +
                " " +
                d2.apellido_Paterno +
                " " +
                d2.apellido_Materno;
              cell3.innerHTML = d2.telefono1;
            }
          });
      }
    });
  }
});

}
// Función para formatear y mostrar las fechas
function formatearFechas(arrayTimestamps) {

  let fechasFormateadas = "";

  arrayTimestamps.forEach(timestampString => {
    const timestamp = parseInt(timestampString, 10);

    if (!isNaN(timestamp)) {
      // const fecha = new Date(timestamp);
      // const dia = fecha.getDate();
      // const mes = fecha.getMonth() + 1;
      // const año = fecha.getFullYear();
      // const horas = fecha.getHours();
      // const minutos = fecha.getMinutes();
      // const segundos = fecha.getSeconds();
      const date = new Date(timestamp);

      // Obtener el nombre del día de la semana
      const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const nombreDia = diasSemana[date.getDay()];
      const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const nombreMes = meses[date.getMonth()];
      const hora = date.getHours() + ':' + date.getMinutes();

      const fechaFormateada = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${hora} `;;
      
      // Agregar la fecha formateada al string
      fechasFormateadas += `${fechaFormateada}, `;
    } else {
      console.error(`Error: "${timestampString}" no es un timestamp válido.`);
    }
  });

  // Eliminar la última coma y espacio extra
  fechasFormateadas = fechasFormateadas.slice(0, -2);

  return fechasFormateadas;
}

// Función para procesar las fechas seleccionadas
function procesarDiasEleccion(entrada) {
  if (entrada) {
    const timestampsArray = entrada.split(',');
    return formatearFechas(timestampsArray);
  } else {
    console.error("Error: La entrada es undefined o nula.");
    return "";  
  }
}


// Funcion para eliminar un paseo
function eliminarPaseo(order_id,diasEleccion,dias){

// Mensaje de confirmacion para eliminar el paseo
var r = confirm("¿Estas seguro que quieres eliminar este paseo?");

// Si es verdadero, se realizan las acciones dentro de la condicion
  if (r == true) {

          // Regerencia a la base de datos
           var db = firebase.database();
           var agendado = db.ref("Agendados")
           var agendado_eliminar = db.ref("Agendados").child(order_id)
           var agendadoRespaldo = db.ref("Agendados_eliminados")
           var finanzas = db.ref("Finanzas").child(order_id)
           var finanzas_eliminados = db.ref("Finanzas_eliminados").child(order_id)

           // Esta funcion hace un respaldo de la informacion eliminada
           agendado.orderByChild("order_id").equalTo(order_id).once("value", function(snapshot){

        //  var snap = snapshot.val();

            console.log(snapshot.val())

            // Guarda la  informacion en esta ruta con ayuda de snapshot
            agendadoRespaldo.update(snapshot.val())

            // Elimina el paseo de la ubicacion original con remove()
            agendado_eliminar.remove().then(function() {  

                // Regista el cambio en la ubicacion siguiente para mantener un historial de modificaciones
                var key = db.ref("cambios_ordenes").push().getKey();
                var agendadosModificaciones = db.ref("cambios_ordenes");
                var currentUID = firebase.auth().currentUser.uid;

                // Actualiza la informacion
                agendadosModificaciones.child(key).update({ 

                  id_orden: order_id,
                  uid: currentUID,
                  timestamp: firebase.database.ServerValue.TIMESTAMP,
                  cambio: "eliminacion agenda",
                  inicial: "",
                  final: ""

                })

                // Comprueba si el paseo existe en la ubicacion de finanzas
                finanzas.orderByChild("order_id").equalTo(order_id).once("value", function(snapshotFinanzas){
                  // Si existe, respalda la informacion completa
                  if (snapshotFinanzas.exists()) {
                    finanzas_eliminados.update(snapshot.val())
                    location.reload()
                    // En caso contrario, notifica que no existe
                  } else{
                      console.log("No existe en finanzas")
                      location.reload(); // Recarga la pagina
                    }
                })

            }).catch(function(error) {
       
                });
        })
  } else{
    }
}

// Funcion para asignar paseos de forma individual
function asignarPaseadorIndividual(order_id_metodo,diasEleccion,dias){

console.log("orden busqueda "+order_id_metodo)

// Variables de referencia para Firebase y ruta de referencia
var db = firebase.database();
var refAgG = db.ref("Agendados");

// Esta función se ejecuta una vez que se ha obtenido el resultado de la consulta.
refAgG.orderByChild("order_id").equalTo(order_id_metodo).once("value", function(snapshot){

  // Recorre cada resultado almacenado en snapshot
    snapshot.forEach(function(child) {

      // Se obtiene el valor de iteracion
      d = child.val();
      ordenDatos = d

      console.log("orden datos ",ordenDatos )
    })

});


$( "#tablaAgenda" ).hide();

diasAsignarPaseadorActual = dias
orderAsignarPaseadorActual = order_id_metodo

var botonCancelarAsignarPaseador = document.getElementById("cancelarAsignarPaseador");
var botonGuardarAsignarPaseador = document.getElementById("guardarAsignarPaseador");

var fecha1Ingresar = document.getElementById("paseo1");
var fecha2Ingresar = document.getElementById("paseo2");
var fecha3Ingresar = document.getElementById("paseo3");
var fecha4Ingresar = document.getElementById("paseo4");
var fecha5Ingresar = document.getElementById("paseo5");
var fecha6Ingresar = document.getElementById("paseo6");
var fecha7Ingresar = document.getElementById("paseo7");
var fecha8Ingresar = document.getElementById("paseo8");
var fecha9Ingresar = document.getElementById("paseo9");
var fecha10Ingresar = document.getElementById("paseo10");
var fecha11Ingresar = document.getElementById("paseo11");
var fecha12Ingresar = document.getElementById("paseo12");
var fecha13Ingresar = document.getElementById("paseo13");
var fecha14Ingresar = document.getElementById("paseo14");
var fecha15Ingresar = document.getElementById("paseo15");
var fecha16Ingresar = document.getElementById("paseo16");
var fecha17Ingresar = document.getElementById("paseo17");
var fecha18Ingresar = document.getElementById("paseo18");
var fecha19Ingresar = document.getElementById("paseo19");
var fecha20Ingresar = document.getElementById("paseo20");
var fecha21Ingresar = document.getElementById("paseo21");
var fecha22Ingresar = document.getElementById("paseo22");
var fecha23Ingresar = document.getElementById("paseo23");
var fecha24Ingresar = document.getElementById("paseo24");
var fecha25Ingresar = document.getElementById("paseo25");
var fecha26Ingresar = document.getElementById("paseo26");
var fecha27Ingresar = document.getElementById("paseo27");
var fecha28Ingresar = document.getElementById("paseo28");
var fecha29Ingresar = document.getElementById("paseo29");
var fecha30Ingresar = document.getElementById("paseo30");

var fecha1LabelIngresar = document.getElementById("paseo1Label");
var fecha2LabelIngresar = document.getElementById("paseo2Label");
var fecha3LabelIngresar = document.getElementById("paseo3Label");
var fecha4LabelIngresar = document.getElementById("paseo4Label");
var fecha5LabelIngresar = document.getElementById("paseo5Label");
var fecha6LabelIngresar = document.getElementById("paseo6Label");
var fecha7LabelIngresar = document.getElementById("paseo7Label");
var fecha8LabelIngresar = document.getElementById("paseo8Label");
var fecha9LabelIngresar = document.getElementById("paseo9Label");
var fecha10LabelIngresar = document.getElementById("paseo10Label");
var fecha11LabelIngresar = document.getElementById("paseo11Label");
var fecha12LabelIngresar = document.getElementById("paseo12Label");
var fecha13LabelIngresar = document.getElementById("paseo13Label");
var fecha14LabelIngresar = document.getElementById("paseo14Label");
var fecha15LabelIngresar = document.getElementById("paseo15Label");
var fecha16LabelIngresar = document.getElementById("paseo16Label");
var fecha17LabelIngresar = document.getElementById("paseo17Label");
var fecha18LabelIngresar = document.getElementById("paseo18Label");
var fecha19LabelIngresar = document.getElementById("paseo19Label");
var fecha20LabelIngresar = document.getElementById("paseo20Label");
var fecha21LabelIngresar = document.getElementById("paseo21Label");
var fecha22LabelIngresar = document.getElementById("paseo22Label");
var fecha23LabelIngresar = document.getElementById("paseo23Label");
var fecha24LabelIngresar = document.getElementById("paseo24Label");
var fecha25LabelIngresar = document.getElementById("paseo25Label");
var fecha26LabelIngresar = document.getElementById("paseo26Label");
var fecha27LabelIngresar = document.getElementById("paseo27Label");
var fecha28LabelIngresar = document.getElementById("paseo28Label");
var fecha29LabelIngresar = document.getElementById("paseo29Label");
var fecha30LabelIngresar = document.getElementById("paseo30Label");

      botonCancelarAsignarPaseador.style.display = "block";
      botonGuardarAsignarPaseador.style.display = "block";

      if(dias == 1){

        fecha1Ingresar.style.display = "block";
        fecha1LabelIngresar.style.display = "block";

      } else if(dias == 2){

        fecha1Ingresar.style.display = "block";
        fecha2Ingresar.style.display = "block";

        fecha1LabelIngresar.style.display = "block";
        fecha2LabelIngresar.style.display = "block";

      } else if(dias == 3){

        fecha1Ingresar.style.display = "block";
        fecha2Ingresar.style.display = "block";
        fecha3Ingresar.style.display = "block";

        fecha1LabelIngresar.style.display = "block";
        fecha2LabelIngresar.style.display = "block";
        fecha3LabelIngresar.style.display = "block";
      } else if(dias == 5){

        fecha1Ingresar.style.display = "block";
        fecha2Ingresar.style.display = "block";
        fecha3Ingresar.style.display = "block";
        fecha4Ingresar.style.display = "block";
        fecha5Ingresar.style.display = "block";

        fecha1LabelIngresar.style.display = "block";
        fecha2LabelIngresar.style.display = "block";
        fecha3LabelIngresar.style.display = "block";
        fecha4LabelIngresar.style.display = "block";
        fecha5LabelIngresar.style.display = "block";

      } else if(dias == 10){

        fecha1Ingresar.style.display = "block";
        fecha2Ingresar.style.display = "block";
        fecha3Ingresar.style.display = "block";
        fecha4Ingresar.style.display = "block";
        fecha5Ingresar.style.display = "block";
        fecha6Ingresar.style.display = "block";
        fecha7Ingresar.style.display = "block";
        fecha8Ingresar.style.display = "block";
        fecha9Ingresar.style.display = "block";
        fecha10Ingresar.style.display = "block";

        fecha1LabelIngresar.style.display = "block";
        fecha2LabelIngresar.style.display = "block";
        fecha3LabelIngresar.style.display = "block";
        fecha4LabelIngresar.style.display = "block";
        fecha5LabelIngresar.style.display = "block";
        fecha6LabelIngresar.style.display = "block";
        fecha7LabelIngresar.style.display = "block";
        fecha8LabelIngresar.style.display = "block";
        fecha9LabelIngresar.style.display = "block";
        fecha10LabelIngresar.style.display = "block";

      }else if(dias == 30){

        fecha1Ingresar.style.display = "block";
        fecha2Ingresar.style.display = "block";
        fecha3Ingresar.style.display = "block";
        fecha4Ingresar.style.display = "block";
        fecha5Ingresar.style.display = "block";
        fecha6Ingresar.style.display = "block";
        fecha7Ingresar.style.display = "block";
        fecha8Ingresar.style.display = "block";
        fecha9Ingresar.style.display = "block";
        fecha10Ingresar.style.display = "block";
        fecha11Ingresar.style.display = "block";
        fecha12Ingresar.style.display = "block";
        fecha13Ingresar.style.display = "block";
        fecha14Ingresar.style.display = "block";
        fecha15Ingresar.style.display = "block";
        fecha16Ingresar.style.display = "block";
        fecha17Ingresar.style.display = "block";
        fecha18Ingresar.style.display = "block";
        fecha19Ingresar.style.display = "block";
        fecha20Ingresar.style.display = "block";
        fecha21Ingresar.style.display = "block";
        fecha22Ingresar.style.display = "block";
        fecha23Ingresar.style.display = "block";
        fecha24Ingresar.style.display = "block";
        fecha25Ingresar.style.display = "block";
        fecha26Ingresar.style.display = "block";
        fecha27Ingresar.style.display = "block";
        fecha28Ingresar.style.display = "block";
        fecha29Ingresar.style.display = "block";
        fecha30Ingresar.style.display = "block";


        fecha1LabelIngresar.style.display = "block";
        fecha2LabelIngresar.style.display = "block";
        fecha3LabelIngresar.style.display = "block";
        fecha4LabelIngresar.style.display = "block";
        fecha5LabelIngresar.style.display = "block";
        fecha6LabelIngresar.style.display = "block";
        fecha7LabelIngresar.style.display = "block";
        fecha8LabelIngresar.style.display = "block";
        fecha9LabelIngresar.style.display = "block";
        fecha10LabelIngresar.style.display = "block";
        fecha11LabelIngresar.style.display = "block";
        fecha12LabelIngresar.style.display = "block";
        fecha13LabelIngresar.style.display = "block";
        fecha14LabelIngresar.style.display = "block";
        fecha15LabelIngresar.style.display = "block";
        fecha16LabelIngresar.style.display = "block";
        fecha17LabelIngresar.style.display = "block";
        fecha18LabelIngresar.style.display = "block";
        fecha19LabelIngresar.style.display = "block";
        fecha20LabelIngresar.style.display = "block";
        fecha21LabelIngresar.style.display = "block";
        fecha22LabelIngresar.style.display = "block";
        fecha23LabelIngresar.style.display = "block";
        fecha24LabelIngresar.style.display = "block";
        fecha25LabelIngresar.style.display = "block";
        fecha26LabelIngresar.style.display = "block";
        fecha27LabelIngresar.style.display = "block";
        fecha28LabelIngresar.style.display = "block";
        fecha29LabelIngresar.style.display = "block";
        fecha30LabelIngresar.style.display = "block";

      }


var array = diasEleccion.split(",");
var fecha = diasEleccion.split(" ");

    for (var io = 0; io < dias ; io++) {

      // Divide la fecha en partes y almacena en un array nuevo
       var fecha1 = array[io].split(" ");
       var mes = ""

       // Condicionales para comparar el tercer elemento del arreglo, el cual es el mes
       if(fecha1[2] == "enero"){
              mes = "1";
              mesenviar = "0";
       }else if (fecha1[2] == "febrero"){
              mes = "2";
              mesenviar = "1";
       }else if (fecha1[2] == "marzo"){
              mes = "3";
              mesenviar = "2";
       }else if (fecha1[2] == "abril"){
              mes = "4";
              mesenviar = "3";
       }else if (fecha1[2] == "mayo"){
              mes = "5";
              mesenviar = "4";
       }else if (fecha1[2] == "junio"){
              mes = "6";
              mesenviar = "5";
       }else if (fecha1[2] == "julio"){
              mes = "7";
              mesenviar = "6";
       }else if (fecha1[2] == "agosto"){
              mes = "8";
              mesenviar = "7";
       }else if (fecha1[2] == "septiembre"){
              mes = "9";
              mesenviar = "8";
       }else if (fecha1[2] == "octubre"){
              mes = "10";
              mesenviar = "9";
       }else if (fecha1[2] == "noviembre"){
              mes = "11";
              mesenviar = "10";
       }else if (fecha1[2] == "diciembre"){
              mes = "12";
              mesenviar = "11";
       }

      // Construye una cadena de fecha en un formato específico con los elementos de fecha1
      var fechaDefinitiva = fecha1[3]+"-"+mes+"-"+fecha1[1]+"T"+fecha1[6]+":00";
      var fechatimestamp = fecha1[6].split(":");

      console.log(fecha1[3],mesenviar,fecha1[1],fechatimestamp[0],fechatimestamp[1],'00');

      //Convierte la cadena de fecha en un objeto Date y obtiene su valor de tiempo (timestamp) que se utiliza más adelante.
      var datum = new Date(fecha1[3],mesenviar,fecha1[1],fechatimestamp[0],fechatimestamp[1],'00');
      var datumFirebase = datum.getTime();


      if(io == 0){

        fecha1LabelIngresar.innerHTML = "Paseo 1 "+array[io]
        timestamp1 = datumFirebase
        fechaDefinitiva1 = fechaDefinitiva

      }else if(io == 1){

        fecha2LabelIngresar.innerHTML = "Paseo 2 "+array[io]
        timestamp2 = datumFirebase
        fechaDefinitiva2 = fechaDefinitiva

      }else if(io == 2){

        fecha3LabelIngresar.innerHTML = "Paseo 3 "+array[io]
        timestamp3 = datumFirebase
        fechaDefinitiva3 = fechaDefinitiva

      }else if(io == 3){

        fecha4LabelIngresar.innerHTML = "Paseo 4 "+array[io]
        timestamp4 = datumFirebase
        fechaDefinitiva4 = fechaDefinitiva

      }else if(io == 4){

        fecha5LabelIngresar.innerHTML = "Paseo 5 "+array[io]
        timestamp5 = datumFirebase
        fechaDefinitiva5 = fechaDefinitiva

      }else if(io == 5){

        fecha6LabelIngresar.innerHTML = "Paseo 6 "+array[io]
        timestamp6 = datumFirebase
        fechaDefinitiva6 = fechaDefinitiva

      }else if(io == 6){

        fecha7LabelIngresar.innerHTML = "Paseo 7 "+array[io]
        timestamp7 = datumFirebase
        fechaDefinitiva7 = fechaDefinitiva

      }else if(io == 7){

        fecha8LabelIngresar.innerHTML = "Paseo 8 "+array[io]
        timestamp8 = datumFirebase
        fechaDefinitiva8 = fechaDefinitiva

      }else if(io == 8){

        fecha9LabelIngresar.innerHTML = "Paseo 9 "+array[io]
        timestamp9 = datumFirebase
        fechaDefinitiva9 = fechaDefinitiva

      }else if(io == 9){

        fecha10LabelIngresar.innerHTML = "Paseo 10 "+array[io]
        timestamp10 = datumFirebase
        fechaDefinitiva10 = fechaDefinitiva

      } if(io == 10){

        fecha11LabelIngresar.innerHTML = "Paseo 11 "+array[io]
        timestamp11 = datumFirebase
        fechaDefinitiva11 = fechaDefinitiva

      }else if(io == 11){

        fecha12LabelIngresar.innerHTML = "Paseo 12 "+array[io]
        timestamp12 = datumFirebase
        fechaDefinitiva12 = fechaDefinitiva

      }else if(io == 12){

        fecha13LabelIngresar.innerHTML = "Paseo 13 "+array[io]
        timestamp13 = datumFirebase
        fechaDefinitiva13 = fechaDefinitiva

      }else if(io == 13){

        fecha14LabelIngresar.innerHTML = "Paseo 14 "+array[io]
        timestamp14 = datumFirebase
        fechaDefinitiva14 = fechaDefinitiva

      }else if(io == 14){

        fecha15LabelIngresar.innerHTML = "Paseo 15 "+array[io]
        timestamp15 = datumFirebase
        fechaDefinitiva15 = fechaDefinitiva

      }else if(io == 15){

        fecha16LabelIngresar.innerHTML = "Paseo 16 "+array[io]
        timestamp16 = datumFirebase
        fechaDefinitiva16 = fechaDefinitiva

      }else if(io == 16){

        fecha17LabelIngresar.innerHTML = "Paseo 17 "+array[io]
        timestamp17 = datumFirebase
        fechaDefinitiva17 = fechaDefinitiva

      }else if(io == 17){

        fecha18LabelIngresar.innerHTML = "Paseo 18 "+array[io]
        timestamp18 = datumFirebase
        fechaDefinitiva18 = fechaDefinitiva

      }else if(io == 18){

        fecha19LabelIngresar.innerHTML = "Paseo 19 "+array[io]
        timestamp19 = datumFirebase
        fechaDefinitiva19 = fechaDefinitiva

      }else if(io == 19){

        fecha20LabelIngresar.innerHTML = "Paseo 20 "+array[io]
        timestamp20 = datumFirebase
        fechaDefinitiva20 = fechaDefinitiva

      } if(io == 20){

        fecha21LabelIngresar.innerHTML = "Paseo 21 "+array[io]
        timestamp21 = datumFirebase
        fechaDefinitiva21 = fechaDefinitiva

      }else if(io == 21){

        fecha22LabelIngresar.innerHTML = "Paseo 22 "+array[io]
        timestamp22 = datumFirebase
        fechaDefinitiva22 = fechaDefinitiva

      }else if(io == 22){

        fecha23LabelIngresar.innerHTML = "Paseo 23 "+array[io]
        timestamp23 = datumFirebase
        fechaDefinitiva23 = fechaDefinitiva

      }else if(io == 23){

        fecha24LabelIngresar.innerHTML = "Paseo 24 "+array[io]
        timestamp24 = datumFirebase
        fechaDefinitiva24 = fechaDefinitiva

      }else if(io == 24){

        fecha25LabelIngresar.innerHTML = "Paseo 25 "+array[io]
        timestamp25 = datumFirebase
        fechaDefinitiva25 = fechaDefinitiva

      }else if(io == 25){

        fecha26LabelIngresar.innerHTML = "Paseo 26 "+array[io]
        timestamp26 = datumFirebase
        fechaDefinitiva26 = fechaDefinitiva

      }else if(io == 26){

        fecha27LabelIngresar.innerHTML = "Paseo 27 "+array[io]
        timestamp27 = datumFirebase
        fechaDefinitiva27 = fechaDefinitiva

      }else if(io == 27){

        fecha28LabelIngresar.innerHTML = "Paseo 28 "+array[io]
        timestamp28 = datumFirebase
        fechaDefinitiva28 = fechaDefinitiva

      }else if(io == 28){

        fecha29LabelIngresar.innerHTML = "Paseo 29 "+array[io]
        timestamp29 = datumFirebase
        fechaDefinitiva29 = fechaDefinitiva

      }else if(io == 29){

        fecha30LabelIngresar.innerHTML = "Paseo 30 "+array[io]
        timestamp30 = datumFirebase
        fechaDefinitiva30 = fechaDefinitiva

      }

    }


}


// Funcion para cambiar de categoria
function cambiarCategoria(order_id,categoria) {
var txt;
var cat = prompt("Cambiar categoria, introduce la letra correspondiente\n\nb = Basico\ns = Sport\nr = Rukys\nv = VIP\n");

cat = cat.toLowerCase();

  if (cat == "b" || cat == "s" || cat == "r" || cat == "v") {

  $('#carga2').show();

  // Entrada a firebase y referencia a la ruta
  var db = firebase.database();
  var agendados = db.ref("Agendados").child(order_id);

  // genera una clave unica para un nuevo registro
  var key = db.ref("cambios_ordenes").push().getKey();
  var agendadosModificaciones = db.ref("cambios_ordenes");
  var currentUID = firebase.auth().currentUser.uid;


  var nuevaCategoria

        if(cat == "b"){
          nuevaCategoria = "basico"
        } else if(cat == "s"){
          nuevaCategoria = "sport"
        }else if(cat == "r"){
          nuevaCategoria = "rukys"
        }else if(cat == "v"){

          nuevaCategoria = "vip"
        }

        // Actualiza la categoria del paseo
        agendados.update({ 

          categoria: nuevaCategoria,

        }).then(function(){  // Si la actualización se realizo con exito            

          // Se realiza la operacion de actualizacion en el nodo "cambios_ordenes"
          agendadosModificaciones.child(key).update({ 

            id_orden: order_id,
            uid: currentUID,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            cambio: "categoria",
            inicial: categoria,
            final: nuevaCategoria

        })  
          $('#carga2').hide(); // Oculta este elemento
          alert("La categoria se ha cambiado exitosamente");
          busca_paseos(); // Llamada a la funcion

        }).catch(function(error) {
           console.log("Ocurrio un error");
        });

  } else {

    alert("La letra introducida es incorrecta");
  }

}



function cambiarFechas(order_id,diasEleccion,dias) {

  // Declaración de variables
  diasActual = dias
  orderActual = order_id
  diasEleccionActual = diasEleccion

  $( "#tablaAgenda" ).hide(); 

  var botonCancelar = document.getElementById("cancelar");
  var botonGuardar= document.getElementById("guardar");

  var fecha1 = document.getElementById("datetimepicker1");
  var fecha2 = document.getElementById("datetimepicker2");
  var fecha3 = document.getElementById("datetimepicker3");
  var fecha4 = document.getElementById("datetimepicker4");
  var fecha5 = document.getElementById("datetimepicker5");
  var fecha6 = document.getElementById("datetimepicker6");
  var fecha7 = document.getElementById("datetimepicker7");
  var fecha8 = document.getElementById("datetimepicker8");
  var fecha9 = document.getElementById("datetimepicker9");
  var fecha10 = document.getElementById("datetimepicker10");
  var fecha11 = document.getElementById("datetimepicker11");
  var fecha12 = document.getElementById("datetimepicker12");
  var fecha13 = document.getElementById("datetimepicker13");
  var fecha14 = document.getElementById("datetimepicker14");
  var fecha15 = document.getElementById("datetimepicker15");
  var fecha16 = document.getElementById("datetimepicker16");
  var fecha17 = document.getElementById("datetimepicker17");
  var fecha18 = document.getElementById("datetimepicker18");
  var fecha19 = document.getElementById("datetimepicker19");
  var fecha20 = document.getElementById("datetimepicker20");
  var fecha21 = document.getElementById("datetimepicker21");
  var fecha22 = document.getElementById("datetimepicker22");
  var fecha23 = document.getElementById("datetimepicker23");
  var fecha24 = document.getElementById("datetimepicker24");
  var fecha25 = document.getElementById("datetimepicker25");
  var fecha26 = document.getElementById("datetimepicker26");
  var fecha27 = document.getElementById("datetimepicker27");
  var fecha28 = document.getElementById("datetimepicker28");
  var fecha29 = document.getElementById("datetimepicker29");
  var fecha30 = document.getElementById("datetimepicker30");


  var fecha1Label = document.getElementById("datetimepicker1Label");
  var fecha2Label = document.getElementById("datetimepicker2Label");
  var fecha3Label = document.getElementById("datetimepicker3Label");
  var fecha4Label = document.getElementById("datetimepicker4Label");
  var fecha5Label = document.getElementById("datetimepicker5Label");
  var fecha6Label = document.getElementById("datetimepicker6Label");
  var fecha7Label = document.getElementById("datetimepicker7Label");
  var fecha8Label = document.getElementById("datetimepicker8Label");
  var fecha9Label = document.getElementById("datetimepicker9Label");
  var fecha10Label = document.getElementById("datetimepicker10Label");
  var fecha11Label = document.getElementById("datetimepicker11Label");
  var fecha12Label = document.getElementById("datetimepicker12Label");
  var fecha13Label = document.getElementById("datetimepicker13Label");
  var fecha14Label = document.getElementById("datetimepicker14Label");
  var fecha15Label = document.getElementById("datetimepicker15Label");
  var fecha16Label = document.getElementById("datetimepicker16Label");
  var fecha17Label = document.getElementById("datetimepicker17Label");
  var fecha18Label = document.getElementById("datetimepicker18Label");
  var fecha19Label = document.getElementById("datetimepicker19Label");
  var fecha20Label = document.getElementById("datetimepicker20Label");
  var fecha21Label = document.getElementById("datetimepicker21Label");
  var fecha22Label = document.getElementById("datetimepicker22Label");
  var fecha23Label = document.getElementById("datetimepicker23Label");
  var fecha24Label = document.getElementById("datetimepicker24Label");
  var fecha25Label = document.getElementById("datetimepicker25Label");
  var fecha26Label = document.getElementById("datetimepicker26Label");
  var fecha27Label = document.getElementById("datetimepicker27Label");
  var fecha28Label = document.getElementById("datetimepicker28Label");
  var fecha29Label = document.getElementById("datetimepicker29Label");
  var fecha30Label = document.getElementById("datetimepicker30Label");

  botonCancelar.style.display = "block";
  botonGuardar.style.display = "block";


   if(dias == 1){

      fecha1.style.display = "block";
      fecha1Label.style.display = "block";

   } else if(dias == 2){

      fecha1.style.display = "block";
      fecha2.style.display = "block";

      fecha1Label.style.display = "block";
      fecha2Label.style.display = "block";

   } else if(dias == 3){

      fecha1.style.display = "block";
      fecha2.style.display = "block";
      fecha3.style.display = "block";

      fecha1Label.style.display = "block";
      fecha2Label.style.display = "block";
      fecha3Label.style.display = "block";

  }  else if(dias == 5){

      fecha1.style.display = "block";
      fecha2.style.display = "block";
      fecha3.style.display = "block";
      fecha4.style.display = "block";
      fecha5.style.display = "block";

      fecha1Label.style.display = "block";
      fecha2Label.style.display = "block";
      fecha3Label.style.display = "block";
      fecha4Label.style.display = "block";
      fecha5Label.style.display = "block";

   } else if(dias == 10){

      fecha1.style.display = "block";
      fecha2.style.display = "block";
      fecha3.style.display = "block";
      fecha4.style.display = "block";
      fecha5.style.display = "block";
      fecha6.style.display = "block";
      fecha7.style.display = "block";
      fecha8.style.display = "block";
      fecha9.style.display = "block";
      fecha10.style.display = "block";

      fecha1Label.style.display = "block";
      fecha2Label.style.display = "block";
      fecha3Label.style.display = "block";
      fecha4Label.style.display = "block";
      fecha5Label.style.display = "block";
      fecha6Label.style.display = "block";
      fecha7Label.style.display = "block";
      fecha8Label.style.display = "block";
      fecha9Label.style.display = "block";
      fecha10Label.style.display = "block";

   } else if(dias == 30){

      fecha1.style.display = "block";
      fecha2.style.display = "block";
      fecha3.style.display = "block";
      fecha4.style.display = "block";
      fecha5.style.display = "block";
      fecha6.style.display = "block";
      fecha7.style.display = "block";
      fecha8.style.display = "block";
      fecha9.style.display = "block";
      fecha10.style.display = "block";
      fecha11.style.display = "block";
      fecha12.style.display = "block";
      fecha13.style.display = "block";
      fecha14.style.display = "block";
      fecha15.style.display = "block";
      fecha16.style.display = "block";
      fecha17.style.display = "block";
      fecha18.style.display = "block";
      fecha19.style.display = "block";
      fecha20.style.display = "block";
      fecha21.style.display = "block";
      fecha22.style.display = "block";
      fecha23.style.display = "block";
      fecha24.style.display = "block";
      fecha25.style.display = "block";
      fecha26.style.display = "block";
      fecha27.style.display = "block";
      fecha28.style.display = "block";
      fecha29.style.display = "block";
      fecha30.style.display = "block";

      fecha1Label.style.display = "block";
      fecha2Label.style.display = "block";
      fecha3Label.style.display = "block";
      fecha4Label.style.display = "block";
      fecha5Label.style.display = "block";
      fecha6Label.style.display = "block";
      fecha7Label.style.display = "block";
      fecha8Label.style.display = "block";
      fecha9Label.style.display = "block";
      fecha10Label.style.display = "block";
      fecha11Label.style.display = "block";
      fecha12Label.style.display = "block";
      fecha13Label.style.display = "block";
      fecha14Label.style.display = "block";
      fecha15Label.style.display = "block";
      fecha16Label.style.display = "block";
      fecha17Label.style.display = "block";
      fecha18Label.style.display = "block";
      fecha19Label.style.display = "block";
      fecha20Label.style.display = "block";
      fecha21Label.style.display = "block";
      fecha22Label.style.display = "block";
      fecha23Label.style.display = "block";
      fecha24Label.style.display = "block";
      fecha25Label.style.display = "block";
      fecha26Label.style.display = "block";
      fecha27Label.style.display = "block";
      fecha28Label.style.display = "block";
      fecha29Label.style.display = "block";
      fecha30Label.style.display = "block";
   }


  var array = diasEleccion.split(",");
  var fecha = diasEleccion.split(" ");

    console.log("cantidad array",array.length);

    // Itera sobre dias y asigna los valores a mes y mesenviar
    for (var io = 0; io < dias ; io++) {

      // Divide la fecha en partes y almacena en un array nuevo
      var fecha1 = array[io].split(" ");
      var mes = ""

      // Condicionales para comparar el tercer elemento del arreglo, el cual es el mes
       if(fecha1[2] == "enero"){
              mes = "1";
              mesenviar = "0";
       }else if (fecha1[2] == "febrero"){
              mes = "2";
              mesenviar = "1";
       }else if (fecha1[2] == "marzo"){
              mes = "3";
              mesenviar = "2";
       }else if (fecha1[2] == "abril"){
              mes = "4";
              mesenviar = "3";
       }else if (fecha1[2] == "mayo"){
              mes = "5";
              mesenviar = "4";
       }else if (fecha1[2] == "junio"){
              mes = "6";
              mesenviar = "5";
       }else if (fecha1[2] == "julio"){
              mes = "7";
              mesenviar = "6";
       }else if (fecha1[2] == "agosto"){
              mes = "8";
              mesenviar = "7";
       }else if (fecha1[2] == "septiembre"){
              mes = "9";
              mesenviar = "8";
       }else if (fecha1[2] == "octubre"){
              mes = "10";
              mesenviar = "9";
       }else if (fecha1[2] == "noviembre"){
              mes = "11";
              mesenviar = "10";
       }else if (fecha1[2] == "diciembre"){
              mes = "12";
              mesenviar = "11";
       }

      // Construye una cadena de fecha en un formato específico con los elementos de fecha1
      var fechaDefinitiva = fecha1[3]+"-"+mes+"-"+fecha1[1]+"T"+fecha1[6]+":00";
      var fechatimestamp = fecha1[6].split(":");

      console.log(fecha1[3],mesenviar,fecha1[1],fechatimestamp[0],fechatimestamp[1],'00');
      
      //Convierte la cadena de fecha en un objeto Date y obtiene su valor de tiempo (timestamp) que se utiliza más adelante.
      var datum = new Date(fecha1[3],mesenviar,fecha1[1],fechatimestamp[0],fechatimestamp[1],'00');
      var datumFirebase = datum.getTime();

      console.log(io)
      console.log(datumFirebase);

      // actualizar el valor de fechas en elementos de la interfaz de usuario
      if(io == 0){

        console.log("aqui entra a la fecha 1 "+datumFirebase)

        $('#datetimepicker1').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 1){

        $('#datetimepicker2').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 2){

        $('#datetimepicker3').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 3){

        $('#datetimepicker4').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 4){

        $('#datetimepicker5').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 5){

        $('#datetimepicker6').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 6){

        $('#datetimepicker7').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 7){

        $('#datetimepicker8').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 8){

        $('#datetimepicker9').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 9){

        $('#datetimepicker10').data("DateTimePicker").date(new Date(datumFirebase));

      } else if(io == 10){

        $('#datetimepicker11').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 11){

        $('#datetimepicker12').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 12){

        $('#datetimepicker13').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 13){

        $('#datetimepicker14').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 14){

        $('#datetimepicker15').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 15){

        $('#datetimepicker16').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 16){

        $('#datetimepicker17').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 17){

        $('#datetimepicker18').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 18){

        $('#datetimepicker19').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 19){

        $('#datetimepicker20').data("DateTimePicker").date(new Date(datumFirebase));

      } if(io == 20){

        $('#datetimepicker21').data("DateTimePicker").date(new Date(datumFirebase));


      }else if(io == 21){

        $('#datetimepicker22').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 22){

        $('#datetimepicker23').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 23){

        $('#datetimepicker24').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 24){

       $('#datetimepicker25').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 25){

        $('#datetimepicker26').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 26){

        $('#datetimepicker27').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 27){

        $('#datetimepicker28').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 28){

        $('#datetimepicker29').data("DateTimePicker").date(new Date(datumFirebase));

      }else if(io == 29){

        $('#datetimepicker30').data("DateTimePicker").date(new Date(datumFirebase));

      }

  }

}

// Cancelar
function cancelar() {

  busca_paseos()

}

function guardar(){

  $('#carga2').show();

  var fecha1 = $("#datetimepicker1").find("input").val();
  var fecha2 = $("#datetimepicker2").find("input").val();
  var fecha3 = $("#datetimepicker3").find("input").val();
  var fecha4 = $("#datetimepicker4").find("input").val();
  var fecha5 = $("#datetimepicker5").find("input").val();
  var fecha6 = $("#datetimepicker6").find("input").val();
  var fecha7 = $("#datetimepicker7").find("input").val();
  var fecha8 = $("#datetimepicker8").find("input").val();
  var fecha9 = $("#datetimepicker9").find("input").val();
  var fecha10 = $("#datetimepicker10").find("input").val();

  var fecha11 = $("#datetimepicker11").find("input").val();
  var fecha12 = $("#datetimepicker12").find("input").val();
  var fecha13 = $("#datetimepicker13").find("input").val();
  var fecha14 = $("#datetimepicker14").find("input").val();
  var fecha15 = $("#datetimepicker15").find("input").val();
  var fecha16 = $("#datetimepicker16").find("input").val();
  var fecha17 = $("#datetimepicker17").find("input").val();
  var fecha18 = $("#datetimepicker18").find("input").val();
  var fecha19 = $("#datetimepicker19").find("input").val();
  var fecha20 = $("#datetimepicker20").find("input").val();

  var fecha21 = $("#datetimepicker21").find("input").val();
  var fecha22 = $("#datetimepicker22").find("input").val();
  var fecha23 = $("#datetimepicker23").find("input").val();
  var fecha24 = $("#datetimepicker24").find("input").val();
  var fecha25 = $("#datetimepicker25").find("input").val();
  var fecha26 = $("#datetimepicker26").find("input").val();
  var fecha27 = $("#datetimepicker27").find("input").val();
  var fecha28 = $("#datetimepicker28").find("input").val();
  var fecha29 = $("#datetimepicker29").find("input").val();
  var fecha30 = $("#datetimepicker30").find("input").val();

  // Condicionales para formatear la variable de fehcas
  if(diasActual == 1){

    // Divide la fecha y hora con delimitadores de , y espacio
    var res = fecha1.split(",");
    var resHora = res[3].split(" ");

    // Asigna el nuevo formateo
    fechas = res[0]+" "+res[1]+" "+res[2]+" "+resHora[1]+" a las "+resHora[2];
    console.log(fechas)

    fechasConvertidas = convertirFechasATimestamps(fechas);
    fechasConvertidasString = fechasConvertidas.join(", ");
    console.log(fechasConvertidas);

    //console.log(timestampConvert);

  } else if(diasActual == 2){

      // Divide la fecha y hora con delimitadores de , y espacio
      var res = fecha1.split(",");
      var resHora = res[3].split(" ");

      var res2 = fecha2.split(",");
      var res2Hora = res2[3].split(" ");

      // Asigna el nuevo formateo
      fechas = res[0]+" "+res[1]+" "+res[2]+" "+resHora[1]+" a las "+resHora[2]+", "+res2[0]+" "+res2[1]+" "+res2[2]+" "+res2Hora[1]+" a las "+res2Hora[2];
      console.log(fechas)

      fechasConvertidas = convertirFechasATimestamps(fechas);
      fechasConvertidasString = fechasConvertidas.join(", ");
      console.log(fechasConvertidas);

  } else if(diasActual == 3){

      // Divide la fecha y hora con delimitadores de , y espacio
      var res = fecha1.split(",");
      var resHora = res[3].split(" ");

      var res2 = fecha2.split(",");
      var res2Hora = res2[3].split(" ");

      var res3 = fecha3.split(",");
      var res3Hora = res3[3].split(" ");

      // Asigna el nuevo formateo
      fechas = res[0]+" "+res[1]+" "+res[2]+" "+resHora[1]+" a las "+resHora[2]+
      ", "+res2[0]+" "+res2[1]+" "+res2[2]+" "+res2Hora[1]+" a las "+res2Hora[2]+
      ", "+res3[0]+" "+res3[1]+" "+res3[2]+" "+res3Hora[1]+" a las "+res3Hora[2];
      console.log(fechas)

      fechasConvertidas = convertirFechasATimestamps(fechas);
      fechasConvertidasString = fechasConvertidas.join(", ");
      console.log(fechasConvertidas);
      

  } else if(diasActual == 5){
    
      // Divide la fecha y hora con delimitadores de , y espacio
      var res = fecha1.split(",");
      var resHora = res[3].split(" ");

      var res2 = fecha2.split(",");
      var res2Hora = res2[3].split(" ");

      var res3 = fecha3.split(",");
      var res3Hora = res3[3].split(" ");

      var res4 = fecha4.split(",");
      var res4Hora = res4[3].split(" ");

      var res5 = fecha5.split(",");
      var res5Hora = res5[3].split(" ");

      // Asigna el nuevo formateo
      fechas = res[0]+" "+res[1]+" "+res[2]+" "+resHora[1]+" a las "+resHora[2]+
      ", "+res2[0]+" "+res2[1]+" "+res2[2]+" "+res2Hora[1]+" a las "+res2Hora[2]+
      ", "+res3[0]+" "+res3[1]+" "+res3[2]+" "+res3Hora[1]+" a las "+res3Hora[2]+
      ", "+res4[0]+" "+res4[1]+" "+res4[2]+" "+res4Hora[1]+" a las "+res4Hora[2]+
      ", "+res5[0]+" "+res5[1]+" "+res5[2]+" "+res5Hora[1]+" a las "+res5Hora[2];
      console.log(fechas)

      fechasConvertidas = convertirFechasATimestamps(fechas);
      fechasConvertidasString = fechasConvertidas.join(", ");
      console.log(fechasConvertidas);

  } else if(diasActual == 10){

      // Divide la fecha y hora con delimitadores de , y espacio
      var res = fecha1.split(",");
      var resHora = res[3].split(" ");

      var res2 = fecha2.split(",");
      var res2Hora = res2[3].split(" ");

      var res3 = fecha3.split(",");
      var res3Hora = res3[3].split(" ");

      var res4 = fecha4.split(",");
      var res4Hora = res4[3].split(" ");

      var res5 = fecha5.split(",");
      var res5Hora = res5[3].split(" ");

      var res6 = fecha6.split(",");
      var res6Hora = res6[3].split(" ");

      var res7 = fecha7.split(",");
      var res7Hora = res7[3].split(" ");

      var res8 = fecha8.split(",");
      var res8Hora = res8[3].split(" ");

      var res9 = fecha9.split(",");
      var res9Hora = res9[3].split(" ");

      var res10 = fecha10.split(",");
      var res10Hora = res10[3].split(" ");

      // Asigna el nuevo formateo
      fechas = res[0]+" "+res[1]+" "+res[2]+" "+resHora[1]+" a las "+resHora[2]+
      ", "+res2[0]+" "+res2[1]+" "+res2[2]+" "+res2Hora[1]+" a las "+res2Hora[2]+
      ", "+res3[0]+" "+res3[1]+" "+res3[2]+" "+res3Hora[1]+" a las "+res3Hora[2]+
      ", "+res4[0]+" "+res4[1]+" "+res4[2]+" "+res4Hora[1]+" a las "+res4Hora[2]+
      ", "+res5[0]+" "+res5[1]+" "+res5[2]+" "+res5Hora[1]+" a las "+res5Hora[2]+
      ", "+res6[0]+" "+res6[1]+" "+res6[2]+" "+res6Hora[1]+" a las "+res6Hora[2]+
      ", "+res7[0]+" "+res7[1]+" "+res7[2]+" "+res7Hora[1]+" a las "+res7Hora[2]+
      ", "+res8[0]+" "+res8[1]+" "+res8[2]+" "+res8Hora[1]+" a las "+res8Hora[2]+
      ", "+res9[0]+" "+res9[1]+" "+res9[2]+" "+res9Hora[1]+" a las "+res9Hora[2]+
      ", "+res10[0]+" "+res10[1]+" "+res10[2]+" "+res10Hora[1]+" a las "+res10Hora[2];

      console.log(fechas)

      fechasConvertidas = convertirFechasATimestamps(fechas);
      fechasConvertidasString = fechasConvertidas.join(", ");
      console.log(fechasConvertidas);

  } else if(diasActual == 30){

      // Divide la fecha y hora con delimitadores de , y espacio
      var res = fecha1.split(",");
      var resHora = res[3].split(" ");

      var res2 = fecha2.split(",");
      var res2Hora = res2[3].split(" ");

      var res3 = fecha3.split(",");
      var res3Hora = res3[3].split(" ");

      var res4 = fecha4.split(",");
      var res4Hora = res4[3].split(" ");

      var res5 = fecha5.split(",");
      var res5Hora = res5[3].split(" ");

      var res6 = fecha6.split(",");
      var res6Hora = res6[3].split(" ");

      var res7 = fecha7.split(",");
      var res7Hora = res7[3].split(" ");

      var res8 = fecha8.split(",");
      var res8Hora = res8[3].split(" ");

      var res9 = fecha9.split(",");
      var res9Hora = res9[3].split(" ");

      var res10 = fecha10.split(",");
      var res10Hora = res10[3].split(" ");

      var res11 = fecha11.split(",");
      var res11Hora = res11[3].split(" ");

      var res12 = fecha12.split(",");
      var res12Hora = res12[3].split(" ");

      var res13 = fecha13.split(",");
      var res13Hora = res13[3].split(" ");

      var res14 = fecha14.split(",");
      var res14Hora = res14[3].split(" ");

      var res15 = fecha15.split(",");
      var res15Hora = res15[3].split(" ");

      var res16 = fecha16.split(",");
      var res16Hora = res16[3].split(" ");

      var res17 = fecha17.split(",");
      var res17Hora = res17[3].split(" ");

      var res18 = fecha18.split(",");
      var res18Hora = res18[3].split(" ");

      var res19 = fecha19.split(",");
      var res19Hora = res19[3].split(" ");

      var res20 = fecha20.split(",");
      var res20Hora = res20[3].split(" ");

      var res21 = fecha21.split(",");
      var res21Hora = res21[3].split(" ");

      var res22 = fecha22.split(",");
      var res22Hora = res22[3].split(" ");

      var res23 = fecha23.split(",");
      var res23Hora = res23[3].split(" ");

      var res24 = fecha24.split(",");
      var res24Hora = res24[3].split(" ");

      var res25 = fecha25.split(",");
      var res25Hora = res25[3].split(" ");

      var res26 = fecha26.split(",");
      var res26Hora = res26[3].split(" ");

      var res27 = fecha27.split(",");
      var res27Hora = res27[3].split(" ");

      var res28 = fecha28.split(",");
      var res28Hora = res28[3].split(" ");

      var res29 = fecha29.split(",");
      var res29Hora = res29[3].split(" ");

      var res30 = fecha30.split(",");
      var res30Hora = res30[3].split(" ");

      // Asigna el nuevo formateo
      fechas = res[0]+" "+res[1]+" "+res[2]+" "+resHora[1]+" a las "+resHora[2]+
      ", "+res2[0]+" "+res2[1]+" "+res2[2]+" "+res2Hora[1]+" a las "+res2Hora[2]+
      ", "+res3[0]+" "+res3[1]+" "+res3[2]+" "+res3Hora[1]+" a las "+res3Hora[2]+
      ", "+res4[0]+" "+res4[1]+" "+res4[2]+" "+res4Hora[1]+" a las "+res4Hora[2]+
      ", "+res5[0]+" "+res5[1]+" "+res5[2]+" "+res5Hora[1]+" a las "+res5Hora[2]+
      ", "+res6[0]+" "+res6[1]+" "+res6[2]+" "+res6Hora[1]+" a las "+res6Hora[2]+
      ", "+res7[0]+" "+res7[1]+" "+res7[2]+" "+res7Hora[1]+" a las "+res7Hora[2]+
      ", "+res8[0]+" "+res8[1]+" "+res8[2]+" "+res8Hora[1]+" a las "+res8Hora[2]+
      ", "+res9[0]+" "+res9[1]+" "+res9[2]+" "+res9Hora[1]+" a las "+res9Hora[2]+
      ", "+res10[0]+" "+res10[1]+" "+res10[2]+" "+res10Hora[1]+" a las "+res10Hora[2]+
      ", "+res11[0]+" "+res11[1]+" "+res11[2]+" "+res11Hora[1]+" a las "+res11Hora[2]+
      ", "+res12[0]+" "+res12[1]+" "+res12[2]+" "+res12Hora[1]+" a las "+res12Hora[2]+
      ", "+res13[0]+" "+res13[1]+" "+res13[2]+" "+res13Hora[1]+" a las "+res13Hora[2]+
      ", "+res14[0]+" "+res14[1]+" "+res14[2]+" "+res14Hora[1]+" a las "+res14Hora[2]+
      ", "+res15[0]+" "+res15[1]+" "+res15[2]+" "+res15Hora[1]+" a las "+res15Hora[2]+
      ", "+res16[0]+" "+res16[1]+" "+res16[2]+" "+res16Hora[1]+" a las "+res16Hora[2]+
      ", "+res17[0]+" "+res17[1]+" "+res17[2]+" "+res17Hora[1]+" a las "+res17Hora[2]+
      ", "+res18[0]+" "+res18[1]+" "+res18[2]+" "+res18Hora[1]+" a las "+res18Hora[2]+
      ", "+res19[0]+" "+res19[1]+" "+res19[2]+" "+res19Hora[1]+" a las "+res19Hora[2]+
      ", "+res20[0]+" "+res20[1]+" "+res20[2]+" "+res20Hora[1]+" a las "+res20Hora[2]+
      ", "+res21[0]+" "+res21[1]+" "+res21[2]+" "+res21Hora[1]+" a las "+res21Hora[2]+
      ", "+res22[0]+" "+res22[1]+" "+res22[2]+" "+res22Hora[1]+" a las "+res22Hora[2]+
      ", "+res23[0]+" "+res23[1]+" "+res23[2]+" "+res23Hora[1]+" a las "+res23Hora[2]+
      ", "+res24[0]+" "+res24[1]+" "+res24[2]+" "+res24Hora[1]+" a las "+res24Hora[2]+
      ", "+res25[0]+" "+res25[1]+" "+res25[2]+" "+res25Hora[1]+" a las "+res25Hora[2]+
      ", "+res26[0]+" "+res26[1]+" "+res26[2]+" "+res26Hora[1]+" a las "+res26Hora[2]+
      ", "+res27[0]+" "+res27[1]+" "+res27[2]+" "+res27Hora[1]+" a las "+res27Hora[2]+
      ", "+res28[0]+" "+res28[1]+" "+res28[2]+" "+res28Hora[1]+" a las "+res28Hora[2]+
      ", "+res29[0]+" "+res29[1]+" "+res29[2]+" "+res29Hora[1]+" a las "+res29Hora[2]+
      ", "+res30[0]+" "+res30[1]+" "+res30[2]+" "+res30Hora[1]+" a las "+res30Hora[2];

      console.log(fechas);

      fechasConvertidas = convertirFechasATimestamps(fechas);
      fechasConvertidasString = fechasConvertidas.join(", ");
      console.log(fechasConvertidas);

  }

  // Variables para ingresar a firebase y entrar a la referencia "Agendados"
  var db = firebase.database();
  var agendados = db.ref("Agendados").child(orderActual);

  // Genera una clave unica para un nuevo registro
  var key = db.ref("cambios_ordenes").push().getKey();
  var agendadosModificaciones = db.ref("cambios_ordenes");
  var currentUID = firebase.auth().currentUser.uid;

      // Actualiza los dias de eleccion 
      agendados.update({ 

        diasEleccion: fechasConvertidasString,

       }).then(function(){ // Si la actualizacion es correcta        

        // Se realiza la operacion de actualizacion en el nodo "cambios_ordenes"
        agendadosModificaciones.child(key).update({ 

          id_orden: orderActual,
          uid: currentUID,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          cambio: "fecha total",
          inicial: diasEleccionActual,
          final: fechas

        })
          $('#carga2').hide();
          alert("Se han cambiado las fechas exitosamente")
          busca_paseos(); // Llama a la funcion 

      }).catch(function(error) {
                
          $('#carga2').hide();
          console.log("Ocurrio un error")
      });

}

// Funcion para converitr fechas en formato de cadena a timestamp
function convertirFechasATimestamps(fechasString) {
  var diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  // Dividir la cadena en fechas individuales
  var fechasIndividuales = fechasString.split(", ");

  // Almacenar los timestamps resultantes como strings
  var timestampsStrings = [];

  // Procesar cada fecha individual
  fechasIndividuales.forEach(function (fechaString) {
      // Utilizar una expresión regular para extraer los componentes de la fecha
      var match = fechaString.match(/(\w+) (\d{2}) (\w+) (\d{4}) a las (\d{2}:\d{2})/);

      // Concicional para validar que el formato sea correcto
      if (match) {
          var dia = match[2];
          var mes = meses.indexOf(match[3].toLowerCase());
          var anno = parseInt(match[4]);
          var horaMinutos = match[5].split(":");
          var hora = parseInt(horaMinutos[0]);
          var minutos = parseInt(horaMinutos[1]);

          var fecha = new Date(anno, mes, dia, hora, minutos);

          var timestamp = fecha.getTime();

          // Convertir el valor timestamp a string
          timestampsStrings.push(timestamp.toString());
      } else {
          console.log("Formato de fecha no válido:", fechaString);
      }
  });

  return timestampsStrings;
}

// Funcion para cancelar operaciones como guardar, actualizar y/o asignar
function cancelarAsignarPaseador() {
  busca_paseos();
}

// Funcion para guardar y asignar paseadores 
function guardarAsignarPaseador(){

  $('#coverSuave').show();

  //Arreglo para almacenar los paseador
  var paseadores = [];

  var paseador1 = document.getElementById("paseo1").value.replace(/\s+/g, '')
  var paseador2 = document.getElementById("paseo2").value.replace(/\s+/g, '')
  var paseador3 = document.getElementById("paseo3").value.replace(/\s+/g, '')
  var paseador4 = document.getElementById("paseo4").value.replace(/\s+/g, '')
  var paseador5 = document.getElementById("paseo5").value.replace(/\s+/g, '')
  var paseador6 = document.getElementById("paseo6").value.replace(/\s+/g, '')
  var paseador7 = document.getElementById("paseo7").value.replace(/\s+/g, '')
  var paseador8 = document.getElementById("paseo8").value.replace(/\s+/g, '')
  var paseador9 = document.getElementById("paseo9").value.replace(/\s+/g, '')
  var paseador10 = document.getElementById("paseo10").value.replace(/\s+/g, '')
  var paseador11 = document.getElementById("paseo11").value.replace(/\s+/g, '')
  var paseador12 = document.getElementById("paseo12").value.replace(/\s+/g, '')
  var paseador13 = document.getElementById("paseo13").value.replace(/\s+/g, '')
  var paseador14 = document.getElementById("paseo14").value.replace(/\s+/g, '')
  var paseador15 = document.getElementById("paseo15").value.replace(/\s+/g, '')
  var paseador16 = document.getElementById("paseo16").value.replace(/\s+/g, '')
  var paseador17 = document.getElementById("paseo17").value.replace(/\s+/g, '')
  var paseador18 = document.getElementById("paseo18").value.replace(/\s+/g, '')
  var paseador19 = document.getElementById("paseo19").value.replace(/\s+/g, '')
  var paseador20 = document.getElementById("paseo20").value.replace(/\s+/g, '')
  var paseador21 = document.getElementById("paseo21").value.replace(/\s+/g, '')
  var paseador22 = document.getElementById("paseo22").value.replace(/\s+/g, '')
  var paseador23 = document.getElementById("paseo23").value.replace(/\s+/g, '')
  var paseador24 = document.getElementById("paseo24").value.replace(/\s+/g, '')
  var paseador25 = document.getElementById("paseo25").value.replace(/\s+/g, '')
  var paseador26 = document.getElementById("paseo26").value.replace(/\s+/g, '')
  var paseador27 = document.getElementById("paseo27").value.replace(/\s+/g, '')
  var paseador28 = document.getElementById("paseo28").value.replace(/\s+/g, '')
  var paseador29 = document.getElementById("paseo29").value.replace(/\s+/g, '')
  var paseador30 = document.getElementById("paseo30").value.replace(/\s+/g, '')

  // Se verifica la cantidad de días para asignar paseadores
   if(diasAsignarPaseadorActual == 1){
      // Se verifica que el paseador no esté vacío
      if(paseador1 == ""){

          $('#coverSuave').hide();
          alert("Debe asignar todos los paseadores");

      } else{
          // Si no esta vacio, agrega el paseador al arreglo
          paseadores.push(paseador1.replace(/\s+/g, ''));

      }

   } else if(diasAsignarPaseadorActual == 2){

      if(paseador1 == "" || paseador2 == "" ){

        $('#coverSuave').hide();
        alert("Debe asignar todos los paseadores")     

      } else{

        paseadores.push(paseador1);
        paseadores.push(paseador2);

      }

   } else if(diasAsignarPaseadorActual == 3){

    if(paseador1 == "" || paseador2 == "" || paseador3 == ""){

        $('#coverSuave').hide();
        alert("Debe asignar todos los paseadores")

    } else{

          paseadores.push(paseador1);
          paseadores.push(paseador2);
          paseadores.push(paseador3);

      }

    } else if(diasAsignarPaseadorActual == 5){

        if(paseador1 == "" || paseador2 == "" || paseador3 == "" || paseador4 == "" || paseador5 == ""){

          $('#coverSuave').hide();
          alert("Debe asignar todos los paseadores")
        
        } else{

          paseadores.push(paseador1);
          paseadores.push(paseador2);
          paseadores.push(paseador3);
          paseadores.push(paseador4);
          paseadores.push(paseador5);

        }

   } else if(diasAsignarPaseadorActual == 10){

        if(paseador1 == "" || paseador2 == "" || paseador3 == "" || paseador4 == "" || paseador5 == "" || paseador6 == "" || paseador7 == "" || paseador8 == "" || paseador9 == "" || paseador10 == ""){

          $('#coverSuave').hide();
          alert("Debe asignar todos los paseadores")
        
        } else {

          paseadores.push(paseador1);
          paseadores.push(paseador2);
          paseadores.push(paseador3);
          paseadores.push(paseador4);
          paseadores.push(paseador5);
          paseadores.push(paseador6);
          paseadores.push(paseador7);
          paseadores.push(paseador8);
          paseadores.push(paseador9);
          paseadores.push(paseador10);

        }

    } else if(diasAsignarPaseadorActual == 30){

        if(paseador1 == "" || paseador2 == "" || paseador3 == "" || paseador4 == "" || paseador5 == "" || paseador6 == "" || paseador7 == "" || paseador8 == "" || paseador9 == "" || paseador10 == "" ||  paseador11 == "" || paseador12 == "" || paseador13 == "" || paseador14 == "" || paseador15 == "" || paseador16 == "" || paseador17 == "" || paseador18 == "" || paseador19 == "" || paseador20 == "" || paseador21 == "" || paseador22 == "" || paseador23 == "" || paseador24 == "" || paseador25 == "" || paseador26 == "" || paseador27 == "" || paseador28 == "" || paseador29 == "" || paseador30 == ""){

          $('#coverSuave').hide();
          alert("Debe asignar todos los paseadores");
        
        } else {

          paseadores.push(paseador1);
          paseadores.push(paseador2);
          paseadores.push(paseador3);
          paseadores.push(paseador4);
          paseadores.push(paseador5);
          paseadores.push(paseador6);
          paseadores.push(paseador7);
          paseadores.push(paseador8);
          paseadores.push(paseador9);
          paseadores.push(paseador10);

          paseadores.push(paseador11);
          paseadores.push(paseador12);
          paseadores.push(paseador13);
          paseadores.push(paseador14);
          paseadores.push(paseador15);
          paseadores.push(paseador16);
          paseadores.push(paseador17);
          paseadores.push(paseador18);
          paseadores.push(paseador19);
          paseadores.push(paseador20);

          paseadores.push(paseador21);
          paseadores.push(paseador22);
          paseadores.push(paseador23);
          paseadores.push(paseador24);
          paseadores.push(paseador25);
          paseadores.push(paseador26);
          paseadores.push(paseador27);
          paseadores.push(paseador28);
          paseadores.push(paseador29);
          paseadores.push(paseador30);

        }

    }
    
    // Filtra los paseadores para eliminar duplicados 
    let paseadoresSinRepetidos = paseadores.filter((valor, indiceActual, arreglo) => arreglo.indexOf(valor) === indiceActual);

    console.log(paseadoresSinRepetidos);

    // Llama a una función para comprobar o procesar los paseadores
    comprobarPaseadores(paseadoresSinRepetidos);
}

// Funcion que verifica la existencia de paseadores en la base de datos
function comprobarPaseadores(arregloPaseadores){

  // Inicialización de variables
  var paseadorNoExiste = 0
  var numeroInteracciones = 0
  var paseadoresInvalidos = ""

  // Variables para referencia a FB y ruta en FB
  var db = firebase.database();
  var ref_comprobacion = db.ref("Paseadores");

    // Ciclo para recorrer la longitud del arreglo y verificar los paseadores
    for (var io = 0; io < arregloPaseadores.length ; io++) {

      var ref_comPas = ref_comprobacion.child(arregloPaseadores[io]);

      console.log(arregloPaseadores[io]);

        ref_comPas.once("value", function(snapshot) {

          numeroInteracciones++

            if (snapshot.exists()) {

              d = snapshot.val();
              console.log('exists '+d.idPaseador);
       
            } else{

                console.log("key "+snapshot.val())

                // alert("El paseador "+arregloPaseadores[io]+" no existe")
                paseadorNoExiste++
                paseadoresInvalidos += arregloPaseadores[io]+" "
              }

              console.log(numeroInteracciones)
              console.log(arregloPaseadores.length)

            if(numeroInteracciones == arregloPaseadores.length){
                          
              console.log("termina de verdad")
              console.log("paseadores que no existen "+paseadorNoExiste)

                if(paseadorNoExiste == 0 ){

                  paseadoresUtilizados = arregloPaseadores
                  guardarPaseos(paseadoresUtilizados)
                 
                } else {

                    $('#coverSuave').hide();
                    alert("Se encontraron "+paseadorNoExiste+" paseadores incorrectos, verifique e intente nuevamente" )

                  }
            }
                       
          });

    }
    console.log("termina");
}

// Función para guardar paseos
function guardarPaseos(paseadoresUtilizados){

  var perros = ordenDatos.perros;
  var uid = ordenDatos.id_usr;


  console.log("orden perros "+ordenDatos)
  obtenerPerros(uid,perros)


}

// Funcion para obtener los datos de los perros
function obtenerPerros(uid,perros,paseadoresUtilizados){

    console.log("Entra a obtener perros") 
    console.log("'Perros "+perros)

        var db = firebase.database();

        var jsonPerros = {};
        var limite = 0
            
           lastCharacter = perros.substring(perros.length - 1);

           console.log("ultimo caracter "+lastCharacter)

           if (lastCharacter == ","){

            perros = perros.substring(0,perros.length - 1);

           }

           console.log("Nuevos perros ",perros)

           var data_array = perros.split(',');


           limite = data_array.length - 1;

           console.log("limite"+limite)

           var actualFor = -1
        
        // Bucle que itera sobre cada identificador de perro en el array obtenido
        for (var i in data_array){

          // Referencia a la base de datos en ubicacion "Perros"
          var ref2 = db.ref("Perros");
          var perrosref = ref2.child(uid);
          var query = perrosref.orderByChild("idPerro").equalTo(data_array[i]);

          query.on("value",function(snapshot){

            snapshot.forEach(function(childSnapshot){
              
              var childData = childSnapshot.val();
              var nombre = childData.nombre;
              var foto = childData.foto;
              var idPerro = childData.idPerro;
              var objredy = { nombre: nombre, foto: foto, idPerro: idPerro, pipi:0, popo:0 };

              jsonPerros[idPerro] = objredy;

              actualFor++;
              console.log("i "+actualFor);

              // Si el numero de iteraciones alcanza el limite 
              if(actualFor == limite){
                
                // Convierte el objeto a una cadena JSON
                var stringified = JSON.stringify(jsonPerros);
                var myJsonString = JSON.parse(stringified);
                // console.log(myJsonString)

                console.log("Termina con los perros")
                obtenerDatosUsuario(uid,myJsonString,paseadoresUtilizados)

              }
 
            });

          });


        }

}

// Funcion para obtener los datos del usuario
function obtenerDatosUsuario(uid,jsonPerros,paseadoresUtilizados){


  console.log("Entra a obtener datos usuario")

      var db = firebase.database();
       var refusername = db.ref("Usuarios");
      var usrrefname = refusername.child(uid);

      usrrefname.once("value",function(snapshottt){

        var nombreuser = snapshottt.val().nombre;
        var apuser = snapshottt.val().apellido_Paterno;
        var numero_usuario = snapshottt.val().telefono1;

        console.log("nombre",nombreuser);
        console.log("apellido",apuser);
        console.log("numero_usuario",numero_usuario);
        console.log("user id",uid);

        guardarPaseos2(jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)
        fecha_ultimo_paseo_individual(uid)


      });


}


function fecha_ultimo_paseo_individual(uid){


   var db = firebase.database();
       var ultimo_paseo = db.ref("Ultimo_Paseo");
        var ultimo_paseo_usu = ultimo_paseo.child(uid);

        ultimo_paseo_usu.once("value",function(snapshott){

          


         if (snapshott.exists()) {

       timestamp_ultimo_paseo_individual = snapshott.val().ultimo_time;
          }
          
          

          });


}

function guardarPaseos2(jsonPerros,nombreuser,apuser,numero_usuario){


console.log("Entra a guardar paseo 2")

var paseador1 = document.getElementById("paseo1").value.replace(/\s+/g, '')
var paseador2 = document.getElementById("paseo2").value.replace(/\s+/g, '')
var paseador3 = document.getElementById("paseo3").value.replace(/\s+/g, '')
var paseador4 = document.getElementById("paseo4").value.replace(/\s+/g, '')
var paseador5 = document.getElementById("paseo5").value.replace(/\s+/g, '')
var paseador6 = document.getElementById("paseo6").value.replace(/\s+/g, '')
var paseador7 = document.getElementById("paseo7").value.replace(/\s+/g, '')
var paseador8 = document.getElementById("paseo8").value.replace(/\s+/g, '')
var paseador9 = document.getElementById("paseo9").value.replace(/\s+/g, '')
var paseador10 = document.getElementById("paseo10").value.replace(/\s+/g, '')
var paseador11 = document.getElementById("paseo11").value.replace(/\s+/g, '')
var paseador12 = document.getElementById("paseo12").value.replace(/\s+/g, '')
var paseador13 = document.getElementById("paseo13").value.replace(/\s+/g, '')
var paseador14 = document.getElementById("paseo14").value.replace(/\s+/g, '')
var paseador15 = document.getElementById("paseo15").value.replace(/\s+/g, '')
var paseador16 = document.getElementById("paseo16").value.replace(/\s+/g, '')
var paseador17 = document.getElementById("paseo17").value.replace(/\s+/g, '')
var paseador18 = document.getElementById("paseo18").value.replace(/\s+/g, '')
var paseador19 = document.getElementById("paseo19").value.replace(/\s+/g, '')
var paseador20 = document.getElementById("paseo20").value.replace(/\s+/g, '')
var paseador21 = document.getElementById("paseo21").value.replace(/\s+/g, '')
var paseador22 = document.getElementById("paseo22").value.replace(/\s+/g, '')
var paseador23 = document.getElementById("paseo23").value.replace(/\s+/g, '')
var paseador24 = document.getElementById("paseo24").value.replace(/\s+/g, '')
var paseador25 = document.getElementById("paseo25").value.replace(/\s+/g, '')
var paseador26 = document.getElementById("paseo26").value.replace(/\s+/g, '')
var paseador27 = document.getElementById("paseo27").value.replace(/\s+/g, '')
var paseador28 = document.getElementById("paseo28").value.replace(/\s+/g, '')
var paseador29 = document.getElementById("paseo29").value.replace(/\s+/g, '')
var paseador30 = document.getElementById("paseo30").value.replace(/\s+/g, '')




  console.log(diasAsignarPaseadorActual)

    for (var io = 0; io < diasAsignarPaseadorActual ; io++) {


     if(io == 0){

        obtenerDatosPaseador("1",timestamp1,fechaDefinitiva1,paseador1,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 1){

        obtenerDatosPaseador("2",timestamp2,fechaDefinitiva2,paseador2,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 2){

        obtenerDatosPaseador("3",timestamp3,fechaDefinitiva3,paseador3,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 3){

        obtenerDatosPaseador("4",timestamp4,fechaDefinitiva4,paseador4,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 4){

        obtenerDatosPaseador("5",timestamp5,fechaDefinitiva5,paseador5,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 5){

        obtenerDatosPaseador("6",timestamp6,fechaDefinitiva6,paseador6,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 6){

        obtenerDatosPaseador("7",timestamp7,fechaDefinitiva7,paseador7,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 7){

        obtenerDatosPaseador("8",timestamp8,fechaDefinitiva8,paseador8,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 8){

        obtenerDatosPaseador("9",timestamp9,fechaDefinitiva9,paseador9,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      } else if(io == 9){

        obtenerDatosPaseador("10",timestamp10,fechaDefinitiva10,paseador10,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

    }  else if(io == 10){

        obtenerDatosPaseador("11",timestamp11,fechaDefinitiva11,paseador11,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

    } else if(io == 11){

        obtenerDatosPaseador("12",timestamp12,fechaDefinitiva12,paseador12,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 12){

        obtenerDatosPaseador("13",timestamp13,fechaDefinitiva13,paseador13,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 13){

        obtenerDatosPaseador("14",timestamp14,fechaDefinitiva14,paseador14,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 14){

        obtenerDatosPaseador("15",timestamp15,fechaDefinitiva15,paseador15,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 15){

        obtenerDatosPaseador("16",timestamp16,fechaDefinitiva16,paseador16,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 16){

        obtenerDatosPaseador("17",timestamp17,fechaDefinitiva17,paseador17,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 17){

        obtenerDatosPaseador("18",timestamp18,fechaDefinitiva18,paseador18,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 18){

        obtenerDatosPaseador("19",timestamp19,fechaDefinitiva19,paseador19,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 19){

        obtenerDatosPaseador("20",timestamp20,fechaDefinitiva20,paseador20,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

    }  else if(io == 20){

        obtenerDatosPaseador("21",timestamp21,fechaDefinitiva21,paseador21,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

    } else if(io == 21){

        obtenerDatosPaseador("22",timestamp22,fechaDefinitiva22,paseador22,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 22){

        obtenerDatosPaseador("23",timestamp23,fechaDefinitiva23,paseador23,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 23){

        obtenerDatosPaseador("24",timestamp24,fechaDefinitiva24,paseador24,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 24){

        obtenerDatosPaseador("25",timestamp25,fechaDefinitiva25,paseador25,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

     }else if(io == 25){

        obtenerDatosPaseador("26",timestamp26,fechaDefinitiva26,paseador26,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 26){

        obtenerDatosPaseador("27",timestamp27,fechaDefinitiva27,paseador27,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 27){

        obtenerDatosPaseador("28",timestamp28,fechaDefinitiva28,paseador28,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 28){

        obtenerDatosPaseador("29",timestamp29,fechaDefinitiva29,paseador29,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

      }else if(io == 29){

        obtenerDatosPaseador("30",timestamp30,fechaDefinitiva30,paseador30,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados)

    } 

  }

}


function obtenerDatosPaseador(num,datum,fechaDefinitiva,paseador,jsonPerros,nombreuser,apuser,numero_usuario,paseadoresUtilizados) {


console.log("Entra a obtener datos paseador")

var db = firebase.database();
       var refPaseadoresfoto = db.ref("Paseadores");
        var pasrefoto = refPaseadoresfoto.child(paseador);

        pasrefoto.once("value",function(snapshott){
          var fotopaseador = snapshott.val().direcfoto;
          var nombrepaseador = snapshott.val().nombre;
          var numero_paseador = snapshott.val().celular;

          


guardarAgendadosIndividual(num,datum,fechaDefinitiva,paseador,jsonPerros,nombreuser,apuser,numero_usuario,fotopaseador,nombrepaseador,numero_paseador,paseadoresUtilizados)

          });


}




function guardarAgendadosIndividual(num,datumFirebase,fechaDefinitiva,id_paseador,jsonPerros,nombreuser,apuser,numero_usuario,fotopaseador,nombrepaseador,numero_paseador,paseadoresUtilizados) {


console.log("Entra a guardar agendados individual")

 var amount = ordenDatos.amount;
  var categoria = ordenDatos.categoria;
  var numero_perros = ordenDatos.num_perros;
  var perros = ordenDatos.perros;
  var tiempo = ordenDatos.tiempo_paseo;
  var latitud = ordenDatos.latitud;
  var longitud = ordenDatos.longitud;
  var direccion = ordenDatos.direccion;
  var monto_paseador = ordenDatos.monto_paseador;
  var dias = ordenDatos.dias;
  var diasEleccion = ordenDatos.diasEleccion;
  var op_date = ordenDatos.operation_date;
  var uid = ordenDatos.id_usr;
  var perrosNombre = ordenDatos.perrosNombre;
  var fee = ordenDatos.fee;
  var descripcion = ordenDatos.descripcion;
  var orderid = ordenDatos.order_id

  var amount = (amount/dias);
  var monto_paseador = (monto_paseador/dias);
  var nuevoFee = (fee/dias);



   var db = firebase.database();


var ref_agendaguarda = db.ref("Agendados");
console.log("orden ID ",orderid)
var ref_ordenguarda = ref_agendaguarda.child(orderid);


datum = datumFirebase / 1000;


 nuevaOrden = orderid +"_"+num;
  var nde = num+' de '+diasAsignarPaseadorActual

       var ref_ult = db.ref("Ultimo_Paseo").child(uid);

       if(datumFirebase > timestamp_ultimo_paseo_individual){

       ref_ult.set({ 

        order_id: nuevaOrden,
        uid: uid,
        ultimo_time: datumFirebase,
        nombre: nombreuser+" "+apuser

        });

       timestamp_ultimo_paseo_individual = datumFirebase

   }



      var ref_pas = db.ref("Paseos_paseadores");
      var paseospasref = ref_pas.child(id_paseador).child(nuevaOrden);

      paseospasref.set({ 

        categoria: categoria,
        num_perros: numero_perros,
        tiempo_paseo: tiempo,
        operation_date: fechaDefinitiva,
        amount: monto_paseador*0.60,
        order_id: nuevaOrden,
        time_op: datum,
        descripcion: descripcion

       });




 var res = direccion.split(";");
var nuevaDireccion = ""


if(res[1].trim() != ""){


nuevaDireccion = direccion

} else{

nuevaDireccion = direccion+ "SN"

}


      var ref = db.ref("Paseos_usuarios");
      var paseosursref = ref.child(uid).child(nuevaOrden);

      paseosursref.update({ 

        calificacion: 5.0, 
        categoria: categoria,
        id_paseador: id_paseador,
        id_usr: uid,
        num_perros: numero_perros,
        perros: perros,
        tiempo_paseo: tiempo,
        latitud: latitud, 
        longitud: longitud,
        direccion: nuevaDireccion,
        order_id: nuevaOrden,
        operation_date: fechaDefinitiva,
        amount: amount,
        numero_usuario: numero_usuario,
        numero_paseador: numero_paseador,
        timestamp: datumFirebase,
        vistocalif: "",
        agendado: "true",
        fee: nuevoFee,
        'estatusPaseo/estatus': "progreso",
        descripcion: descripcion,
        monto_paseador: monto_paseador*0.60,
        nde: nde,
        perrosEstatus: jsonPerros,
        perrosNombre: perrosNombre

         });


                    for (var perro in jsonPerros) {

      console.log(perro + " -> " + jsonPerros[perro]);
   // comrpobarSiExiste(perro,uid,nuevaOrden,datumFirebase)
}

    

      var data_array = perros.split(',');


        var ref_paseador_correcto = db.ref("Paseadores");
        var paseosactivosref_correcto = ref_paseador_correcto.child(id_paseador).child("paseosActivos").child(nuevaOrden);

        paseosactivosref_correcto.set({ 

          categoria: categoria,
          num_perros: numero_perros,
          tiempo_paseo: tiempo,
          operation_date: fechaDefinitiva,
          order_id: nuevaOrden,
          uid: uid,
          nombre: nombreuser+" "+apuser,
          estatus: "agendado",
          timestamp: datumFirebase,
          perrosNombre: perrosNombre 

        });



          var ref_user_correcto = db.ref("Usuarios");
          var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(nuevaOrden);

          useractivosref_correcto.set({ 

            tipo: categoria,
            num_perros: numero_perros,
            tiempo_paseo: tiempo,
            operation_date: fechaDefinitiva,
            order_id: nuevaOrden,
            perros: perros,
            foto_paseador: fotopaseador,
            nombre_paseador:nombrepaseador,
            estatus: "agendado",
            timestamp: datumFirebase,
            perrosNombre: perrosNombre 

          });




           paseosursref.child("numero_paseador").set(numero_paseador);

          actual++
           if(actual == dias){

            var paseadores = "";

            for (x in paseadoresUtilizados) {

             paseadores += paseadoresUtilizados[x] + ",";
             
             }


            ref_ordenguarda.child("id_paseador").set(paseadores);


               var key = db.ref("cambios_ordenes").push().getKey();
      var agendadosModificaciones = db.ref("cambios_ordenes");
      var currentUID = firebase.auth().currentUser.uid;

        
            agendadosModificaciones.child(key).update({ 

              id_orden: orderid,
              uid: currentUID,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              cambio: "asignacion individual",
              inicial: "sin paseador",
              final: paseadores

             })





    $('#coverSuave').hide();
    alert("Se ha asignado los paseadores exitosamente")
            busca_paseos()
           }



    } 
   





function verDireccion(latitud,longitud) {

window.open('direccion.html?latitud='+latitud+"&longitud="+longitud, '_blank');
}

function verFCompras(id_usr) {

window.open('comprasfinuser.html?uid='+id_usr, '_blank');
}



function cambiar_ubicacion(order_id,latitud,longitud) {

window.open('cambiarDireccion.html?latitud='+latitud+"&longitud="+longitud+"&order_id="+order_id+"&fuente=agenda", '_blank');
}

window.onload = busca_paseos;
//Para revisar 
function asignarPaseador(orderID) {
var txt;
var db = firebase.database();
var ref = db.ref("Agendados");

var paseador = prompt("Ingrese el UID del paseador:", "");
if (paseador == null || paseador == "") {
  alert("El UID no puede estar vacio");
} else {
  uidPaseador = paseador.replace(/\s+/g, '');
  txt = "Paseador: " + uidPaseador + " Order: " + orderID;
//  ref.child(orderID).remove();
//  location.reload();




comprobarPaseador(uidPaseador,orderID);

/*------------------------------------ Otro metodo------------------------------------------------------------

              var params = JSON.stringify({ id_paseador: uidPaseador,order_id: orderID});
let url = "https://us-central1-caminandog-218818.cloudfunctions.net/order_paquete_test?text="+params;


fetch(url)
.then(data => data.text())
.then((text) => {
  console.log('request succeeded with JSON response', text)
}).catch(function (error) {
  console.log('request failed', error)
})
------------------------------------ Otro metodo------------------------------------------------------------ */

}
document.getElementById("demo").innerHTML = txt;
}



function comprobarPaseador(id_paseador,orderID){


var db = firebase.database();
var ref_comprobacion = db.ref("Paseadores");
var ref_comPas = ref_comprobacion.child(id_paseador);

console.log(id_paseador);

ref_comPas.once("value", function(snapshot) {
if (snapshot.exists()) {
  console.log('exists');
  agenda(uidPaseador,orderID);
} else{

  alert("El paseador no existe")
}

});




}




function agenda(id_paseador,orderID) {


  


$('#carga2').show();

var orderid = orderID
var id_paseador = id_paseador;
var uid = "";

var db = firebase.database();
var ref_agenda = db.ref("Agendados");
var ref_orden= ref_agenda.child(orderid);

ref_orden.once("value",function(snap){


  var amount = snap.val().amount;
  var categoria = snap.val().categoria;
  var numero_perros = snap.val().num_perros;
  var perros = snap.val().perros;
  var tiempo = snap.val().tiempo_paseo;
  var latitud = snap.val().latitud;
  var longitud = snap.val().longitud;
  var direccion = snap.val().direccion;
  var monto_paseador = snap.val().monto_paseador;
  var dias = snap.val().dias;
  var diasEleccion = snap.val().diasEleccion;
  var op_date = snap.val().operation_date;
  var uid = snap.val().id_usr;
  var perrosNombre = snap.val().perrosNombre;
  var fee = snap.val().fee;
  var descripcion = snap.val().descripcion;


  var nuevoAmount = (amount/dias);
  var nuevoMonto_paseador = (monto_paseador/dias);
  var nuevoFee = (fee/dias);
   console.log("user id",uid);


      var refusername = db.ref("Usuarios");
      var usrrefname = refusername.child(uid);

      usrrefname.once("value",function(snapshottt){

        var nombreuser = snapshottt.val().nombre;
        var apuser = snapshottt.val().apellido_Paterno;
        var numero_usuario = snapshottt.val().telefono1;

        console.log("nombre",nombreuser);
        console.log("apellido",apuser);
        console.log("numero_usuario",numero_usuario);
        console.log("user id",uid);



        obtenerPerrosTotal(nuevoAmount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,nuevoMonto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,orderid,perrosNombre,nuevoFee,descripcion);



      });

});

}




function obtenerPerrosTotal(nuevoAmount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,nuevoMonto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,orderid,perrosNombre,nuevoFee,descripcion){


    console.log("Entra a obtener perros") 
    console.log("'Perros "+perros)

        var db = firebase.database();

        var jsonPerros = {};
        var limite = 0


           lastCharacter = perros.substring(perros.length - 1);

           console.log("ultimo caracter "+lastCharacter)

           if (lastCharacter == ","){

            perros = perros.substring(0,perros.length - 1);

           }


           console.log("Nuevos perros ",perros)

           var data_array = perros.split(',');


           limite = data_array.length - 1;

           console.log("limite"+limite)

           var actualFor = -1

        for (var i in data_array){

          var ref2 = db.ref("Perros");
          var perrosref = ref2.child(uid);
          var query = perrosref.orderByChild("idPerro").equalTo(data_array[i]);

          query.on("value",function(snapshot){

            snapshot.forEach(function(childSnapshot){

              
              var childData = childSnapshot.val();
              var nombre = childData.nombre;
              var foto = childData.foto;
              var idPerro = childData.idPerro;
              var objredy = { nombre: nombre, foto: foto, idPerro: idPerro, pipi:0, popo:0 };

              jsonPerros[idPerro] = objredy

              actualFor++
              console.log("i "+actualFor)


              if(actualFor == limite){

                var stringified = JSON.stringify(jsonPerros);
                var myJsonString = JSON.parse(stringified);
                // console.log(myJsonString)

                console.log("Termina con los perros")
                datos_paseador(nuevoAmount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,nuevoMonto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,orderid,perrosNombre,nuevoFee,descripcion,myJsonString)

              }
 

            });

          });


        }



}



function datos_paseador(amount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,monto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,orderIDborrar,perrosNombre,nuevoFee,descripcion,jsonPerros) {

var db = firebase.database();
       var refPaseadoresfoto = db.ref("Paseadores");
        var pasrefoto = refPaseadoresfoto.child(id_paseador);

        pasrefoto.once("value",function(snapshott){
          var fotopaseador = snapshott.val().direcfoto;
          var nombrepaseador = snapshott.val().nombre;
          var numero_paseador = snapshott.val().celular;

          


fecha_ultimo_paseo(amount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,monto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,fotopaseador,nombrepaseador,numero_paseador,orderIDborrar,perrosNombre,nuevoFee,descripcion,jsonPerros)




          });


}



function fecha_ultimo_paseo(amount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,monto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,fotopaseador,nombrepaseador,numero_paseador,orderIDborrar,perrosNombre,nuevoFee,descripcion,jsonPerros){


   var db = firebase.database();
       var ultimo_paseo = db.ref("Ultimo_Paseo");
        var ultimo_paseo_usu = ultimo_paseo.child(uid);

        ultimo_paseo_usu.once("value",function(snapshott){

          var ultimo_time = 0


         if (snapshott.exists()) {

       ultimo_time = snapshott.val().ultimo_time;
          }
          
          

guardar_agendados(amount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,monto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,fotopaseador,nombrepaseador,numero_paseador,orderIDborrar,perrosNombre,nuevoFee,descripcion,ultimo_time,jsonPerros)




          });


}

function guardar_agendados(amount,categoria,numero_perros,perros,tiempo,latitud,longitud,direccion,monto_paseador,dias,diasEleccion,op_date,orderid,nombreuser,apuser,numero_usuario,uid,id_paseador,fotopaseador,nombrepaseador,numero_paseador,orderIDborrar,perrosNombre,nuevoFee,descripcion,timestamp_ultimo_paseo,jsonPerros) {


   var db = firebase.database();


var ref_agendaguarda = db.ref("Agendados");
var ref_ordenguarda = ref_agendaguarda.child(orderid);


    //  var refAgendado = db.ref("Agendados").child(orderIDborrar);
    //  refAgendado.remove();

    var array = diasEleccion.split(",");
    var fecha = diasEleccion.split(" ");


    console.log("cantidad array",array.length);

    for (var io = 0; io < dias ; io++) {

       var nuevaOrden = "";
       nuevaOrden = orderid +"_"+(io + 1);
       var nde = (io+1)+' de '+dias
       var fecha1 = array[io].split(" ");
       var mes = ""


       if(fecha1[2] == "enero"){
              mes = "1";
              mesenviar = "0";
       }else if (fecha1[2] == "febrero"){
              mes = "2";
              mesenviar = "1";
       }else if (fecha1[2] == "marzo"){
              mes = "3";
              mesenviar = "2";
       }else if (fecha1[2] == "abril"){
              mes = "4";
              mesenviar = "3";
       }else if (fecha1[2] == "mayo"){
              mes = "5";
              mesenviar = "4";
       }else if (fecha1[2] == "junio"){
              mes = "6";
              mesenviar = "5";
       }else if (fecha1[2] == "julio"){
              mes = "7";
              mesenviar = "6";
       }else if (fecha1[2] == "agosto"){
              mes = "8";
              mesenviar = "7";
       }else if (fecha1[2] == "septiembre"){
              mes = "9";
              mesenviar = "8";
       }else if (fecha1[2] == "octubre"){
              mes = "10";
              mesenviar = "9";
       }else if (fecha1[2] == "noviembre"){
              mes = "11";
              mesenviar = "10";
       }else if (fecha1[2] == "diciembre"){
              mes = "12";
              mesenviar = "11";
       }

       var fechaDefinitiva = fecha1[3]+"-"+mes+"-"+fecha1[1]+"T"+fecha1[6]+":00";
 var fechatimestamp = fecha1[6].split(":");

console.log(fecha1[3],mesenviar,fecha1[1],fechatimestamp[0],fechatimestamp[1],'00');

var datum = new Date(fecha1[3],mesenviar,fecha1[1],fechatimestamp[0],fechatimestamp[1],'00');
  var datumFirebase = datum.getTime();
  datum = datumFirebase / 1000;



   console.log("veces",io);
   console.log(id_paseador);
   console.log("datum ",datum);




       var ref_ult = db.ref("Ultimo_Paseo").child(uid);

       if(datumFirebase > timestamp_ultimo_paseo){

       ref_ult.set({ 

        order_id: nuevaOrden,
        uid: uid,
        ultimo_time: datumFirebase,
        nombre: nombreuser+" "+apuser

        });

       timestamp_ultimo_paseo = datumFirebase

   }

      var ref_pas = db.ref("Paseos_paseadores");
      var paseospasref = ref_pas.child(id_paseador).child(nuevaOrden);

      paseospasref.set({ 

        categoria: categoria,
        num_perros: numero_perros,
        tiempo_paseo: tiempo,
        operation_date: fechaDefinitiva,
        amount: monto_paseador*0.60,
        order_id: nuevaOrden,
        time_op: datum,
        descripcion: descripcion

       });




 var res = direccion.split(";");
var nuevaDireccion = ""


if(res[1].trim() != ""){


nuevaDireccion = direccion

} else{

nuevaDireccion = direccion+ "SN"

}

      var ref = db.ref("Paseos_usuarios");
      var paseosursref = ref.child(uid).child(nuevaOrden);

      paseosursref.update({ 

        calificacion: 5.0, 
        categoria: categoria,
        id_paseador: id_paseador,
        id_usr: uid,
        num_perros: numero_perros,
        perros: perros,
        tiempo_paseo: tiempo,
        latitud: latitud, 
        longitud: longitud,
        direccion: nuevaDireccion,
        order_id: nuevaOrden,
        operation_date: fechaDefinitiva,
        amount: amount,
        numero_usuario: numero_usuario,
        numero_paseador: numero_paseador,
        timestamp: datumFirebase,
        vistocalif: "",
        agendado: "true",
        fee: nuevoFee,
        'estatusPaseo/estatus': "progreso",
        descripcion: descripcion,
        monto_paseador: monto_paseador*0.60,
        nde: nde,
       perrosEstatus: jsonPerros,
       perrosNombre: perrosNombre

         });


      var data_array = perros.split(',');


        var ref_paseador_correcto = db.ref("Paseadores");
        var paseosactivosref_correcto = ref_paseador_correcto.child(id_paseador).child("paseosActivos").child(nuevaOrden);

        paseosactivosref_correcto.set({ 

          categoria: categoria,
          num_perros: numero_perros,
          tiempo_paseo: tiempo,
          operation_date: fechaDefinitiva,
          order_id: nuevaOrden,
          uid: uid,
          nombre: nombreuser+" "+apuser,
          estatus: "agendado",
          timestamp: datumFirebase,
          perrosNombre: perrosNombre 

        });



          var ref_user_correcto = db.ref("Usuarios");
          var useractivosref_correcto = ref_user_correcto.child(uid).child("paseosActivos").child(nuevaOrden);

          useractivosref_correcto.set({ 

            tipo: categoria,
            num_perros: numero_perros,
            tiempo_paseo: tiempo,
            operation_date: fechaDefinitiva,
            order_id: nuevaOrden,
            perros: perros,
            foto_paseador: fotopaseador,
            nombre_paseador:nombrepaseador,
            estatus: "agendado",
            timestamp: datumFirebase,
            perrosNombre: perrosNombre 

          });




           paseosursref.child("numero_paseador").set(numero_paseador);








    console.log("Perros: "+jsonPerros)


    for (var perro in jsonPerros) {

      console.log(perro + " -> " + jsonPerros[perro]);
   // comrpobarSiExiste(perro,uid,nuevaOrden,datumFirebase)
}


    }

   
   
  ref_ordenguarda.child("id_paseador").set(id_paseador);

   var key = db.ref("cambios_ordenes").push().getKey();
      var agendadosModificaciones = db.ref("cambios_ordenes");
      var currentUID = firebase.auth().currentUser.uid;

        
            agendadosModificaciones.child(key).update({ 

              id_orden: orderid,
              uid: currentUID,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              cambio: "asignacion total",
              inicial: "sin paseador",
              final: id_paseador

             })


$('#carga2').hide();
 alert("Se ha asignado el paseador exitosamente")
location.reload();

   

}


/*
function comrpobarSiExiste(idPerro,uid,nuevaOrden,datumFirebase){

        var db = firebase.database();
        var recuperandog = db.ref("RecuperandogQR");

recuperandog.child(idPerro).once('value', function(snapshot) {
if (snapshot.exists()) {
  
              
              recuperandog.child(idPerro).child("paseos").child(nuevaOrden).child("fecha").set(datumFirebase);
}
else{

              recuperandog.child(idPerro).child("uid").set(uid);
              recuperandog.child(idPerro).child("QR").set("");
              recuperandog.child(idPerro).child("servicio").set("false");
              recuperandog.child(idPerro).child("latitud").set(0.1);
              recuperandog.child(idPerro).child("longitud").set(0.1);
              recuperandog.child(idPerro).child("timestamp").set(0);
              recuperandog.child(idPerro).child("direccion").set("");
              recuperandog.child(idPerro).child("nombreContacto").set("");
              recuperandog.child(idPerro).child("telefonoContacto").set("");
              recuperandog.child(idPerro).child("lectura").set("false");
              recuperandog.child(idPerro).child("primeraLectura").set("false");
              recuperandog.child(idPerro).child("idPerro").set(idPerro);
      recuperandog.child(idPerro).child("paseos").child(nuevaOrden).child("fecha").set(datumFirebase);


}
});



}
*/

function terminacarga(){

var myVar = setInterval(myTimer, 10000);


  
function myTimer() {

$('#carga2').hide();
 alert("Se ha asignado el paseador exitosamente")
location.reload();



}




}

