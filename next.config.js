module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scala$/i,
      use: "raw-loader",
    });

    return config;
  },
};
