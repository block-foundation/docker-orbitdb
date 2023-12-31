import path from 'path'
import webpack from 'webpack'

export default (env, argv) => {
  return {
    entry: './examples/browser/browser-webpack-example/index.js',
    output: {
      filename: '../examples/browser/browser-webpack-example/bundle.js'
    },
    target: 'web',
    devtool: 'none',
    node: {
      Buffer: true,
      mkdirp: 'empty',
      fs: 'empty'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
    ],
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '../node_modules')
      ]
    },
    resolveLoader: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '../node_modules')
      ],
      moduleExtensions: ['-loader']
    }
  }
}
