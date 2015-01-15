![Idea](http://i.imgur.com/BGMt0Ne.png)

# idea
A lightweight CLI tool and module for keeping your ideas in a safe place quick and easy.

## Installation

```sh
$ npm install -g idea
```

## Usage

```sh
$ idea help
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
$ idea create 'Implement the idea tool.'
$ idea
┌──┬────────────────────────┬────────────────────────┬────────────────────────┐
│Id│Date                    │State                   │Idea                    │
├──┼────────────────────────┼────────────────────────┼────────────────────────┤
│1 │2015-01-15T14:09:06.233Z│OPEN                    │Implement the idea tool.│
└──┴────────────────────────┴────────────────────────┴────────────────────────┘
$ idea solve 1
$ idea
info  No ideas fetched.
$ idea list
┌──┬────────────────────────┬────────────────────────┬────────────────────────┐
│Id│Date                    │State                   │Idea                    │
├──┼────────────────────────┼────────────────────────┼────────────────────────┤
│1 │2015-01-15T14:09:06.233Z│SOLVED                  │Implement the idea tool.│
└──┴────────────────────────┴────────────────────────┴────────────────────────┘
```

## API
The `idea` can be used as library. See the below example and documentation.

### Example

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

### `Idea(path, callback)`

#### Params
- **String** `path`: The path to the JSON file where your ideas will be stored (default: `~/.ideas.json`).
- **Function** `callback`: The callback function.

#### Return
- **Idea** The `Idea` instance.

### `list(callback)`
Lists all ideas.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Idea** The `Idea` instance.

### `filter(filters, callback)`
Filters ideas.

#### Params
- **Object** `filters`: An MongoDB like query object.
- **Function** `callback`: The callback function.

#### Return
- **Idea** The `Idea` instance.

### `create(idea, callback)`

#### Params
- **String** `idea`: The idea you have.
- **Function** `callback`: The callback function.

#### Return
- **Idea** The `Idea` instance.

### `solve(id, callback)`
Solves an idea.

#### Params
- **String** `id`: The idea id.
- **Function** `callback`: The callback function.

#### Return
- **Idea** The `Idea` instance.

### `save(callback)`
Saves the ideas in the file.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **Idea** The `Idea` instance.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
