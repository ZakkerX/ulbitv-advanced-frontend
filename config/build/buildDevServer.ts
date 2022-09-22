import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
