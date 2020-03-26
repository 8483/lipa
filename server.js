const express = require("express"); // Web Framework

const app = express();

// Allow requests from all domains and localhost
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    next();
});

const root = `${__dirname}/dist`

app
    .use(express.static(root))
    .use(express.json())
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

