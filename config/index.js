'use strict'

const isThere = require('is-there')
    , currentEnv = process.env.NODE_ENV || 'development'
    , envFilePath = __dirname + '/env/' + currentEnv + '.js'

let environmentOptions
  , projectName

if(!isThere(envFilePath))
  {console.log('Environment file missing')}
else
  {environmentOptions = require(envFilePath)} 

module.exports = {
  port: environmentOptions.server.port,
  serverHost: environmentOptions.server.host + ':' +environmentOptions.server.port,
  databaseUrl: environmentOptions.database.path + environmentOptions.database.name,
  databaseHost: environmentOptions.database.host,
  databasePort: environmentOptions.database.port,
  databaseName: environmentOptions.database.name,
  databaseUsername:environmentOptions.database.username,
  databasePassword:environmentOptions.database.password,
  database:environmentOptions.database.database,
  adconfig:environmentOptions.adconfig,
  appDir: process.cwd()
} 
