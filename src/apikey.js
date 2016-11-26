var crypto = require('crypto');
var key;

module.exports = (cb) => {
  crypto.randomBytes(16, function (err, bytes) {
      key = new Buffer((new Date().valueOf()) + (bytes).toString('hex')).toString('base64');
      cb(key);
  });
}