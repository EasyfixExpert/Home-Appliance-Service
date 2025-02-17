import Dotenv from "dotenv-webpack"
import path from "path"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

export default {
  // Define the entry points of our application (can be multiple for different sections of a website)
  entry: {
    main: "./src/js/main.js",
  },

  // Define the destination directory and filenames of compiled resources
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "./public"),
  },

  // Define development options
  devtool: "source-map",

  // Define loaders
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
          "sass-loader"
        ],
      },
      // File loader for images
      {
        test: /\.(jpg|jpeg|png|git|svg)$/i,
        type: "asset/resource",
      }
    ],
  },

  // Define used plugins
  plugins: [
    // Load .env file for environment variables in JS
    new Dotenv({
      path: "./.env"
    }),

    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),

    // Copy images to the public folder
    new CopyPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        }
      ]
    }),

    // Inject styles and scripts into the HTML for the main page
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "index.html")
    }),

    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'air-conditioner.html', // Output file name
      template: 'src/pages/services/air-conditioner.html', // Path to the actual HTML file for air-conditioner page
    }),

    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'washing-machine.html', // Output file name
      template: 'src/pages/services/washing-machine.html', // Path to the actual HTML file for air-conditioner page
    }),

    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'fridge.html', // Output file name
      template: 'src/pages/services/fridge.html', // Path to the actual HTML file for air-conditioner page
    }),

    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'water-heater.html', // Output file name
      template: 'src/pages/services/water-heater.html', // Path to the actual HTML file for air-conditioner page
    }),

    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'dish-washer.html', // Output file name
      template: 'src/pages/services/dish-washer.html', // Path to the actual HTML file for air-conditioner page
    }),

    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'oven.html', // Output file name
      template: 'src/pages/services/oven.html', // Path to the actual HTML file for air-conditioner page
    }),

    // ac brand pages starts
    new HtmlWebpackPlugin({
      filename: 'samsung-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/samsung-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),

    new HtmlWebpackPlugin({
      filename: 'bluestar-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/bluestar-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),

    new HtmlWebpackPlugin({
      filename: 'carrier-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/carrier-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),

    new HtmlWebpackPlugin({
      filename: 'haier-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/haier-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'hitachi-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/hitachi-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'lg-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/lg-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'lg-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/lg-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'lloyd-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/lloyd-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'ogeneral-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/ogeneral-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'onida-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/onida-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'panasonic-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/panasonic-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'voltas-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/voltas-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'whirlpool-ac-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/air-conditioner/whirlpool-ac-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    // ac brand pages ends

    // ***********************************
    // washing machine brand pages starts
    new HtmlWebpackPlugin({
      filename: 'samsung-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/samsung-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),

    new HtmlWebpackPlugin({
      filename: 'lg-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/lg-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),

    new HtmlWebpackPlugin({
      filename: 'onida-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/onida-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'panasonic-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/panasonic-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'haier-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/haier-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'whirlpool-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/whirlpool-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'godrej-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/godrej-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'ifb-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/ifb-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    new HtmlWebpackPlugin({
      filename: 'bosch-washing-machine-service-centre.html', // Output file name
      template: 'src/pages/brand_pages/washing-machine/bosch-washing-machine-service-centre.html', // Path to the actual HTML file for air-conditioner page
    }),
    // washing machine brand pages ends
    // ***********************************


    // Inject styles and scripts into the HTML for air-conditioner page
    new HtmlWebpackPlugin({
      filename: 'air-conditioner-karaikudi.html', // Output file name
      template: 'src/pages/services/air-conditioner-karaikudi.html', // Path to the actual HTML file for air-conditioner page
    }),

  ],

  // Configure the "webpack-dev-server" plugin
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), "public")
    },
    // Watch both the index.html and the new air-conditioner.html for changes
    watchFiles: [
      path.resolve(process.cwd(), "index.html"),
      path.resolve(process.cwd(), "src/pages/services/air-conditioner.html"), // Add the path for your new page here
      path.resolve(process.cwd(), "src/pages/services/washing-machine.html"), // Add the path for your new page here
      path.resolve(process.cwd(), "src/pages/services/fridge.html"), // Add the path for your new page here

      // ac brand pages starts
      path.resolve(process.cwd(), "src/pages/brand_pages/air-conditioner/samsung-ac-service-centre.html"),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/bluestar-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/carrier-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/haier-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/hitachi-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/lg-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/lg-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/lloyd-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/ogeneral-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/onida-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/panasonic-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/voltas-ac-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/air-conditioner/whirlpool-ac-service-centre.html'),
      // ac brand pages ends


      // fridge brand pages starts
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/samsung-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/lg-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/onida-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/panasonic-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/haier-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/whirlpool-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/godrej-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/ifb-washing-machine-service-centre.html'),
      path.resolve(process.cwd(), 'src/pages/brand_pages/washing-machine/bosch-washing-machine-service-centre.html'),
      // fridge brand pages ends
    ],
    compress: true,
    port: process.env.PORT || 9090,
    hot: true,
  },

  // Performance configuration
  performance: {
    hints: false
  }
};
