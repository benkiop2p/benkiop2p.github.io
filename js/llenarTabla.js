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
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('subject').append($('<p>', {
                                'id': 'description_' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('mode_edit').append($('<p>', {
                                'id': 'requerimientos' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('timelapse').append($('<p>', {
                                'id': 'tiempo' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('place').append($('<p>', {
                                'id': 'lugar' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('date_range').append($('<p>', {
                                'id': 'fechat' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('sentiment_satisfied').append($('<p>', {
                                'id': 'facilitador' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('contact_phone').append($('<p>', {
                                'id': 'contactof' + i
                            })),
                            $('<i>', {
                                'class': 'material-icons right'
                            }).text('gps_fixed').append($('<p>', {
                                'id': 'areadisponible' + i
                            }))
                        )
                    ))
                $('#tPizarra').append(card);
                $("#cardtitle" + i).append(response[i]['Nombre_Actividad']);
                $("#description" + i).append(response[i]['Descripción']);
                $("#category" + i).append(" Categoría: " + response[i]['Categoría']);
                $("#cardtitle_" + i).append(" "+response[i]['Nombre_Actividad']);
                $("#description_" + i).append(" "+response[i]['Descripción']);
                $("#requerimientos" + i).append(" Requerimientos: " + response[i]['Requerimientos']);
                $("#tiempo" + i).append(" Tiempo Aproximado: " + response[i]['Tiempo aproximado']);
                $("#fechat" + i).append(" Fecha Tentativa: " + response[i]['Fecha Tentativa']);
                $("#lugar" + i).append(" Lugar: " + response[i]['Lugar']);
                $("#facilitador" + i).append(" Facilitador(a): " + response[i]['Nombre']);
                $("#contactof" + i).append(" "+response[i]['Contacto']);
                $("#areadisponible" + i).append(" "+response[i]['Lugar de residencia-trabajo']);
            }
        },
        error: function(request, error) {
            alert(error);
        }
    });
}
