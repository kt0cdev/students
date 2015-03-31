var StudentListView = Backbone.View.extend({
  initialize: function() {

  },
  renderStudentView: function(student,selector,el) {
    var studentView = new StudentView({
      model: student
    });
    $(selector).append(studentView.el);
    studentView.render(selector,el);
  },
  render: function(selector,el) {
    var that = this;
    _.each(this.collection.models, function (student) {
      that.renderStudentView(student,selector,el);
    });
  }
});
