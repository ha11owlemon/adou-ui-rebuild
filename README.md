# ADOU UI

使用纯 Bootstrap 5+ 的 React 组件库

#### Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# Locally preview the production build.
$ npm run docs:preview

# check your project for potential problems
$ npm run doctor
```

#### husky 配置

```bash
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -e HUSKY_GIT_PARAMS"
    }
  },
```

## LICENSE

MIT
