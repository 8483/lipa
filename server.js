var express = require("express"); // Web Framework
var bodyParser = require("body-parser"); // define our app using express

var app = express();

// Allow requests from all domains and localhost
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});


app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.static('dist'));
;

// Must be below app.use()
app.get("/*", function (req, res) {
    res.sendFile(__dirname + '/index.html'); // /mnt/c/ivan/lab/lipa + /index.html
});

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("app listening at http://%s:%s", host, port);
});




