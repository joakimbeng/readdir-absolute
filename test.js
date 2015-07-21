'use strict';
var test = require('tape');

var readdir = require('./');

test('readdir', function (assert) {
  readdir(__dirname, function (err, files) {
    assert.error(err, 'It should not crash');
    assert.equal(Array.isArray(files), true, 'It should give an array');
    assert.equal(files.every(function (file) { return file.indexOf(__dirname) === 0; }), true, 'All file paths should be absolute');
    assert.end();
  });
});
