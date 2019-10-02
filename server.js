const dotenv = require("dotenv");
const mail = require("./mail");
const bodyParser = require("body-parser");
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 9000;

dotenv.config();
app.use(express.static(path.join(__dirname, "build")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(morgan("combined"));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

app.post("/sendmail", (req, res) => {
    const body = req.body;
    mail.sendMail(res, body);
});

app.listen(port, () => {
    console.log(`Started server on ` + port);
});
