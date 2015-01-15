# idea
A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.

## Installation
Run the following commands to download and install the application:

```sh
$ git clone git@github.com:IonicaBizau/idea.git idea
$ cd idea
$ npm install
```

## Documentation
## `Idea(path, callback)`

### Params 
- **String** `path`: The path to the JSON file where your ideas will be stored (default: `~/.ideas.json`).
- **Function** `callback`: The callback function.

### Return
- **** 

## `list(callback)`
Lists all ideas.

### Params 
- **Function** `callback`: The callback function.

### Return
- **Idea** The `Idea` instance.

## `filter(filters, callback)`
Filters ideas.

### Params 
- **Object** `filters`: An MongoDB like query object.
- **Function** `callback`: The callback function.

### Return
- **Idea** The `Idea` instance.

## `create(idea, callback)`

### Params 
- **String** `idea`: The idea you have.
- **Function** `callback`: The callback function.

### Return
- **Idea** The `Idea` instance.

## `solve(id, callback)`
Solves an idea.

### Params 
- **String** `id`: The idea id.
- **Function** `callback`: The callback function.

### Return
- **Idea** The `Idea` instance.

## `save(callback)`
Saves the ideas in the file.

### Params 
- **Function** `callback`: The callback function.

### Return
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
