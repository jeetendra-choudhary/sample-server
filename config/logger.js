const commons = require('atpl-commons')
, config = require(__dirname + '/index.js')
, appDir = config.appDir

module.exports.init = function() {
  let loggerOptions = {
    transports:{
      file:{
        filename:appDir+'/log/dev.log'
      }
    }
  }

  module.exports.loggerObj = commons.getLogger(loggerOptions)
}
