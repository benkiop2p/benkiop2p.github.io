llenarTabla();

function llenarTabla() {
    var peticion = $.ajax({
        url: "https://sheetsu.com/apis/v1.0/0b0f92b49290",
        data: {

        },
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15",
        dataType: 'json',

        success: function(response) {
            for (var i = 0; i < response.length; i++) {
                var card = $('<div>', {
                        'class': 'col s6'
                    }).append(
                        $('<div>', {
                            'class': 'card'
                        }).append(
                            $('<div>', {
                                'class': 'card-image waves-effect waves-block waves-light'
                            }).append(
                                $('<img>', {
                                    'class': 'activator',
                                    'src': 'img/bnkdflt.jpeg'
                                })),
                            $('<div>', {
                                'class': 'card-content'
                            }).append(
                                $('<span>', {
                                    'class': 'card-title activator grey-text text-darken-4',
                                    'id': 'cardtitle' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('more_vert')),
                                $('<p>', {
                                    'id': 'description' + i
                                }),
                                $('<p>', {
                                    'id': 'category' + i
                                })
                              ),
                            $('<div>', {
                                'class': 'card-reveal'
                            }).append(
                                $('<span>', {
                                    'class': 'card-title grey-text text-darken-4',
                                    'id': 'cardtitle_' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('close')),
                                $('<p>', {
                                    'id': 'description_' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('subject')),
                                $('<p>', {
                                    'id': 'requerimientos' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('list')),
                                $('<p>', {
                                    'id': 'tiempo' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('timelapse')),
                                $('<p>', {
                                    'id': 'lugar' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('place')),
                                $('<p>', {
                                    'id': 'fechat' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('date_range')),
                                $('<p>', {
                                    'id': 'facilitador' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('sentiment_satisfied')),
                                $('<p>', {
                                    'id': 'contactof' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('contact_phone')),
                                $('<p>', {
                                    'id': 'areadisponible' + i
                                }).append($('<i>', {
                                    'class': 'material-icons right'
                                }).text('gps_fixed'))
                              )
                        ))
                $('#tPizarra').append(card);
                $("#cardtitle" + i).append(response[i]['Nombre_Actividad']);
                $("#description" + i).append(response[i]['Descripción']);
                $("#category" + i).append(response[i]['Categoría']);
                $("#cardtitle_" + i).append(response[i]['Nombre_Actividad']);
                $("#description_" + i).append(response[i]['Descripción']);
                $("#requerimientos" + i).append(response[i]['Requerimientos']);
                $("#tiempo" + i).append(response[i]['Tiempo aproximado']);
                $("#fechat" + i).append(response[i]['Fecha Tentativa']);
                $("#lugar" + i).append(response[i]['Lugar']);
                $("#facilitador" + i).append("Facilitador(a): "+response[i]['Nombre']);
                $("#contacto" + i).append(response[i]['Contacto']);
                $("#areadisponible" + i).append(response[i]['Lugar de residencia-trabajo']);
            }
        },
        error: function(request, error) {
            alert(error);
        }
    });
}
