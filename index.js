'use strict';
var fs = require('fs');
var path = require('path');

module.exports = exports = function readdir(dir, cb) {
  fs.readdir(dir, function (err, files) {
    cb(err, files && files.map(join(dir)));
  });
};

function join (dir) {
  return function (file) {
    return path.join(dir, file);
  };
}
