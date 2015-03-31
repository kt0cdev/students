var ScheduleView = Backbone.View.extend({
  template: "schedule",
  initialize: function () {

  },
  renderClasses: function(selector,el) {
    var classListView = new ClassListView({
      collection : this.model.schedules,
      el: $(selector)
    });
    this.showView(el + ' .class-container', classListView, el);
  },
  render: function (selector, el) {
    var that = this;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html,selector,el)
    });
  },
  renderView: function(html,selector,el){
    $(selector).html(html(_.extend(this.model.toJSON())));
    this.renderClasses(selector,el);
  },
  showView: function (selector, view, el) {
    view.render(selector, el);
  }
});