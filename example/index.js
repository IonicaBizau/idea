// Dependencies
var IdeaContainer = require("../lib");

// Initialize the idea object
var idea = new IdeaContainer("./ideas.json", function (err) {
    if (err) throw err;
    idea.create("Implement something cool.", function (err) {
        if (err) throw err;
    });
});
