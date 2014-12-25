require.config({
    baseUrl: "../scripts/",
    paths: {
        jquery              : 'bower_components/jquery/dist/jquery.min',
        underscore          : 'bower_components/underscore/underscore',
        backbone            : 'bower_components/backbone/backbone',
        marionette          : 'bower_components/marionette/lib/backbone.marionette',
        handlebars          : 'bower_components/handlebars/handlebars',
        bootstrap           : 'bower_components/bootstrap/dist/js/bootstrap.min',
        text                : 'bower_components/requirejs-text/text',
        header_view         : 'views/header_view',
        header_template     : 'templates/header_template.hb',
        spec                : './spec/'
    },

    shim:   { backbone      : { exports: 'Backbone',   deps: ['underscore', 'jquery'] },
              bootstrap     : { exports: 'Bootstrap',  deps: ['jquery'] },
              underscore    : { exports: '_'}
            }
});

require([
    'jquery',
    'underscore',
    'backbone'
], function () {
    'use strict';

    require([
        'spec/test-spec.js'
    ], function () {
        jasmine.getEnv().execute();
    });
});
