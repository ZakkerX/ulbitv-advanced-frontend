import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPLugin from "mini-css-extract-plugin";

export const buildPlugins = ({paths}: BuildOptions): webpack.WebpackPluginInstance[] => [
    new HtmlWebpackPlugin({
        template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPLugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css"
    })
]