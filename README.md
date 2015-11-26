# monopm
A package manangement system for Mono

This utility provides a wrapper around the Nuget package manager and allows you to store the dependencies for your project in a JSON file rather than XML. The aim of this tool is to make the use of nuget easier to use and to wrap the full functionality of nuget.

## Install

```sh
$ npm istall -g monopm
```
## Setup
If you want to rely on the default path for the nuget executable you need to set up an environment variable called NUGET_PATH.
An example set up could be:
```sh
export NUGET_PATH=$HOME/bin/nuget.exe
```

## Usage
```
monopm {OPTIONS}

The available options are:
  --dependencyFile, Used to indicate the location of the configuration file containing all of the dependency information. It defaults to 'dependencies.json'.
  -h                Display help for this command.
```

## The Structure of a Dependency File
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
* __nugetPath__ : The path to the nuget executable. This setting is optional and if it is not provided then it will use the path stored in the $NUGET_PATH environment variable.
* __packages__ : The list of packages to be installed for this project.
  * __name__: The name of the package to install, this maps to packageId in nuget speak.
  * __version__: The version of the package to install.
