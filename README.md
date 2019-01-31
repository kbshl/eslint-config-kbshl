# eslint-config-kbshl

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![NPM](https://img.shields.io/npm/v/eslint-config-kbshl.svg)](https://www.npmjs.com/package/eslint-config-kbshl)
[![NPM total downloads](https://img.shields.io/npm/dt/eslint-config-kbshl.svg)](https://www.npmjs.com/package/eslint-config-kbshl)
[![NPM license](https://img.shields.io/npm/l/eslint-config-kbshl.svg)](https://www.npmjs.com/package/eslint-config-kbshl)
[![GitHub stars](https://img.shields.io/github/stars/kbshl/eslint-config-kbshl.svg)](https://github.com/kbshl/eslint-config-kbshl/stargazers/)

> [ESLint](https://eslint.org) >
> [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html)
> for my Javascript based projects - Mobile and Web

## Installation

```shell
npm install --save-dev eslint-config-kbshl
```

## Usage

Once the `eslint-config-kbshl` package is installed, you can use it by
specifying `ksbhl` in the
[`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
section of your
[ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "kbshl",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Notes

Please note that most of the stylistic rules are disabled cause I use
[prettier](https://prettier.io/) to format my code. Therefore the
[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
is included.

## Provided configurations

The default config actually is composed of several configurations and you can
use those individually. These are the configs it's using:

- [possible-errors.js](./possible-errors.js)
- [best-practices.js](./best-practices.js)
- [stylistic.js](./stylistic.js)
- [es6](./es6/index.js)
- [import](./import/index.js)
- [promise](./promise/index.js)
- [security](./security/index.js)

You can use each of these configs yourself. Also, the `es6`, `import`,
`promise`, `security` configs each have a `possible-errors.js`,
`best-practices.js` (and `stylistic.js`) which they are composed of as well.

### Optional configurations

Other configs are exposed also. You can use them standalone:

```js
{
  "extends": "kbshl/<config-name>"
}
```

or in combination with the base config (recommended):

```js
{
  "extends": [
    "kbshl",
    "kbshl/<config-name>"
  ]
}
```

- [alloy](./mobile/alloy.js) - Copied and extended from
  [eslint-config-axway](https://github.com/appcelerator/eslint-config-axway/blob/master/env-alloy.js),
  the `titanium` config is merged into this one
- [babel](./babel/index.js)
- [flowtype](./flowtype.js)
- [mobile](./mobile/index.js) - A merge of the `titanium` and `alloy` configs
- [titanium](./mobile/titanium.js) - Copied and extended from
  [eslint-config-axway](https://github.com/appcelerator/eslint-config-axway/blob/master/env-titanium.js)

### Things to know

- All plugins needed for rules used by these configs are dependencies of this
  module so you don't have to install anything on your own.
- Almost all of the stylistic rules are disabled cause I use
  [prettier](https://prettier.io/) to format my code. To ensure this the
  [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
  is included too.

### ESLint Dependencies

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-alloy](https://www.npmjs.com/package/eslint-plugin-alloy)
- [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)
- [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)

## License

MIT © [Konstantin Büschel](https://github.com/kbshl)
