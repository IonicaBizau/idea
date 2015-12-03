[![idea](http://i.imgur.com/BGMt0Ne.png)](#)

# `$ idea` [![Support this project][donate-now]][paypal-donations]

A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g idea
```

Then, run `idea --help` and see what the CLI tool can do.

```sh
$ idea --help
┌──┬────────────────────────┬────────────────────────┬───────────────────────────────────┐
│Id│Date                    │State                   │Idea                               │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│1 │2015-05-22T05:57:27.289Z│OPEN                    │HTML Square illusion (dashing)     │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│2 │2015-05-22T05:57:36.023Z│OPEN                    │GitHub stars                       │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│4 │2015-05-22T08:24:15.111Z│OPEN                    │Electron Terminal                  │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│5 │2015-07-10T07:17:16.730Z│OPEN                    │ColorTunes music player            │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│6 │2015-07-27T06:55:21.213Z│OPEN                    │Diagram licenses                   │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│8 │2015-10-06T17:05:38.867Z│OPEN                    │emoji match                        │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│10│2015-11-23T05:23:43.233Z│OPEN                    │Octicons webpage                   │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│11│2015-11-23T05:56:36.748Z│OPEN                    │npm name-it available?             │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│13│2015-11-23T09:38:51.524Z│OPEN                    │create module steps                │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│14│2015-11-23T14:23:35.587Z│OPEN                    │animation by scrolling in README.md│
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│15│2015-11-25T08:51:10.334Z│OPEN                    │Automatic ssh-add                  │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│16│2015-11-25T08:51:22.989Z│OPEN                    │electron browser                   │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│17│2015-12-03T10:04:23.655Z│OPEN                    │responsive image screenshot        │
├──┼────────────────────────┼────────────────────────┼───────────────────────────────────┤
│18│2015-12-03T10:04:39.251Z│OPEN                    │screensaver electron               │
└──┴────────────────────────┴────────────────────────┴───────────────────────────────────┘
```

## Example

Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save idea
```

```js
// Dependencies
var IdeaContainer = require("idea");

// Initialize the idea object
var idea = new IdeaContainer("./ideas.json", function (err) {
    if (err) throw err;
    idea.create("Implement something cool.", function (err) {
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