/*
var apiURL = 'https://sheetsu.com/apis/v1.0/40c2bb5aafcc';

new Vue({

  el: '#pizarra',

  data: {
    currentBranch: 'dev',
    items: null
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
    var self = this;
    $.get( apiURL, function( data ) {
        self.items = data;
        console.log(data);
    });

    }

  }
});


new Vue({
  el:"#pizarra",
  data:{
    itcmbs: null
  },
  mounted:function(){
    $.getJSON("data/intercambios.json", function(data){
      this.itcmbs = data.results;
    }.bind(this));
  }
})
*/
