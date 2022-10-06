const path = require("path");
const isDevMode = process.env.NODE_ENV !== "production";

const config = {
  entry: {
    main: ["./js/src/index.jsx"],
  },
  // devtool: (isDevMode) ? 'source-map' : false, // Development mode
  mode: isDevMode ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "js/dist"),
    filename: "[name].min.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".jpg"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.join(__dirname, "js/src"),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'js/src/assets/images',
        },
      },
    ],
  },
};

module.exports = config;
