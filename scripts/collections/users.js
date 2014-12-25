define([
	'backbone'
], function (Backbone) {
	var Collection = Backbone.Collection.extend({
		model: Backbone.Model.extend({ url: '/users' }),
		url: '/users'
	});

	return Collection;
});