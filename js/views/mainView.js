var MainView = Backbone.View.extend({
  template: 'mainview',
  initialize: function() {
    this.collection = new StudentCollection(StudentModel);
  },
  renderStudentListView: function(students,selector) {
    var studentListView = new StudentListView({
      collection: students
    });
    this.showView(selector + ' .student-list-container', studentListView, selector);
  },
  render: function(selector) {
    var that = this, p;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html);
    });
    p = this.collection.fetch();
    p.done(function () {
      var students = that.collection;
      that.renderStudentListView(students,selector);
      that.getSchedules(that.collection,selector);
    });
  },
  renderView: function(html){
    this.$el.append(html);
  },
  getSchedules: function(model,selector){
    var frag = Backbone.history.getFragment();
    if (frag != undefined && frag.length > 0){
      var schedules = model.get(frag);
      var studentScheduleView = new ScheduleView({
        model: schedules
      });
      this.showView(selector + ' .student-schedule-container', studentScheduleView, selector);
      $(selector + ' .button-text').text(frag);
    }
  },
  showView: function (selector, view, el) {
    view.render(selector, el);
  }
});
