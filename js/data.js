$(document).ready(function() {
  var exchRegistrados = 'https://docs.google.com/spreadsheets/d/1Wiqvmn1wVnrGkX-cbF6nEq0x0Q-EcKgrH733L4wszKk/edit#gid=1508873198';
  var iniciativas = 'https://docs.google.com/spreadsheets/d/1gWxJ720bJNGzMA9OEJTK6xa44JEyfl5s1JeA95mF_jE/edit#gid=1841199247';
  var agentes = 'https://docs.google.com/spreadsheets/d/1IsMJ8gwbdXT7nUbtDJ-bUWWaO3mw05hJ0Ecu_Tm0xoM/edit#gid=488996932';
  var iniciativasGlobal = 'https://docs.google.com/spreadsheets/d/1gWxJ720bJNGzMA9OEJTK6xa44JEyfl5s1JeA95mF_jE/edit#gid=1841199247';
  var infraRed = 'https://docs.google.com/spreadsheets/d/1gWxJ720bJNGzMA9OEJTK6xa44JEyfl5s1JeA95mF_jE/edit#gid=64351420';
  var onlineED = 'https://docs.google.com/spreadsheets/d/1gWxJ720bJNGzMA9OEJTK6xa44JEyfl5s1JeA95mF_jE/edit#gid=1369604528';
  var biblios = 'https://docs.google.com/spreadsheets/d/1gWxJ720bJNGzMA9OEJTK6xa44JEyfl5s1JeA95mF_jE/edit#gid=797437749';
  var app = 'https://docs.google.com/spreadsheets/d/1gWxJ720bJNGzMA9OEJTK6xa44JEyfl5s1JeA95mF_jE/edit#gid=994904731'

  var hdTemplate = Handlebars.compile($('#hdSW').html())
  var seTemplate = Handlebars.compile($('#seSW').html())
  var baTemplate = Handlebars.compile($('#baSW').html())
  var irTemplate = Handlebars.compile($('#irSW').html())
  var exchTemp = Handlebars.compile($('#exchSW').html())
  var userTemplate = Handlebars.compile($('#usrSW').html())
  var appTemplate = Handlebars.compile($('#appSW').html())


  $('#appContainer').sheetrock({
    url: app,
    query: "select A,B,C order by A",
    labels: ['Nombre','Description', 'Web'],
    rowTemplate: appTemplate
  })

  $('#usrContainer').sheetrock({
    url: agentes,
    query: "select B,C,D,E,F,G,H",
    labels: ['Nombre', 'Tipo', 'Contacto', 'Intereses', 'Ejes', 'Lugar', 'Conocimientos'],
    rowTemplate: userTemplate
  })

  /*$('#exchContainer').sheetrock({
    url: exchRegistrados,
    query: "select * order by I asc",
    rowTemplate: exchTemp
  })*/

actualizarIntercambios('Todas')

  function filtrarExch(filter) {

        $('#exchContainer').empty().sheetrock({
          url: exchRegistrados,
          query: "select A, B, C, D, E, F, G, H, I, J, K, L where I = '"+filter+"' order by E asc",
          rowTemplate: exchTemp,
          reset: true
        })
      }

  /*function filtrarUsuarios(filter) {
    $('#usrContainer').empty().sheetrock({
      url: agentes,
      query: "select B,C,D,E,F,G,H where C",
      labels: ['Nombre', 'Tipo', 'Contacto', 'Intereses', 'Ejes', 'Lugar', 'Conocimientos'],
      rowTemplate: userTemplate,
      reset: true
    })
  }*/

  $('#irContainer').sheetrock({
    url: iniciativasGlobal,
    query: "select B,C,D order by B",
    labels: ['Name', 'Description', 'Web'],
    rowTemplate: irTemplate
  });

  $('#baContainer').sheetrock({
    url: biblios,
    query: "select A,B order by A",
    labels: ['Name', 'Web'],
    rowTemplate: baTemplate
  });

  $('#seContainer').sheetrock({
    url: onlineED,
    query: "select A,B,C order by C",
    labels: ['Name', 'Web', 'Category'],
    rowTemplate: seTemplate
  });

  $('#hdContainer').sheetrock({
    url: infraRed,
    query: "select A,B,C order by A",
    labels: ['Name', 'Description', 'Web'],
    rowTemplate: hdTemplate
  });



icCategorias.addEventListener("change", function () {
  var filtroCat = document.getElementById("icCategorias").value;
  console.log(filtroCat)
  actualizarIntercambios(filtroCat)
})
  function actualizarIntercambios(filter) {
    console.log(filter)
    if (filter != 'Todas') {

      filtrarExch(filter)
      console.log(filter)
    } else {
      $('#exchContainer').empty().sheetrock({
        url: exchRegistrados,
        query: "select * order by I asc",
        rowTemplate: exchTemp,
        reset: true
    })

    }
  }

})
