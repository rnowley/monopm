'use strict';

var expect = require("chai").expect;
var commandBuilder = require('../commandBuilder.js');
var Command = require('../command.js');

describe("CommandBuilder", function() {
    describe("#processConfiguration", function() {
        it("The package list is empty and command.packages should contain an empty array", function() {
            var configuration = {
                "packages": []
            };

            var command = new Command.Command();
            commandBuilder.processConfiguration(configuration, command);
            expect(command.packages.length).to.equal(0);
        });

        it("The package list contains one package, the command.packages should contain this package.", function() {
            var configuration = {
                "packages": [
                    { "name": "Microsoft.AspNet.WebApi", "version": "5.2.2"}
                ]
            };

            var command = new Command.Command();
            commandBuilder.processConfiguration(configuration, command);
            expect(command.packages[0].name).to.equal("Microsoft.AspNet.WebApi");
            expect(command.packages[0].version).to.equal("5.2.2");
        });

        it("The package list contains three packages, the command.packages should contain those packages.", function() {
            var configuration = {
                "packages": [
                    { "name": "Microsoft.AspNet.WebApi", "version": "5.2.2"},
                    { "name": "Microsoft.AspNet.WebApi.Client", "version": "5.2.2"},
                    { "name": "Microsoft.AspNet.WebApi.Core", "version": "5.2.2"}
                ]
            };

            var command = new Command.Command();
            commandBuilder.processConfiguration(configuration, command);
            expect(command.packages.length).to.equal(3);
            expect(command.packages[0].name).to.equal("Microsoft.AspNet.WebApi");
            expect(command.packages[0].version).to.equal("5.2.2");
            expect(command.packages[1].name).to.equal("Microsoft.AspNet.WebApi.Client");
            expect(command.packages[1].version).to.equal("5.2.2");
            expect(command.packages[2].name).to.equal("Microsoft.AspNet.WebApi.Core");
            expect(command.packages[2].version).to.equal("5.2.2");
        });
    })
});