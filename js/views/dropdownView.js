var DropdownView = Backbone.View.extend({
  template: 'dropdown',

  initialize: function() {

  },
  render: function(selector) {
    var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html,selector);
    });
  },
  renderView: function(html,selector){
    $(selector).append(html);
  }
});
