var fs = require("fs");
var EventEmitter = require("events");

var emitter = new EventEmitter()

fs.exists("D:/Mayank/Github/NodeDecember/SampleFile", (exists) => {
    if(exists === true) {
        emitter.emit("folderExists")
    } else {
        emitter.emit("error", "Folder Do Not Exists")
    }
})

emitter.on("folderExists", () => {
    fs.exists("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt", (fileExists) => {
        if(fileExists) {
            emitter.emit("fileExists");
        } else {
            emitter.emit("error", "File Do Not Exists")
        }
    })
})

emitter.on("fileExists", () => {
    fs.unlink("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt", (err) => {
        if(err) {
            console.log("Error Deleting the File")
            emitter.emit("error", "File Cannot be Removed")
        } else {
            emitter.emit("fileUnlinked")
        }
    })
})

emitter.on("fileUnlinked", () => {
    fs.rmdir("D:/Mayank/Github/NodeDecember/SampleFile", (err) => {
        if(err) {
            console.log("Error Deleting the Folder...")
            emitter.emit("error", "Folder Cannot be removed..")
        } else {
            emitter.emit("removeFolder")
        }
    })
})

emitter.on("removeFolder", () => {
    console.log("Successfull")
})

emitter.on("error", (data) => {
    console.log(data)
})



