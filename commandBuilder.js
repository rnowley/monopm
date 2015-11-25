'use strict';

var Command = require('./command.js');

function processConfiguration(configuration, command) {
    command.libraryPath = extractLibraryPath(configuration, command.libraryPath);
    command.nugetPath = extractNugetPath(configuration, command.nugetPath);
    command.packages = extractPackages(configuration.packages);
}

/**
 * Retrieves the location from the configuration file where the packages should be installed.
 * @param {Object} configuration - the configuration object to retrieve the library path from.
 * @param {String} defaultPath - the default path to use if the library path is not provided in the configuration object.
 * @returns {String} The path to install the packages to.
 */
function extractLibraryPath(configuration, defaultPath) {

    if(!configuration.libraryPath) {
        return defaultPath;
    }

    return '-o ' + configuration.libraryPath;
}
/**
 * Retrieves the path of the nuget executable from the configuration object.
 * @param {Object} configuration - the configuration object to retrieve the nuget path from.
 * @param {String} defaultPath - the default path to use if the nuget path is not provided in the configuration object.
 * @returns {String} The path to the nuget executable.
 */
function extractNugetPath(configuration, defaultPath) {

    if(!configuration.nugetPath) {
        return defaultPath;
    }

    return configuration.nugetPath
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