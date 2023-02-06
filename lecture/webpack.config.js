const path = require("path");

module.exports = {
  name: "wordrelay-setting", //webpack설정 이름
  mode: "development", // 실서비스:production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    //입력
    app: ["./client.jsx", "./WordRelay.jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        // loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  output: {
    //출력
    path: path.join(__dirname, "dist"), // __dirname : 현재 폴더 경로
    filename: "app.js",
  },
};
