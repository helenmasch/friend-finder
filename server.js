const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000

// creating the public folder as route path
app.use(express.static("public"))

app.use(express.urlencoded({extended: true}))

// converting data from the client to json
app.use(express.json())

const apiRoutes = require("./app/routing/apiRoutes")

apiRoutes(app)

const htmlRoutes = require("./app/routing/htmlRoutes")

htmlRoutes(app)

app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
})