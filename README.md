[![idea](http://i.imgur.com/BGMt0Ne.png)](#)

# `$ idea` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/idea.svg)](https://www.npmjs.com/package/idea) [![Downloads](https://img.shields.io/npm/dt/idea.svg)](https://www.npmjs.com/package/idea) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g idea
```

Then, run `idea --help` and see what the CLI tool can do.

```sh
$ idea --help
idea help
usage: idea [command] <idea|filter|id>

A lightweight CLI tool and module for keeping your ideas in a safe place quick and easy.

[command]
  create <idea>           Creates and saves a new idea. Example: `idea create "Implement something very cool"`
  list                    Lists all ideas. Example: `idea list`
  filter <filter>         Lists filtered ideas. Example: `idea filter '{"state": "SOLVED"}'`
  solve <id>              Solves an idea. Example `idea solve 1`
  help                    Prints this help.

Documentation can be found at https://github.com/IonicaBizau/idea
```

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save idea
```

```js
// Dependencies
var Idea = require("idea");

// Initialize the idea object
var idea = new Idea("./ideas.json", err => {
    if (err) throw err;
    idea.create("Implement something cool.", err => {
        if (err) throw err;
    });
});
```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md