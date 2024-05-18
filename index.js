const http = require('http');
const fs = require('fs');
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        requests("https://google.com/foo/bar", {streaming})
        .on("data", function (chunk) {
            console.log(chunk);
        })
        .on("end", function(err) {
            if (err) return console.log("connection closed due to errors", err);
            console.log("end");
        })
    }
})