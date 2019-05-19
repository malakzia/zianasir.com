## Only put your changes in SRC folder
Anything you put in SRC folder will be compiled into DIST folder

### Starting the project
Enter the command
`npm start`

### Restore dependencies
Enter the command
`npm i`

### About the project
It's a NodeJS project with Express framework
It uses only Static files (html), nothing dynamic

### NodeJS
NodeJS installs server and NPM both together.
You can post your own packages on NPM if you want.

Here in this project, Bower is used. 

## Package Managers
Both frontend and backend has different Package Managers
For backend: NPM (NodeJS)
For frontend: Bower (HTML, CSS, JS etc)

### Package Dependencies

#### Frontend (`bower.json`)
milligram
typeit


#### Backend (`packages.json`)
bower: 
^1.8.0, (to download frontend packages)
express: 
^4.13.3, (to run server, it's the main framework)
browser-sync: 
^2.18.2, (skip for now, i will setup later. after it's compiled, even browser automatically refreshes)
ncp: 
^2.0.0, (don't worry about it, just think of it as file copier)
npm-run-all: 
^3.1.2, (runs multiple commands, don't worry about it )
onchange: 
^3.2.0, (have to setup, it looks for changes in files. so u save changes and it's automatically compiled.)
rimraf: 
^2.5.4 (same like ncp. )

Some of the packages like ncp rimraf etc are used as an alternative for Windows Linux cross-platform support.

Like we can use the command 
`cp -r ...` in Linux but not in Windows for example
So NodeJS provides these packages through NPM so u just install them, and forget about support














<a align=center href=http://milligram.github.io><img width=100% src=https://milligram.github.io/images/thumbnail.png alt=Milligram - A minimalist CSS framework.></a>

> A super simple boilerplate project with Milligram.

[![Travis Status](https://travis-ci.org/milligram/milligram-starter.svg?branch=master)](https://travis-ci.org/milligram/milligram-starter?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/djotpoy1698b3k9k?svg=true)](https://ci.appveyor.com/project/cjpatoilo/milligram-starter)
[![Codacy Status](https://img.shields.io/codacy/grade/13f5caac73ed4964a2394aa857ebc3a2/master.svg)](https://www.codacy.com/app/milligram/milligram-starter/dashboard)
[![Dependencies Status](https://david-dm.org/milligram/milligram-starter.svg)](https://travis-ci.org/milligram/milligram-starter?branch=master)
[![Version Status](https://badge.fury.io/js/milligram-starter.svg)](https://www.npmjs.com/package/milligram-starter)
[![Download Status](https://img.shields.io/npm/dt/milligram-starter.svg)](https://www.npmjs.com/package/milligram-starter)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/milligram/milligram)


## Why it's awesome?

It offers a super simple boilerplate project with Milligram.


## Install

```sh
$ npm install -g milligram-cli
```

*NOTE: Install this npm package with `-g` or `--global` to global use.*


## Usage

Create a new app using the command `milligram init`, then install dependencies and run with `npm start`.

```sh
$ milligram init new_app
$ cd new_app
$ npm start
```


## Available Commands

- `npm run start` - starts the development server with hot reloading enabled

- `npm run build` - generates the distribution files

- `npm run bower` - install all dependencies

- `npm run test` - start the test runner


## Table of Contents

- [Getting Started](http://milligram.github.io/#getting-started)
- [Typography](http://milligram.github.io/#typography)
- [Blockquotes](http://milligram.github.io/#blockquotes)
- [Buttons](http://milligram.github.io/#buttons)
- [Lists](http://milligram.github.io/#lists)
- [Forms](http://milligram.github.io/#forms)
- [Tables](http://milligram.github.io/#tables)
- [Grids](http://milligram.github.io/#grids)
- [Codes](http://milligram.github.io/#codes)
- [Utilities](http://milligram.github.io/#utilities)
- [Tips](http://milligram.github.io/#tips)
- [Browser Support](http://milligram.github.io/#browser-support)
- [Examples](http://milligram.github.io/#examples)


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/milligram/milligram-starter/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://cjpatoilo.com). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
