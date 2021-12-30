var express = require("express");
var fs = require("fs");

var app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.txt");
})

app.get("/employees", (req, res) => {
    res.sendFile(__dirname + "/index.txt");
})

app.listen(8000, () => {
    console.log("Server Started Working...")
});