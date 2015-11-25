'use strict';

var expect = require("chai").expect;
var Command = require('../command.js');

describe("Command", function() {
    describe("#generateCommands", function() {
        it("The default command instance with no packages, no commands are generated", function() {
            var command = new Command.Command();

            var result = command.generateCommands();

            expect(result.length).to.equal(0);
        });

        it("The default command instance with one package, one command is generated", function() {
            var command = new Command.Command();
            var currentPackage = new Command.Package();
            var expectedCommand = 'mono ' + command.nugetPath + ' install Microsoft.AspNet.WebApi -Version "5.2.2" -o lib';
            currentPackage.name = 'Microsoft.AspNet.WebApi';
            currentPackage.version = '5.2.2';
            command.packages.push(currentPackage);

            var result = command.generateCommands();

            expect(result.length).to.equal(1);
            expect(result[0]).to.equal(expectedCommand);
        });

        it("The default command instance with two packages, two command are generated", function() {
            var command = new Command.Command();
            var expectedCommands = [
                'mono ' + command.nugetPath + ' install Microsoft.AspNet.WebApi -Version "5.2.2" -o lib',
                'mono ' + command.nugetPath + ' install Microsoft.AspNet.WebApi.Client -Version "5.2.2" -o lib',
            ];

            var currentPackage = new Command.Package();
            currentPackage.name = 'Microsoft.AspNet.WebApi';
            currentPackage.version = '5.2.2';
            command.packages.push(currentPackage);

            currentPackage = new Command.Package();
            currentPackage.name = 'Microsoft.AspNet.WebApi.Client';
            currentPackage.version = '5.2.2';
            command.packages.push(currentPackage);

            var result = command.generateCommands();

            expect(result.length).to.equal(2);
            expect(result[0]).to.equal(expectedCommands[0]);
            expect(result[1]).to.equal(expectedCommands[1]);
        });
    })
})