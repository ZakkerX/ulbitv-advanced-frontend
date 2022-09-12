import webpack from "webpack"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import {BuildOptions} from "./types/config"


export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths} = options;

    return {
        mode,
        // entry point to the app
        entry: paths.entry,
        // where and how to build the app
        output: {
            // [contenthash] generates unique hash, if sth changed
            filename: '[name].[contenthash].js',
            path: paths.build,
            // clean output folder
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        // ./component instead of ./component.tsx
        resolve: buildResolvers(),   
    }
}