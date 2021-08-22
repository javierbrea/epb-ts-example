module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ["prettier", "jest"],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 99,
        parser: "flow",
      },
    ],
    "no-undef": "error",
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
  },
};
