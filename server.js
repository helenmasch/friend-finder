const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

var npmPath = require('npm-path')
var PATH = npmPath.PATH // get platform independent PATH key
 
npmPath(function(err, $PATH) {
  
  // Note: current environment is modified!
  console.log(process.env[PATH] == $PATH) // true
  
  console.log($PATH)
  // /usr/local/lib/node_modules/npm/bin/node-gyp-bin:/.../.bin:/usr/local/bin: ...etc
  
})
 
// more explicit alternative syntax
npmPath.set(function(err, $PATH) {
  // ...
})
 
app.listen(3000)