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
    var that = this, resp;
    TemplateManager.get(this.template, function(template){
      var html = _.template(template);
      that.renderView(html);
    });
    resp = this.collection.fetch();
    resp.done(function () {
      var students = that.collection;
      that.renderStudentListView(students,selector);
    });
  },
  renderView: function(html){
    this.$el.append(html);
  },
  showView: function (selector, view, el) {
    view.render(selector, el);
  }
});
