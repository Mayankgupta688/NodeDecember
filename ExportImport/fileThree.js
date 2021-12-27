var name = "Anshul Gupta";

console.log(name)

console.log(global.userDetails);

module.exports.userName = name;

global.userDetails = {
    userName: "Anshul Gupta",
    designation: "Director"
}

