const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");

const config = merge.strategy({
    "entry.autobilde": "prepend",
    "module.rules": "append"
})(common, {
    mode: "development",
    entry: {
        autobilde: [
            "babel-polyfill",
            "react-hot-loader/patch",
            "webpack-hot-middleware/client?reload=true"
        ]
    },
    output: {
        path: path.join(__dirname, "../development"),
        filename: "[name].[hash].js",
        publicPath: "/assets/",
        globalObject: "this"
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;
