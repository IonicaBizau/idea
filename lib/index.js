"use strict";

// Dependencies
const sift = require("sift")
    , isThere = require("is-there")
    , abs = require("abs")
    , rJson = require("r-json")
    , wJson = require("w-json")
    ;

// Constants
const DEFAULT_PATH = abs("~/.ideas.json");

/**
 * Idea
 *
 * @name Idea
 * @function
 * @param {String} path The path to the JSON file where your ideas will be stored (default: `~/.ideas.json`).
 * @param {Function} callback The callback function.
 * @return {Idea} The `Idea` instance.
 */
class Idea {
    constructor (path, callback) {
        if (typeof path === "function") {
            callback = path;
            path = null;
        }

        // Defaults
        this.path = path = path || DEFAULT_PATH;
        callback = callback || (err => { if (err) throw err });

        // Init
        if (!isThere(this.path)) {
            this.ideas = [];
            this.save(callback);
        } else {
            this.list((err, ideas) => {
                if (err) { return callback(err); }
                this.ideas = ideas;
                callback(null, ideas, this);
            });
        }
    }
    /**
     * list
     * Lists all ideas.
     *
     * @name list
     * @function
     * @param {Function} callback The callback function.
     * @return {Idea} The `Idea` instance.
     */
    list (callback) {
        rJson(this.path, (err, content) => {
            if (err) { return callback(err); }
            callback(err, content);
        });
        return this;
    }
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
    filter (filters, callback) {
        callback(null, sift(filters, this.ideas));
        return this;
    }
    /**
     * create
     *
     * @name create
     * @function
     * @param {String} idea The idea you have.
     * @param {Function} callback The callback function.
     * @return {Idea} The `Idea` instance.
     */
    create (idea, callback) {
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
    }
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
    solve (id, callback) {
        if (!this.ideas[id - 1]) {
            return callback(new Error("Cannot find any idea with this id."));
        }
        this.ideas[id - 1].state = "SOLVED";
        return this;
    }
    /**
     * save
     * Saves the ideas in the file.
     *
     * @name save
     * @function
     * @param {Function} callback The callback function.
     * @return {Idea} The `Idea` instance.
     */
    save (callback) {
        wJson(this.path, this.ideas, callback);
        return this;
    }
}

module.exports = Idea;
