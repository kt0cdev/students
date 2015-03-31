var ClassListView = Backbone.View.extend({
  initialize: function () {

  },
  renderScheduleView: function(schedules,selector) {
    var classView = new ClassView({
      model : schedules
    });
    $(selector).append(classView.el);
    classView.render();
  },
  render: function (selector, el) {
    var that = this;
    _.each(this.collection.models, function (schedules) {
      that.renderScheduleView(schedules,selector);
    });
    _.defer(function(){
      that.highlightRows();
    });
  },
  highlightRows: function() {
    $('table tr').removeClass('warning');
    $('#studentMainView1 table tr').each(function(){
      var table1row = $(this),
          table1rowHtml = table1row.html();
      $('#studentMainView2 table tbody tr').each(function(){
        var table2row = $(this),
            table2rowHtml = table2row.html();
        if(table2rowHtml === table1rowHtml){
          table1row.addClass('warning');
          table2row.addClass('warning');
        }
      });
    });
  }
});