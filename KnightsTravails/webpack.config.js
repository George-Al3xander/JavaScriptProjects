const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name] [ext]",
    },
    devServer: {
        static: {            
            directory: path.resolve(__dirname,"dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback:true,
    },
    devtool: "source-map",    
    plugins: [
        new HtmlWebpackPlugin({
            title: "Knight",
            filename: "index.html",
            template: "src/template.html",          

        }),        
    ]

}