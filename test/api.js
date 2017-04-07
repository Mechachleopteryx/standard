'use strict';

var standard = require('../index.js');
var test = require('tape');

var standard = require('../')
var test = require('tape')

test('api usage', function (t) {
  t.plan(3)
  standard.lintFiles([], { cwd: 'bin' }, function (err, result) {
    t.error(err, 'no error while linting')
    t.equal(typeof result, 'object', 'result is an object')
    t.equal(result.errorCount, 166, 'error count 166')
  })
})

test('api usage', function t(assert) {
    standard.lintFiles([], {
        cwd: 'bin'
    }, function onFiles(err, result) {
        assert.error(err, 'no error while linting');
        assert.equal(typeof result, 'object', 'result is an object');
        assert.equal(result.errorCount, 181, 'error count 181');

        assert.end();
    });
});

test('lintText', function t(assert) {
    standard.lintText(
        '\'use strict\';\n' +
        'try {\n' +
        '    var foo = 1 / 0;\n' +
        '    throw foo;\n' +
        '} catch (e) {\n' +
        '    throw e;\n' +
        '}\n',
        onLint
    );

    function onLint(err, results) {
        assert.ifError(err);

        var messages = results.results[0].messages;
        assert.equal(messages[0].ruleId, 'no-try-catch');

        assert.end();
    }
});
>>>>>>> 82cef5d... Split files and run eslint on them in separate processes to utilize multiple cores
