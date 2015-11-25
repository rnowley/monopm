function Command() {
    this.environment = 'mono';
    this.nugetPath = process.env.NUGET_PATH;
    this.packages = [];
    this.executableName = 'nuget.exe'
    this.commandName = 'install';
    this.libraryPath = '-o lib';
}

function Package() {
    this.name = '';
    this.version = '';
}

Command.prototype.generateCommands = function() {
    var commands = [];

    for(var i = 0; i < this.packages.length; ++i) {
        var commandArray = [this.environment, this.nugetPath + '/' + this.executableName, this.commandName, this.packages[i].name, '-Version "' + this.packages[i].version + '"', this.libraryPath];
        commands.push(commandArray.join(' '));
    }

    return commands;
}


exports.Command = Command;
exports.Package = Package;