// Dependencies
var Ul = require("ul")
  , Fs = require("fs")
  , Sift = require("sift")
  ;

// Constants
const DEFAULT_PATH = Ul.USER_DIR + "/.ideas.json"

/**
 * Idea
 *
 * @name Idea
 * @function
 * @param {String} path The path to the JSON file where your ideas will be stored (default: `~/.ideas.json`).
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
var Idea = module.exports = function (path, callback) {
    var self = this;

    if (typeof path === "function") {
        callback = path;
        path = null;
    }

    // Defaults
    self.path = path = path || DEFAULT_PATH;
    callback = callback || function (err) {
        if (err) throw err;
    };

    // Init
    if (!Fs.existsSync(self.path)) {
        self.ideas = [];
        self.save(callback);
    } else {
        self.list(function (err, ideas) {
            if (err) { return callback(err); }
            self.ideas = ideas;
            callback(null, ideas, self);
        });
    }

    return self;
};

/**
 * list
 * Lists all ideas.
 *
 * @name list
 * @function
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
Idea.prototype.list = function (callback) {
    Fs.readFile(this.path, "utf-8", function (err, content) {
        if (err) { return callback(err); }
        try {
            content = JSON.parse(content);
        } catch (e) {
            err = e;
        }
        callback(err, content);
    });
    return this;
};

/**
 * filter
 * Filters ideas.
 *
 * @name filter
 * @function
 * @param {Object} filters An MongoDB like query object.
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
Idea.prototype.filter = function (filters, callback) {
    callback(null, Sift(filters, this.ideas));
    return this;
};

/**
 * create
 *
 * @name create
 * @function
 * @param {String} idea The idea you have.
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
Idea.prototype.create = function (idea, callback) {
    if (!idea) {
        return callback(new Error("Idea cannot be empty."));
    }
    this.ideas.push({
        id: this.ideas.length
      , idea: idea
      , date: new Date()
      , state: "OPEN"
    });
    return this;
};

/**
 * solve
 * Solves an idea.
 *
 * @name solve
 * @function
 * @param {String} id The idea id.
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
Idea.prototype.solve = function (id, callback) {
    if (!this.ideas[id - 1]) {
        return callback(new Error("Cannot find any idea with this id."));
    }
    this.ideas[id - 1].state = "SOLVED";
    return this;
};

/**
 * save
 * Saves the ideas in the file.
 *
 * @name save
 * @function
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
Idea.prototype.save = function (callback) {
    Fs.writeFile(this.path, JSON.stringify(this.ideas, null, 2), callback);
    return this;
};
