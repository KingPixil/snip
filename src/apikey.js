var crypto = require('crypto');

module.exports = (cb) => {
  crypto.randomBytes(10, function (err, bytes) {
      var key = new Buffer((new Date().valueOf()) + (bytes).toString('hex')).toString('base64');
      cb(key);
  });
}
