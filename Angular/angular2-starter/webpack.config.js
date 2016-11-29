var webpack = require("webpack");
var HtmlebpackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
    entry: "./src/main.ts",
    output: {
        path: __dirname,
        filename: "./src/dist/app.bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".ts"]
    }, 
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"dist", /* filename= */"./dist/app.bundle.js"),
        new webpack.ProvidePlugin({   
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};