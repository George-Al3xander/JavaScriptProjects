const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry:  {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: "[name][ext]",
    }, 
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }                    
                }
            },
            {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: "asset/resource"
            },
            {
                test: /\.css$/,
                use: ["style-loader" , "css-loader"],
                exclude: /node_modules/                
            }
        ]
    },
    plugins : [
        new HTMLWebpackPlugin({
            title: "Restaurant",
            filename: "index.html",
            template: "src/template.html"
        }),
        new BundleAnalyzerPlugin(),

    ]
}