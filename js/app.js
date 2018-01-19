// Dom7

// Framework7 App main instance
var app = new Framework7()
/*{
  root: '#app', // App root element
  //id: 'io.framework7.testapp', // App bundle ID
  name: 'Benkio', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  /*data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },*/
// App root methods
/*methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes
})*/

var $$ = Dom7


// Init/Create views
var peView = app.views.create('#view-pe', {
  url: '/'
})
var usrView = app.views.create('#view-users', {
  url: '/usuarios/'
})
var hrView = app.views.create('#view-hr', {
  url: '/herramientas/'
})
var icView = app.views.create('#view-ic', {
  url: '/intercambios/'
})
var infoView = app.views.create('#view-info', {
  url: '/info/'
})
// Login Screen Demo
/*$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});*/

console.log('lel')

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
    console.log(a.innerHTML.toUpperCase())
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
