// Dom7

// Framework7 App main instance
var app = new Framework7(
{
  root: '#app', // App root element
  name: 'Benkio', // App name
  theme: 'md' // Automatic theme detection

})

var $$ = Dom7


// Init/Create views
var homeView = app.views.create('#home', {
  url: '/'
})
var peView = app.views.create('#pencuentro', {
  url: '/pencuentro/'
})
var usrView = app.views.create('#usrs', {
  url: '/usuarios/'
})
var hrView = app.views.create('#hrecursos', {
  url: '/herramientas/'
})
var icView = app.views.create('#intercambios', {
  url: '/intercambios/'
})
var infoView = app.views.create('#eventos', {
  url: '/eventos/'
})


function buscar() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('search');
  filter = input.value.toUpperCase();
  ul = document.getElementById('appContainer');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("span")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function buscarSE() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchSE');
  filter = input.value.toUpperCase();
  ul = document.getElementById('seContainer');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    //console.log(a.innerHTML.toUpperCase())
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function buscarIR() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchIR');
  filter = input.value.toUpperCase();
  ul = document.getElementById('irContainer');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function buscarBA() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchBA');
  filter = input.value.toUpperCase();
  ul = document.getElementById('baContainer');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function buscarH() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchH');
  filter = input.value.toUpperCase();
  ul = document.getElementById('hdContainer');
  li = ul.getElementsByTagName('li');
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
