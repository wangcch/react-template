# React-template

React page template (React + React Router + SCSS)

## Setup

```
$ git clone --depth=1 https://github.com/wangcch/react-template.git your-project-name
$ cd your-project-name
```

### yarn

```
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn start

# build for production with minification
$ yarn build
```

### npm

```
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm start

# build for production with minification
$ npm run build
```

## Webpack Options

```js
/* config-overrides.js */
const path = require('path');
const rewireSass = require("react-app-rewire-scss");

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  config.resolve = Object.assign({}, config.resolve, {
    alias: {
      "@": path.resolve("src")
    }
  });
  return config;
};
```

[Extended Configuration Options](https://github.com/timarney/react-app-rewired#extended-configuration-options)


## License

MIT
