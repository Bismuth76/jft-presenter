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
  }

  app.nextSlide = function() {
    if(app.route < app.slidesNumber -1) {
      app.route++;
      window.location.href = "#!/" + app.mode + '/' + app.route;
    }
  }

})(document);
