'use strict'

const express = require('express')
, app = express()
, bodyParser = require('body-parser')
, _ = require('lodash')


let config = require(__dirname + '/config')
, db = require(process.cwd() + '/config/db.js')
// , logger = require(process.cwd() + '/config/logger.js')
, appDir = config.appDir
// , loggerObj

app.use(express.static(__dirname + '/public'))

// console.log(config.port)
app.use(bodyParser.json({limit: '50mb'}))
console.log(process.env.PORT)
console.log(config.port)
app.set('port', process.env.PORT || config.port)

// logger.init()
// loggerObj = logger.loggerObj


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header( 'Access-Control-Allow-Methods' , 'GET,POST,PUT,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type, role, role-region, admin, user-id, type, userid')
  // let options = {db:sqlConfig, logger: loggerObj,'atpl-models': require('atpl-models'),ad:config.adconfig}
  // req.headers.options = options
 // res.header("Access-Control-Expose-Headers", "organizationId, cardConfigVersion")
  if (req.method === 'OPTIONS'){ 
 	return res.send(200)
  }
  next()
})

let server =  app.listen(app.get('port'))
console.log('Express server listening on port ' + server.address().port)

app.get('/', (req, res) => {
  res.status(200).send('GCap Platform Server is running on port. '+ app.get('port'))
})

//app.use('/mobileapi/v1/', require(appDir + '/routes'))


module.exports = app //for testing