const {Transform} = require('stream')
const ts = Transform()

let counter = 0

ts._transform = (buff, enc, cb) => {
  if (counter < 10) {
    counter++
    cb(null, buff.toString())
  } else {
    cb()
  }
}


module.exports = ts
