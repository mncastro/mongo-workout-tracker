// Libraries and dependencies variables
const express = require("express");
const mongoose = require("mongoose");

// Local port Express connection
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// HTML and API routes!!
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//MongoDB and mongoose database connections
// Server installation and display port

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});