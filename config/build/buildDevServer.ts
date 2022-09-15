import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        // automatically opens the page
        open: true, 
        // allows to proxy requests through a specified index page (by default 'index.html'), 
        // useful for SPAs that utilise the HTML5 History API.
        historyApiFallback: true,  
    }
}