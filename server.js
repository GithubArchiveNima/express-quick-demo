var express = require('express')
var app = express()

var PORT = 8080
var bodyParser = require('body-parser')

app.set("view engine", "ejs") // TEMPLATE VARS

// APP USE
app.use(bodyParser.urlencoded({extended: true}))

function doSomething(request, response) {
    let templateVars = {
        num: 100,
        name: "Nima",
        dogs: [
            'spot',
            'felix',
            'bill'
        ]
    }
    response.render("main_view", templateVars)
}

app.get('/', doSomething) // www.nima.com

app.listen(PORT, () => console.log(PORT))