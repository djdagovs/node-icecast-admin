// Generated by CoffeeScript 1.4.0
(function() {
  var Admin, admin;

  process.stdout.write('\u001B[2J\u001B[0;0f');

  Admin = require('../src/Admin');

  if (process.argv.length < 3) {
    console.log("usage: listmounts_url.coffee 'http://username:password@hostname:port/'");
    process.exit(1);
  }

  admin = new Admin({
    url: process.argv[2]
  });

  admin.listMounts(function(err, result) {
    var source, _i, _len, _ref, _results;
    if (err) {
      return console.log('Error:', err);
    } else {
      console.log("" + result.icestats.source.length + " sources");
      _ref = result.icestats.source;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        source = _ref[_i];
        _results.push(console.log(source));
      }
      return _results;
    }
  });

}).call(this);
