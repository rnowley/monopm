'use strict';

var execSync = require('child_process').execSync, child;

function runCommands(commandList) {

    if(!commandList) {
        Console.log("There are not any tasks to run.");
        return
    }

    commandList.forEach(runCommand);
}

function runCommand(command) {
    console.log('Running ' + command);
    var output = execSync(command);
    console.log(output.toString());
}

exports.runCommands = runCommands;