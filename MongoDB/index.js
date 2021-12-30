var MongoDB = require("mongodb");
var mongoClient = MongoDB.MongoClient;
var fs = require("fs");
var express = require("express");

var app = express();

app.set("view engine","vash")

var connectionString = "mongodb+srv://technofunnel:technofunnel123@cluster0.1m940.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var EventEmitter = require("events");

var emitter = new EventEmitter();

app.get("/", (req, res) => {
    addData();

    emitter.on("dataRecieved", () => {
        getData();
    })

    emitter.on("employeeRecievedFromDatabase", (data) => {
        res.render("index", {employeeList: data});
    })
})

function addData() {
    mongoClient.connect(connectionString, (err, dbConnection) => {
        if(err) {
            console.log("Error Connecting to Database")
        } else {
            console.log("Connection Created...");
    
            var employeeDatabase = dbConnection.db("employee");
    
            fs.readFile(__dirname + "/employees.json", (err, data) => {
                var employeesData = JSON.parse(data.toString());
    
                employeeDatabase.collection("employees").insertMany(employeesData, (err, data) => {
                    if(err) {
                        console.log("Error Saving Record..");
                    } else {
                        console.log("Entry Added...")
                        dbConnection.close();
                        emitter.emit("dataRecieved")
                    }
                })
            })
        }
    })
}


function getData() {
    mongoClient.connect(connectionString, (err, dbConnection) => {
        if(err) {
            console.log("Error Connecting to Database")
        } else {
            console.log("Connection Created...");
    
            var employeeDatabase = dbConnection.db("employee");

            employeeDatabase.collection("employees").find({}).toArray((err, data) => {
                emitter.emit("employeeRecievedFromDatabase", data)
            })
        }
    })
}


app.listen(8000)