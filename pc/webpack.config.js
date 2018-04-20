let initConfig = require('my-webpack-config').default;
let merge  = require('webpack-merge');
module.exports = initConfig({
  env: 'production'
}, (config) => {
  return merge(config, {
// /*
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/](?!(antd|bizcharts))/,
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
          }
        }
      },
    },
    externals: {
      moment: 'window.moment'
    }
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