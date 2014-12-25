define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'users',
	'text!header_template',
	'handlebars',
	'bootstrap'
], function ($, _, Backbone, Marionette, Users, headerTemplate) {
	'use strict';

	var HeaderView = Backbone.Marionette.ItemView.extend({
        className: 'col-md-10 col-md-offset-1',
        template: Handlebars.compile(headerTemplate),
        events: {
        	'click .js-btn-search': 'fetchUsers'
        },
        ui: {
            searchInput: '.js-search-input'
        },

        initialize: function () {
        	this.collection = new Users();
        },

        fetchUsers: function () {
        	if (!this.ui.searchInput.val()) {
        		return;
        	}

        	this.collection.fetch();
        }
        // when click on the search - fetch users
    });

    return HeaderView;
});