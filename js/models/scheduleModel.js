var ScheduleModel = Backbone.Model.extend({
	idAttribute: 'period',
  defaults: {
    teacherName: "",
    period: "",
    className: ""
  }
});