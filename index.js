const http = require('http');
const fs = require('fs');
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=b2b649aac0d7c797df17b1a0e4f2bab5")
        .on("data",  (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(arrData[0].main.temp);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            console.log("end");
        })
    }
})

server.listen(8000, "127.0.0.1");