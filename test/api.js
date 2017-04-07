'use strict';

var standard = require('../index.js');
var test = require('tape');

test('api usage', function t(assert) {
    standard.lintFiles([], {
        cwd: 'bin'
    }, function onFiles(err, result) {
        assert.error(err, 'no error while linting');
        assert.equal(typeof result, 'object', 'result is an object');
        assert.equal(result.errorCount, 166, 'error count 166');

        assert.end();
    });
});

