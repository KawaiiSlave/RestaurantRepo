const express = require('express');
const path = require()

const PORT = 9001;

const app = express();

app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "...html"));

});












app.listen(PORT, function() {
    console.log("App listening on PORT: " + 9001);
});

