var express = require("express");
var fs = require("fs");

var app = express();

app.set("view engine", "vash");

app.use((req, res, next) => {
    console.log("Hello World...");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
})

app.get("/datawithhtml/:empId", (req, res) => {
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        var employeesData = JSON.parse(data.toString());
        var filteredEmployee = employeesData.filter((emp) => {
            return emp.id == req.params.empId;
        })

        if(filteredEmployee.length == 0) {
            res.end("No Employee Exists")
        };

        res.render("index", {
            employee: filteredEmployee[0],
            salary: 10000
        });

    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/employees", (req, res) => {
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        res.json(JSON.parse(data.toString()));
    })
})

app.get("/employees/details", (req, res) => {
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        res.json(JSON.parse(data.toString()));
    })
})

app.get("/employees/render/:empId", (req, res) => {
    res.sendFile(__dirname + "/employeeDetails.html")
})

app.get("/employees/:empId/:userSalary", (req, res) => {
    console.log(req.params.empId)
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        var employeesData = JSON.parse(data.toString());
        var filteredEmployee = employeesData.filter((emp) => {
            return emp.id == req.params.empId;
        })

        if(filteredEmployee.length == 0) {
            res.end("No Employee Exists")
        }
        res.json({
            ...filteredEmployee[0],
            salary: req.params.userSalary
        });
    })
})



app.get("/employees/:empId", (req, res) => {
    console.log(req.params.empId)
    fs.readFile(__dirname + "/employees.json", (err, data) => {
        var employeesData = JSON.parse(data.toString());
        var filteredEmployee = employeesData.filter((emp) => {
            return emp.id == req.params.empId;
        });
        
        res.json(filteredEmployee[0])
    })
})

app.listen(4000, () => {
    console.log("Server Started Working...")
});