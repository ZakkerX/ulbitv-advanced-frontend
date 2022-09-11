import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';


const config: webpack.Configuration = {
    mode: "development",
    // entry point to the app
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    // where and how to build the app
    output: {
        // [contenthash] generates unique hash, if sth changed
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        // clean output folder
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    // ./component instead of ./component.tsx
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin()
    ],
}

// changed nodejs export (module.export) to js export
export default config;