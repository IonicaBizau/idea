## Documentation

You can see below the API reference of this module.

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

### `remove(id, callback)`

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

