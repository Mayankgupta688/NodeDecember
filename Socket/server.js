const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http');
const port = process.env.PORT||4000;


let app = express(); 
let server = http.createServer(app);
let socketRequest = socketIO(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

socketRequest.on('connection', (socketConnection) => { 
    console.log('New user connected'); 

    socketConnection.on('createMessage', (newMessage) => { 
        socketConnection.broadcast.emit("createMessage", newMessage)
    });

    socketConnection.on('chatRoom1', (newMessage) => { 
        socketConnection.broadcast.emit("chatRoom1", newMessage)
    });

    socketConnection.on('chatRoom2', (newMessage) => { 
        socketConnection.broadcast.emit("chatRoom2", newMessage)
    });

    socketConnection.on('chatRoom3', (newMessage) => { 
        socketConnection.broadcast.emit("chatRoom3", newMessage)
    });

    setInterval(() => {
        http.get("http://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI", (response) => {

            var dataInput = "";

            response.on("data", (data) => {
                dataInput += data;
            })

            response.on("end", () => {
                var stockData = JSON.parse(dataInput)
                socketConnection.broadcast.emit("sbiPrice", JSON.parse(dataInput).data.pricecurrent)
            })

        })
    }, 3000)

}); 
  
server.listen(port); 