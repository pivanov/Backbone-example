define([
  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/about',
  ], function($, _, Backbone, homeView, aboutView) {

  var AppRouter = Backbone.Router.extend({

    routes: {
      "": "home",
      "about": "about"
    },

    home: function() {
      homeView.render();
    },
    
    about: function() {
      aboutView.render();
    }
  });

  var init = function() {
    var appRouter = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: init
  };
    
});