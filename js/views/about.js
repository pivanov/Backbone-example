define(['jquery', 'underscore', 'backbone', 'text!templates/about.html'], function($, _, Backbone, tpl) {
  
  var AboutView = Backbone.View.extend({
    el: $("#content"),
    render: function() {
      $(this.el).html(tpl);
    }
  });
  
  return new AboutView;
  
});