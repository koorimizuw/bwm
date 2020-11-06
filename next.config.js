module.exports = {
  target: "serverless",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
      }
    })

    return config;
  }
};