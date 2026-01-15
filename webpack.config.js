const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  mode: "development",

  devServer: {
    static: "./dist",
    open: true,
    hot: true,
    port: 3000,
  },

  module: {
    rules: [
       /* CSS */
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      /* IMAGES */
      {
         test: /\.(png|jpe?g|gif|svg)$/i,
         type: "asset/resource",
      },

       /* HTML COMPONENTS*/
        {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
