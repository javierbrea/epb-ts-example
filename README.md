# eslint-plugin-boundaries TypeScript configuration example

This repository contains an example of the eslint plugin [`eslint-plugin-boundaries`](https://github.com/javierbrea/eslint-plugin-boundaries) usage with [TypeScript](https://www.typescriptlang.org/), including custom TS paths.

The docs of the plugin itself contains `TypeScript` configuration instructions.

## Installation

```bash
git clone git@github.com:javierbrea/epb-ts-example.git
cd epb-ts-example
npm i
```

## Eslint execution

Note that __the lint execution will return an error, but it is intentional__, as the `src/modules/module-b` element contains a forbidden import in order to check that the plugin works properly.

```bash
npm run lint

# 1:21  error  Usage of 'modules' is not allowed in 'modules'  boundaries/element-types
```

## Tests

Some tests have been added to check that both `TypeScript` compilation and `eslint` execution work as expected.

```bash
npm run build
npm run test
```