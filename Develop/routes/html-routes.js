// Variables for static route paths
const path = require("path");
const root = path.join(__dirname, "../public");

module.exports = function (app) {
    app.get("/exercise", (req, res) => {
        res.sendFile(root + "/exercise.html");
    });

    app.get("/stats", (req, res) => {
        res.sendFile(root + "/stats.html");
    });
};