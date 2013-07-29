define(['jquery', 'underscore', 'backbone', 'text!templates/home.html'], function($, _, Backbone, tpl) {
  
  var HomeView = Backbone.View.extend({
    el: $("#content"),
    render: function() {
      $(this.el).html(tpl);
    }
  });
  
  return new HomeView;
  
});