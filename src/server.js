const dotenv = require("dotenv");
const mail = require("./mail");
const bodyParser = require("body-parser");
const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 9000;

const config = require("../webpack/webpack.dev");

dotenv.config();
app.use("/api/bilder", express.static(path.join(__dirname, "..", "bilder")));
app.use(favicon(path.join(__dirname, "../bilder", "favicon.ico")));
app.use(morgan("combined"));

let middleware;

if (process.env.NODE_ENV === "development") {
    const compiler = webpack(config);
    middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
} else {
    app.use(
        "/assets",
        express.static(path.join(__dirname, "..", "production"))
    );
}

if (process.env.NODE_ENV === "development") {
    app.get("*", (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
            middleware.fileSystem.readFileSync(
                path.join(__dirname, `../development/index.html`)
            )
        );
        res.end();
    });
} else {
    app.get("*", (req, res) => {
        res.sendFile("index.html", {
            root: path.join(__dirname, "../production")
        });
    });
}

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

app.post("/sendmail", (req, res) => {
    const body = req.body;
    mail.sendMail(res, body);
});

app.listen(port, () => {
    console.log(`Started server on ` + port);
});
