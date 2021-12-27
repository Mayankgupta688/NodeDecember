
var data = require("./fileReader");

var myPromise = data.myPromise;
var emitter = data.emitter

var handlerForHr = require("./hrSalaryTotal");
var handlerForLog = require("./logUserName");

handlerForHr.attachEventHandlerPromises(myPromise);

handlerForHr.attachEventHandler(emitter);
handlerForLog.attachEventHandler(emitter);

// Try for Callbacks...