(function () {
  'use strict';

  // create the angular app
  angular.module('snsApp', [
    'snsApp.controllers',
    'snsApp.directives'
    ]);

  // setup dependency injection
  angular.module('d3', []);
  angular.module('snsApp.controllers', []);
  angular.module('snsApp.directives', ['d3']);


}());