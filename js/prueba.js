const db = firebase.database();
//console.log(db);

coleccionDatos = db.ref().child("Agendados");
coleccionUsuario = db.ref().child("Usuarios")
bodyInformacion = $('#bodyInformacion').val();


const iconoUser = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/> </svg>'


function mostrarInformacion({ order_id, dias, tiempo_paseo, num_perros
                            , categoria, perrosNombre, direccion, diasEleccion}) {
    var nuevo_tiempo = "";
        if (tiempo_paseo == 1) {
          nuevo_tiempo = "1 Hora";
        } else if (tiempo_paseo == 2) {
          nuevo_tiempo = "2 Horas";
        } else if (tiempo_paseo == 0.5) {
          nuevo_tiempo = "30 Minutos";
        } else if (tiempo_paseo == 1.5) {
          nuevo_tiempo = "90 Minutos";
        } else {
          nuevo_tiempo = tiempo_paseo;
        }    
    return `
         <td>${order_id}</td>
         <td class="text-center"><button class="btnUsuarios btn btn-info btn-lg btn-block" data-toggle="tooltip" title="Editar">${iconoUser}</button>
         <td>${dias}</td>
         <td>${nuevo_tiempo}</td>
         <td>${num_perros}</td>
         <td>${categoria}</td>
         <td>${perrosNombre}</td>
         <td>${direccion}</td>
         <td>${procesarDiasEleccion(diasEleccion)}</td>
     `
}



$('#tablaAgenda').on('click', '.btnUsuarios', function(){
  $('#modalAltaEdicion').modal('show');
});


//CHILD_ADDEAD
coleccionDatos.on('child_added', data => {
    // Verificar si el valor de id_paseador es "no_asignado"
    if (data.val().id_paseador === "no_asignado") {
        let tr = document.createElement('tr');
        tr.id = data.key;
        tr.innerHTML = mostrarInformacion(data.val());
        document.getElementById('bodyInformacion').appendChild(tr);
    }
});

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
  
