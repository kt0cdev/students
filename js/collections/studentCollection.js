var StudentCollection = Backbone.Collection.extend({
  url: 'data/student-schedules.json',
  model: StudentModel
});