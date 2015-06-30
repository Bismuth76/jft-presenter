/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.name = "Presentation name";

  app.slidesNumber = 0;

  app.latitude = 47.2172522;
  app.longitude = -1.5533600;

  app.markerLatitude = 47.2172522;
  app.markerLongitude = -1.5533600;

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered

    var map = document.querySelector('#map');

    map.resize();

  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    /*if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }*/
  };

  app.toggleDrawer = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    drawerPanel.togglePanel();
  }

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
