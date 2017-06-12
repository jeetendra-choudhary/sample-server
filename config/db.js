'use strict'

const config = require(__dirname + '/index.js')
, sqlConfig = {
  username:config.databaseUsername,
  password:config.databasePassword,
  server:config.databaseHost
} 
//var mongodb = require('mongodb');
//module.exports.init = callback => {
// let server = new mongodb.Server(config.databaseHost, config.databasePort, {})
// new mongodb.Db(config.databaseName, server, {w: 1}).open((error, client) => {
//    module.exports.client = client;
//    callback(error)
//  })
//}

module.exports.init = callback => {
  module.exports.client = new Connection(sqlConfig)
  callback()
}
