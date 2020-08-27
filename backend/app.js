var express = require("express")
var bodyParser = require("body-parser")
var logger = require("morgan")
var cors = require("cors")

var handleError = require("./utils/handleError")
var indexRouter = require("./routes/index")

var app = express()

app.use(cors())

app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", indexRouter)

// error handler
app.use(handleError)

module.exports = app
