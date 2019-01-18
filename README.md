# eslint-config-kbshl

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![NPM](https://img.shields.io/npm/v/eslint-config-kbshl.svg)](https://www.npmjs.com/package/eslint-config-kbshl)
[![NPM total downloads](https://img.shields.io/npm/dt/eslint-config-kbshl.svg)](https://www.npmjs.com/package/eslint-config-kbshl)
[![NPM license](https://img.shields.io/npm/l/eslint-config-kbshl.svg)](https://www.npmjs.com/package/eslint-config-kbshl)
[![GitHub stars](https://img.shields.io/github/stars/kbshl/eslint-config-kbshl.svg)](https://github.com/kbshl/eslint-config-kbshl/stargazers/)

> [ESLint](https://eslint.org) >
> [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html)
> for my Javascript based projects (Web and Mobile)

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

## Provided configurations

Following are the core configurations:

- [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [eslint-plugin-security/recommended](https://www.npmjs.com/package/eslint-plugin-security)
- [eslint-plugin-promise/recommended](https://www.npmjs.com/package/eslint-plugin-promise)
- [import](./import/index.js)
- [security](./security/index.js)

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

- [titanium](./mobile/titanium.js) - Copied and extended from
  [eslint-config-axway](https://github.com/appcelerator/eslint-config-axway/blob/master/env-titanium.js)
- [alloy](./mobile/alloy.js) - Copied and extended from
  [eslint-config-axway](https://github.com/appcelerator/eslint-config-axway/blob/master/env-alloy.js)
- [mobile](./mobile/index.js) - A merge of the `titanium` and `alloy` configs

### Dependencies

- [eslint-plugin-alloy](https://www.npmjs.com/package/eslint-plugin-alloy)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security)

## Provided Rules

This configuration provides the following custom rules, which are included as
appropriate in all core linting configs:

- [padded-blocks](https://eslint.org/docs/rules/padded-blocks) - Require or
  disallow padding within blocks
- [brace-style](https://eslint.org/docs/rules/brace-style) - Require Brace Style
- [no-multiple-empty-lines](https://eslint.org/docs/rules/no-multiple-empty-lines) -
  Disallow multiple empty lines
- [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define) -
  Disallow Early Use
- [global-require](https://eslint.org/docs/rules/global-require) - Enforce
  `require()` on the top-level module scope
- [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline) -
  Enforce consistent line breaks inside braces
- [no-useless-catch](https://eslint.org/docs/rules/no-useless-catch#disallow-unnecessary-catch-clauses-no-useless-catch) -
  Disallow unnecessary catch clauses

## License

MIT © [Konstantin Büschel](https://github.com/kbshl)
