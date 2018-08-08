const path = require('path');
const rewireSass = require("react-app-rewire-scss");

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  config.resolve = {
    alias: {
      "@": path.resolve("src")
    }
  };
  return config;
};
