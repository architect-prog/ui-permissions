/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const AutoprefixerPlugin = require('autoprefixer');
const postcssNormalize = require('postcss-normalize');
const PostCssCustomPropertiesPlugin = require('postcss-custom-properties');
const PostCssPresetEnv = require('postcss-preset-env');
const PostCssImport = require('postcss-import');
const PostCssNested = require('postcss-nested');
const PostCSSVariables = require('postcss-css-variables');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const postCSSFlexBugsFixesPlugin = require('postcss-flexbugs-fixes');
const CompressionPlugin = require('compression-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`);

const configureOptimization = () => {
  const config = {};

  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin({
        exclude: ['584*.js'],
      }),
    ];
  }

  (config.splitChunks = {
    minSize: 1,
    cacheGroups: {
      vendorIntelliflo: {
        test: /[\\/]node_modules[\\/]@intelliflo[\\/]/,
        name: 'vendors.intelliflo',
        chunks: 'all',
      },
      commons: {
        test: /[\\/]node_modules[\\/](?!@intelliflo)(.[a-zA-Z0-9.\-_]+)[\\/]/,
        name: 'vendors.global',
        chunks: 'all',
      },
    },
  }),
    (config.runtimeChunk = 'single');

  return config;
};

const configureRules = () => {
  const rules = [
    {
      test: /\.(tsx|ts|js)?$/,
      use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      enforce: 'pre',
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            import: false,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            postcssOptions: {
              plugins: [postCSSFlexBugsFixesPlugin, postcssNormalize()],
            },
          },
        },
      ],
    },
    {
      test: /\.(png|jpe?g|jpg|gif|ico|svg)?$/,
      type: 'asset/resource',
      generator: {
        filename: `images/[name]${!isDev ? '.[contenthash]' : ''}[ext]`,
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)?$/,
      type: 'asset/inline',
    },
  ];

  if (isDev) {
    const scssRule = {
      test: /\.s([ac])ss$/,
      use: [
        {
          loader: MiniCSSExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            postcssOptions: {
              plugins: [
                postCSSFlexBugsFixesPlugin,
                PostCssImport,
                PostCSSVariables,
                PostCssPresetEnv({
                  stage: 1,
                }),
                PostCssNested,
                AutoprefixerPlugin({
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        },
        'sass-loader',
      ],
    };

    rules.push(scssRule);
  }

  return rules;
};

const configureCopyPluginPatterns = () => {
  const patterns = [
    {
      from: path.resolve(__dirname, 'src/assets/static/favicon.png'),
      to: path.resolve(__dirname, 'dist'),
    },
    {
      from: path.resolve(__dirname, 'src/assets/static/'),
      to: path.resolve(__dirname, 'dist/images'),
    },
  ];

  return patterns;
};

const configurePlugins = () => [
  new HTMLWebpackPlugin({
    template: './index.html',
    minify: {
      collapseWhitespace: !isDev,
    },
    templateParameters: {
      app_config: '<app_config></app_config>', // will be replaced in runtime by server
    },
    chunks: ['app'],
  }),
  PostCssCustomPropertiesPlugin,
  AutoprefixerPlugin,
  new MiniCSSExtractPlugin({
    filename: filename('css'),
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: configureCopyPluginPatterns(),
  }),
  new CompressionPlugin(),

  new CompressionPlugin({
    exclude: /\.s([ac])ss$/,
  }),
];

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: isDev ? ['core-js/stable', './index.tsx', './importDevAssets.tsx'] : ['core-js/stable', './index.tsx'],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    fallback: {
      zlib: require.resolve('browserify-zlib'),
      tty: require.resolve('tty-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      stream: require.resolve('stream-browserify'),
    },
    alias: {
      react: path.join(__dirname, 'node_modules/react'),
      'react-dom': path.join(__dirname, 'node_modules/react-dom'),
      'react-router-dom': path.join(__dirname, 'node_modules/react-router-dom'),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: true,
    },
    port: process.env.PORT,
  },
  optimization: configureOptimization(),
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: configurePlugins(),
  module: {
    rules: configureRules(),
  },
  stats: 'normal',
  devtool: isDev ? 'eval-source-map' : undefined,
};

// This is needed for .NET SpaProxy to understand that webpack is up
// https://github.com/dotnet/aspnetcore/blob/main/src/Middleware/Spa/SpaServices.Extensions/src/ReactDevelopmentServer/ReactDevelopmentServerMiddleware.cs#L99
console.log('Starting the development server');
