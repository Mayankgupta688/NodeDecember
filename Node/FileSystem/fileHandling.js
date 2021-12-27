var fs = require("fs");

fs.exists("D:/Mayank/Github/NodeDecember/SampleFile", (exists) => {
    if(exists == true) {
        fs.exists("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt", (fileExists) => {
            if(fileExists) {
                fs.unlink("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt", (err) => {
                    if(err) {
                        console.log("Error Deleting the File")
                    } else {
                        console.log("File Deleted...");
                        fs.rmdir("D:/Mayank/Github/NodeDecember/SampleFile", (err) => {
                            if(err) {
                                console.log("Error Deleting the Folder...")
                            } else {
                                console.log("Folder Deleted")
                            }
                        })

                    }
                })
            }
        })
    }
})



