require.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
    router: '../router',
    models: '../models',
    controllers: '../controllers',
    views: '../views',
    templates: '../templates'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['router'], function(router) {
  
  router.initialize();
  
});