/*global describe, it, expect */
define([
	'underscore',
    'header_view'
], function (_, View) {
    describe("Header View", function () {
        'use strict';
        it("should be ok", function() {
            expect(_.isFunction(View)).toBe(true);
        });
    });
});

