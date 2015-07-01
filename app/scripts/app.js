(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  app.name = "Presentation name";

  app.slidesNumber = 0;

  app.previousSlide = function() {
    if(app.route > 0) {
      app.route--;
      window.location.href = "#!/" + app.mode + '/' + app.route;
    }
    forceMapResize();
  }

  app.nextSlide = function() {
    if(app.route < app.slidesNumber -1) {
      app.route++;
      window.location.href = "#!/" + app.mode + '/' + app.route;
    }
    forceMapResize();
  }

  function forceMapResize() {
    if(app.route > 10){
      var maps = document.querySelectorAll('google-map');
      for(var i=0; i<maps.length;i++) {
        maps[i].resize();
      }
    }
  }

})(document);
