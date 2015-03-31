var StudentModel = Backbone.Model.extend({
  idAttribute: 'name',
  defaults: {
    name: '',
  },
  parse: function (resp) {
    // Create a schedule object on model
    // that will hold the schedule collection
    this.schedules = new ScheduleCollection(resp.schedule || null, {
      parse: true
    });
    // Delete from the response object as the data is
    // already available on the model
    delete resp.schedule;
    return resp;
  }
});