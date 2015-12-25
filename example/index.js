// Dependencies
var Idea = require("../lib");

// Initialize the idea object
var idea = new Idea("./ideas.json", err => {
    if (err) throw err;
    idea.create("Implement something cool.", err => {
        if (err) throw err;
    });
});
