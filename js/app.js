var ApplicationRouter = Backbone.Router.extend({
	routes: {
		'(/)': ''
	},
	initialize: function() {
    var mainView1 = new MainView({
      el: '#studentMainView1'
    });
    this.showView('#studentMainView1', mainView1);
    var mainView2 = new MainView({
      el: '#studentMainView2'
    });
    this.showView('#studentMainView2', mainView2);
	},
	showView: function (selector, view) {
    view.render(selector);
  }
});

app = new ApplicationRouter();
Backbone.history.start();



