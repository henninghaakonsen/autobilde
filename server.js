const express = require("express");
const path = require("path");
const app = express();
const { setupVær } = require("./src/backend/vær");
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

setupVær(app);

app.listen(port, () => {
    console.log(`Started server on ` + port);
});
