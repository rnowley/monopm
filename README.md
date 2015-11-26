# monopm
A package manangement system for Mono

This utility provides a wrapper around the Nuget package manager and allows you to store the dependencies for your project in a JSON file rather than XML. The aim of this tool is to make the use of nuget easier to use and to wrap the full functionality of nuget.

## Install

```sh
$ npm istall -g monopm
```

## Usage
```
monopm {OPTIONS}

The available options are:
  --dependencyFile, Used to indicate the location of the configuration file containing all of the dependency information. It defaults to 'dependencies.json'.
  -h                Display help for this command.
```

## The Structure of a Project File
```
{
    "libraryPath": 'newLib',
    "nugetPath": '/home/nuget.exe',
    "packages": [
        { "name": "Microsoft.AspNet.WebApi", "version": "5.2.2"},
        { "name": "Microsoft.AspNet.WebApi.Client", "version": "5.2.2"},
        { "name": "Microsoft.AspNet.WebApi.Core", "version": "5.2.2"}
    ]
}
```
* __libraryPath__ : The directory where the packages will be installed. This setting is optional and if it is not provided then it will default to ./lib
