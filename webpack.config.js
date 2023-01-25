// Generated using webpack-cli https://github.com/webpack/webpack-cli
// https://qiita.com/itachi/items/0910e5eda52779ffc2c0
// 転送用の変更

const path = require("path")
const {VueLoaderPlugin } = require("vue-loader")

module.exports = {
    //モードをdevelopment、production、noneから設定(必須)
    //development: 開発時のファイル出力モード(最適化より時間短縮、エラー表示を優先）
    //production: 本番時のファイル出力モード（最適化されて出力）
    mode:'production',
    //メインとなるjsファイル(エントリーポイント)
    entry: "./src/main.ts",
    //ファイルの出力設定
    output: {
        //出力先のディレクトリ（絶対パスで指定）
        path: path.resolve(__dirname, "dist"),
        //出力ファイル名
        filename: "bundle.js",
    },
    target: 'node',
    //ローダーの設定
    module: {
        rules: [
            {
                test: /\.css$/, //拡張子が.cssの場合
                use: ["vue-style-loader", "css-loader"] //vue-style-loader、css-loaderを使う
            },
            {
                test:/\.vue$/, //拡張子が.vueの場合
                loader: "vue-loader" //vue-loaderを使う
            },
            {
                test: /\.ts$/, //拡張子が.tsの場合
                exclude: /node_modules/,
                loader: "ts-loader", //ts-loaderを使う

            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        //Vueを読み込むために必要
        new VueLoaderPlugin(),
    ],
}



// const path = require("path");
// const isProduction = process.env.NODE_ENV == "production";
// const stylesHandler = "style-loader";

// const config = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
//   plugins: [
//     // Add your plugins here
//     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [stylesHandler, "css-loader"],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: "asset",
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
// };

// module.exports = () => {
//   if (isProduction) {
//     config.mode = "production";
//   } else {
//     config.mode = "development";
//   }
//   return config;
// };
