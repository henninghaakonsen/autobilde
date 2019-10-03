const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const config = merge.strategy({
    "entry.autobilde": "prepend",
    "module.rules": "append"
})(common, {
    mode: "production",
    entry: {
        autobilde: ["babel-polyfill"]
    },
    output: {
        path: path.join(__dirname, "../production"),
        filename: "[name].[contenthash].js",
        publicPath: "/assets/"
    },
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(false),
        new webpack.NoEmitOnErrorsPlugin(),
        
    ],
    optimization: {
        minimizer: [new TerserPlugin()]
    }
});

module.exports = config;
