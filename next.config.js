module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]?[hash]',
            emitFile: false,
            publicPath: '/'
          }
        }
      ]
    });
    return config;
  }
};
