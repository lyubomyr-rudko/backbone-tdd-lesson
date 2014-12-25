define(['header_view'], function (HeaderView) {
	var App = new Backbone.Marionette.Application();

	App.addRegions({
        header: '#header_container'
    });

    App.addInitializer(function (options) {
        this.header.show(new HeaderView());
    });

	return App;
});