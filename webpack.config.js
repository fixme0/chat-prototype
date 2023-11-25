const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const path = require('path');

const appSrc = path.resolve(__dirname, 'src', 'client');
const staticFolder = path.resolve(__dirname, 'static');

const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

module.exports = () => ({
  stats: 'errors-warnings',
  mode: isEnvDevelopment
    ? 'development'
    : isEnvProduction && 'production',
  bail: isEnvProduction,
  devtool: isEnvProduction
    ? 'source-map'
    : false,
  entry: appSrc,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isEnvProduction
      ? 'js/[name].[contenthash:8].js'
      : 'js/bundle.js',
    chunkFilename: isEnvProduction
      ? 'js/[name].[contenthash:8].chunk.js'
      : 'js/[name].chunk.js',
    publicPath: '/',
  },
  infrastructureLogging: {
    level: 'none',
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: isEnvProduction,
          keep_fnames: isEnvProduction,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.scss', '.svg'],
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: appSrc,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            [
              require.resolve('@babel/preset-env'),
              {
                useBuiltIns: 'entry',
                corejs: 3,
                exclude: ['transform-typeof-symbol'],
              },
            ],
            [
              require.resolve('@babel/preset-react'),
              {
                development: isEnvDevelopment,
                runtime: 'classic',
              },
            ],
          ],
          plugins: [
            [
              require.resolve('@babel/plugin-proposal-class-properties'),
              { loose: true },
            ],
            [
              require.resolve('@babel/plugin-proposal-private-methods'),
              { loose: true },
            ],
            [
              require.resolve('@babel/plugin-proposal-private-property-in-object'),
              { loose: true },
            ],
            [
              require.resolve('@babel/plugin-transform-runtime'),
              {
                corejs: false,
                helpers: true,
                regenerator: true,
                useESModules: true,
              },
            ],
            isEnvProduction && [
              require.resolve('babel-plugin-transform-react-remove-prop-types'),
              { removeImport: true },
            ],
            require.resolve('@babel/plugin-proposal-optional-chaining'),
            require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
          ].filter(Boolean),
          babelrc: false,
          configFile: false,
          cacheDirectory: true,
          cacheCompression: false,
          compact: isEnvProduction,
        },
      },
      {
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [
            {
              sourceType: 'unambiguous',
              presets: [
                [
                  require.resolve('@babel/preset-env'),
                  {
                    useBuiltIns: 'entry',
                    corejs: 3,
                    exclude: ['transform-typeof-symbol'],
                  },
                ],
              ],
              plugins: [
                [
                  require.resolve('@babel/plugin-transform-runtime'),
                  {
                    corejs: false,
                    helpers: true,
                    regenerator: true,
                    useESModules: true,
                  },
                ],
              ],
            },
          ],
          cacheDirectory: true,
          cacheCompression: false,
          sourceMaps: isEnvDevelopment,
          inputSourceMap: isEnvDevelopment,
        },
      },
      {
        test: /\.scss$/,
        include: appSrc,
        use: [
          isEnvDevelopment && require.resolve('style-loader'),
          isEnvProduction && ({
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          }),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 3,
              sourceMap: isEnvDevelopment,
              modules: {
                mode: 'local',
                localIdentName: isEnvDevelopment
                  ? '[path][name]__[local]'
                  : '[hash:base64]',
              },
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                ident: 'postcss',
                config: false,
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                  'postcss-normalize',
                ],
              },
              sourceMap: isEnvDevelopment,
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              sourceMap: true,
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'media/[name].[hash].[ext]',
            },
          },
        ],
        issuer: {
          and: [/\.(js|jsx)$/],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {

        inject: true,
        template: path.resolve(staticFolder, 'template.html'),
        ...(isEnvProduction
          ? {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          }
          : undefined),
      },
    ),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'development',
    }),
    isEnvDevelopment && new CaseSensitivePathsPlugin(),
    isEnvProduction && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
  ],
  performance: false,
  devServer: isEnvDevelopment
    ? ({
      compress: true,
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3001,
      hot: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    })
    : undefined,
});
