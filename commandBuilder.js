'use strict';

var Command = require('./command.js');

function processConfiguration(configuration, command) {
    command.packages = extractPackages(configuration.packages);
}

/**
 * Processes the list of packages
 * @param packageList - the list of packages to process.
 * @return a list of Package objects.
 */
function extractPackages(packageList) {
    var packages = [];
    if(packageList.length === 0) {
        return packages;
    }

    for(var i = 0; i < packageList.length; ++i) {
        var currentPackage = new Command.Package();
        currentPackage.name = packageList[i].name;
        currentPackage.version = packageList[i].version;
        packages.push(currentPackage);
    }

    return packages;
}

exports.processConfiguration = processConfiguration;