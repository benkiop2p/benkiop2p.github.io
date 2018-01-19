var csvRemote = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrJY9F0OPH1gx_HbnqGlJfhqFFY656TYFi8Vo0JeWcRsJeVFNhlLNpyhwZNjy7JFCoLJcv0uKUwW4X/pub?output=csv"
var csv = "data/data.csv"
var latDefault = 9.928102283140376
var longDefault = -84.11596298217775

var map = L.map('map', {
  center: [9.94, -84.09],
  zoom: 13
})
map.locate({
  setView: true,
  maxZoom: 13
})
var basemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  maxZoom: 18
})

basemap.addTo(map);
map.on('locationfound', onLocationFound)


function crearLayer(filter){
  Papa.parse(csv, {
      download: true,
      header: true,
      complete: function(results) {
        var data = results.data
        console.log(results.data)
        setData(data,filter)
      }
    })
}

function crearLayerDistancia(km){
  Papa.parse(csv, {
      download: true,
      header: true,
      complete: function(results) {
        var data = results.data
        console.log(results.data)
        setDataDistancia(data,km)
      }
    })
}


Papa.parse(csv, {
    download: true,
    header: true,
    complete: function(results) {
      var data = results.data
      console.log(results.data)
      setData(data)
    }
  })


function setData(jsonParsed,filter) {
  var result = GeoJSON.parse(jsonParsed, {
    Point: ['lat', 'long'],
    include: ["name", "city", "tipo", "description", "horario", "phone", "email", "wifi", "mesasdisponibles", "tamañoaprox"]
  })
  console.log(result)
  setgeoJsonLayer(result,filter)
}

function setDataDistancia(jsonParsed,km) {
  var result = GeoJSON.parse(jsonParsed, {
    Point: ['lat', 'long'],
    include: ["name", "city", "tipo", "description", "horario", "phone", "email", "wifi", "mesasdisponibles", "tamañoaprox"]
  })
  console.log(result)
  setgeoJsonLayerDistancia(result,km)
}

function setgeoJsonLayer(data, filter) {
  var layerData
  if (filter != null) {
    layerData = L.geoJson(data, {

      filter: function(feature, layer) {
        console.log(filter)
        return feature.properties.tipo == filter;
      },
      onEachFeature: onEachFeature
    })
    console.log('passs')
  } else {
    layerData = L.geoJson(data, {
      onEachFeature: onEachFeature
    })
  }

  layerData.addTo(map)
  console.log(layerData)
  console.log(map.hasLayer(layerData))
}

function setgeoJsonLayerDistancia(data, km) {
  var layerDist
  if (km != null) {
    layerDist = L.geoJson(data, {

        filter: function(feature, layer) {
          var location = L.latLng(new L.LatLng(latDefault, longDefault)).distanceTo([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
          return location <= km * 1000
        },
        onEachFeature: onEachFeature

    })
    console.log('passs')
  } else {
    layerDist = L.geoJson(data, {
      onEachFeature: onEachFeature
    })
  }

  layerDist.addTo(map)
  console.log(layerData)
  console.log(map.hasLayer(layerData))
}

function onLocationFound(e) {
  latDefault = e.latlng.lat
  longDefault = e.latlng.lng
  console.log(e.latlng.lng + " " + e.latlng.lat)
}




function whenClicked(e) {
  // e = event
  sidebar.toggle();
  console.log(e);
}

function displayinfo(info) {
  console.log(info)
  x = document.getElementById('title')
  x.innerHTML = info.properties.name
  console.log(info.properties.name)
  x = document.getElementById('tag')
  x.innerHTML = info.properties.tipo
  x = document.getElementById('description')
  x.innerHTML = info.properties.description
  x = document.getElementById('horario')
  x.innerHTML = info.properties.horario
  x = document.getElementById('phone')
  x.innerHTML = info.properties.phone
  x = document.getElementById('email')
  x.innerHTML = info.properties.email
  x = document.getElementById('wifi')
  x.innerHTML = info.properties.wifi
  x = document.getElementById('mesas')
  x.innerHTML = info.properties.mesasdisponibles
  x = document.getElementById('coordenadas')
  var lat = info.geometry.coordinates[1].toString()
  var long = info.geometry.coordinates[0].toString()
  var url = "http://maps.google.com/maps?q=" + lat + "," + long
  x.innerHTML = "Ver en Google Maps"
  x.setAttribute('href', url)
}

function onEachFeature(feature, layer) {
  layer.on(
    'click',
    function(e) {
      whenClicked(e)
      // sidebar.setContent(info)
      displayinfo(feature)
      console.log(feature)
    })
}

//center map to selected element
//map.panTo([dataElement[0].lat, dataElement[0].long])
var sidebar = L.control.sidebar('sidebar', {
  closeButton: false,
  position: 'right'
})
map.addControl(sidebar)
//sidebar.hide()

map.on('click', function() {
  sidebar.hide();
})
sidebar.on('show', function() {
  console.log('Sidebar will be visible.');
})
sidebar.on('shown', function() {
  console.log('Sidebar is visible.');
})
sidebar.on('hide', function() {
  console.log('Sidebar will be hidden.');
})
sidebar.on('hidden', function() {
  console.log('Sidebar is hidden.');
})


var slider = document.getElementById("slider")
slider.addEventListener('change', update)
//layerDistancia.addTo(map)
console.log("valor" + slider.value.toString())

function update() {
  resetearLayers()


  document.getElementById("distancia").value = slider.value
  crearLayerDistancia(slider.value)
  console.log("valor" + slider.value.toString())


  }




map.whenReady(function(feature, layer) {
  console.log('readdyyyy')
  var types = ["Casa Cultural","Coworking Space","Fab Lab","Museo","Hostal Abierto","Centro Creativo","Cafe"]
  /* Por agregar: bibliotecas, talleres*/
  var checkboxes = []

  for (var i = 0; i < types.length; i++) {
    // Create an an input checkbox and label inside.
    var item = filters.appendChild(document.createElement('li'));
    var title = item.appendChild(document.createElement('span'));
    var label = item.appendChild(document.createElement('label'));
    var checkbox = label.appendChild(document.createElement('input'));
    var span = label.appendChild(document.createElement('span'));

    checkbox.type = 'checkbox'
    checkbox.id = types[i]
    checkbox.checked = true
    label.setAttribute('class','toggle toggle-init color-blue item-content')
    span.setAttribute('class','toggle-icon')
    title.innerHTML = types[i]

    checkbox.addEventListener('change', updateBoxes)
    checkboxes.push(checkbox)
  }

  function updateBoxes() {
    var enabled = {};

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) enabled[checkboxes[i].id] = true;
      console.log(enabled[checkboxes[i].id])

    }
    if (checkboxes[6].id in enabled) {
      crearLayer('CLCafe')
    } else {
      resetearLayers()
    }
    if (checkboxes[5].id in enabled) {
      crearLayer('CentroCreativo')
    } else {
      resetearLayers()
    }
    if (checkboxes[4].id in enabled) {
      crearLayer('HostalesAbiertos')
    } else {
      resetearLayers()
    }
    if (checkboxes[3].id in enabled) {
      crearLayer('Museo')
    } else {
      resetearLayers()
    }
    if (checkboxes[2].id in enabled) {
      crearLayer('FabLab')
    } else {
      resetearLayers()
    }
    if (checkboxes[1].id in enabled) {
      crearLayer('CoworkingSpace')
    } else {
      resetearLayers()
    }
    if (checkboxes[0].id in enabled) {
      crearLayer('CasaCultural')
    } else {
      resetearLayers()
    }
    /*if (checkboxes[0].id in enabled) {
      crearLayer()
    } else {
      map.eachLayer(function(layer){
    map.removeLayer(layer)
})
basemap.addTo(map);
    }*/

  }
})

function resetearLayers(){
  map.eachLayer(function(layer){
map.removeLayer(layer)
})
basemap.addTo(map);
}
