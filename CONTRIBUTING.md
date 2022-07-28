# Contributing

## Prerequisites

[Node.js](http://nodejs.org/) >= 10 must be installed.

## Setting up the Dev Environmet

The original package was created using [`nwb`](https://github.com/insin/nwb/blob/master/docs/guides/ReactComponents.md). So, to set up a dev environment, the `node_modules` dir initialized using `nwb new react-component` is required to begin with.

- Clone this repo
- Simply run `nwb new react-component cache` to create a cache project
- Copy-paste the `node_modules` dir to the root of the project
- Get rid of the cached project `cache`
- Run `npm i` to install additional packages
- Run `npm start` to run the dev server
- This project adhears to all the commands executable inside a `nwb new react-component` project
    1. `npm start` - runs the demo
    2. `npm run build` - builds modules
    3. `npm publish` - builds and publishes to npm (set up the package.json accordingly)

## Releasing

- When the version is bumped, first do the versioning in the package.json
- run `npm run build` to build the latest build. (This is optional. `npm publish` can take care of this internally)
- run `npm publish` to get the transpiled js modules and push to npmjs