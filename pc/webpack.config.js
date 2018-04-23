let initConfig = require('my-webpack-config').default;
let merge  = require('webpack-merge');
let ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
module.exports = initConfig({
  env: 'production'
}, (config) => {
  return merge(config, {
// /*
    output:{
      publicPath: './',
      filename: 'scripts/[name]_[hash].js',
      chunkFilename: 'scripts/[name]_[chunkhash].js'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](?!(antd|bizcharts|data-set|xlsx|jszip|cpexcel))/,
            name: 'vendor',
            chunks: 'initial'
          },
          ant: {
            test:/antd.*\.js$/,
            name: 'antd',
            chunks: 'async'
          },
          bizcharts: {
            test:/bizcharts.*\.js$/,
            name: 'bizcharts',
            chunks: 'async'
          },
          dataset: {
            test: /data-set.*\.js$/,
            name: 'data-set',
            chunks: 'async'
          },
          xlsx:{
            test: /xlsx\.js$/,
            name: 'xlsx',
            chunks: 'async'
          },
          cpexcel:{
            test: /cpexcel\.js$/,
            name: 'cpexcel',
            chunks: 'async'
          },
          jszip:{
            test: /jszip\.js$/,
            name: 'jszip',
            chunks: 'async'
          }
        }
      },
    },
    externals: {
      moment: 'window.moment'
    },
    plugins: [
      new ScriptExtHtmlWebpackPlugin({
        preload: {
          test: /\.js$/,
          chunks: 'async'
        }
      })
    ]
    //*/
 /*
  devServer: {
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'https://www.e-irobot.com',
          changeOrigin: true
        },
        '/uploadfile': 'https://www.e-irobot.com',
        changeOrigin: true
      }
    }
 */
  });
});