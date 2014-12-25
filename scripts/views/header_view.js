define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'text!header_template',
	'handlebars',
	'bootstrap'
], function ($, _, Backbone, Marionette, headerTemplate) {
	'use strict';

	var HeaderView = Backbone.Marionette.ItemView.extend({
        className: 'col-md-10 col-md-offset-1',
        template: Handlebars.compile(headerTemplate)
    });

    return HeaderView;
});