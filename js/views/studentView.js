var StudentView = Backbone.View.extend({
  template: 'student',
  tagName: 'li',
  attributes: {
    role: 'presentation'
  },
  events: {
    'click a': 'loadSchedules'
  },
  initialize: function() {

  },
  render: function (selector,el) {
    var that = this;
    this.mainview = el;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html);
    });
  },
  renderView: function(html){
    this.$el.append(html(_.extend(this.model.toJSON())));
  },
  loadSchedules: function(){
    event.preventDefault()
    var mainview = this.mainview,
        schedules = this.model;
    var studentScheduleView = new ScheduleView({
      model: schedules
    });
    this.showView(mainview + ' .student-schedule-container', studentScheduleView, mainview);
    this.updateButton();
  },
  updateButton: function(){
    var text = $(this.el).closest('.dropdown').children('button').children('.button-text');
    $(text).text($(this.el).text());
  },
  showView: function (selector, view, el) {
    view.render(selector, el);
  }
});
