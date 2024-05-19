const http = require('http');
const fs = require('fs');
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let tempreature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    tempreature = tempreature.replace("{%tempmin%}", orgVal.main.temp_min);
    tempreature = tempreature.replace("{%tempmax%}", orgVal.main.temp_max);
    tempreature = tempreature.replace("{%location%}", orgVal.main.temp);
    tempreature = tempreature.replace("{%country%}", orgVal.sys.country);
    tempreature = tempreature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return tempreature;
}

const server = http.createServer((req, res) => {
    if (req.url = "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=b2b649aac0d7c797df17b1a0e4f2bab5")
        .on("data",  (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            // console.log(arrData[0].main.temp);
            const realTimeData = arrData
            .map((val) => eplaceVal(homeFile, val))
                .join("");
               // console.log(val.main);
                res.write(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end();    
        })
    }
})

server.listen(8000, "127.0.0.1");