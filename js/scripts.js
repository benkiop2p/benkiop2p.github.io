llenarDropdown();
function llenarDropdown() {
    var peticion = $.ajax({
        url: "https://sheetsu.com/apis/v1.0/40c2bb5aafcc",
        data: {

        },
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',

        success: function(response) {
          var categorias= [];

            for (var i = 0; i < response.length; i++) {

        var category = response[i]['Categoría'];
              categorias.push(category);
              alert(category);

              }

           var categoriasU= $.unique(categorias);
          for (var u = 0; u < categoriasU.length; u++) {

          $('#dropDown').append(('<option>').append(categoriasU[u]));


            }

            },
            error: function(request, error) {
                alert(error);
            }
        });
    }

/*function filtrarCategoria(selected) {
    var peticion = $.ajax({
        url: "https://sheetsu.com/apis/v1.0/0b0f92b49290",
        data: {

        },
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',

        success: function(response) {

            for (var i = 0; i < response.length; i++) {


              }


            },
            error: function(request, error) {
                alert(error);
            }
        });
    }
