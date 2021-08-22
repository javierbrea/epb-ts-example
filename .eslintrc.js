module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "boundaries"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:boundaries/strict",
  ],
  settings: {
    "boundaries/elements": [
      {
        type: "root",
        pattern: "src/index.ts",
        mode: "full",
      },
      {
        type: "components",
        pattern: "components/*",
      },
      {
        type: "modules",
        pattern: "modules/*",
      },
    ],
    "boundaries/include": ["src/**/*.*"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
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
    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: "root",
            allow: ["modules"],
          },
          {
            from: "components",
            allow: ["components"],
          },
          {
            from: "modules",
            allow: ["components"],
          },
        ],
      },
    ],
  },
};
