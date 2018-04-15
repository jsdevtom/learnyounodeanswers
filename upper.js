const {Transform} = require('stream')

class UpperCase extends Transform {
  _transform (chunk, encoding, done) {
    done(null, chunk.toString().toUpperCase())
  }
}

module.exports = UpperCase
