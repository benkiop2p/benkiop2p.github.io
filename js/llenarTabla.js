llenarTabla();
function llenarTabla(){
  var peticion = $.ajax({
    var spreadsheetID = "1Wiqvmn1wVnrGkX-cbF6nEq0x0Q-EcKgrH733L4wszKk";
    url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json",
    contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
    dataType: 'json',

    success: function(response){
      var tbody = document.querySelector('#tPizarra tbody');
      tbody.innerHTML = '';

      for(var i = 0; i<response.length;i++){

        var fila = tbody.insertRow(i);

        var celdaNombreActividad = fila.insertCell(0);
        var celdaDescripcion = fila.insertCell(1);
        var celdaCategoria = fila.insertCell(2);
        var celdaTiempoAproximado = fila.insertCell(3);
        var celdaFacilitador = fila.insertCell(4);

        celdaNombre.innerHTML = response[i]['Nombre_Actividad'];
        celdaApellido.innerHTML = response[i]['Descripción'];
        celdaEdad.innerHTML = response[i]['Categoría'];
        celdaGenero.innerHTML = response[i]['Tiempo aproximado'];
        celdaNacionalidad.innerHTML = response[i]['Nombre'];
      }

    },
    error: function(request, error) {
    alert(error);
    }
  });

}
