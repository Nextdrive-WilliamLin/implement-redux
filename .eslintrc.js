module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect", // detect react version
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended", // use recommended configs
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "accessor",
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: "objectLiteralProperty",
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: "variable",
        format: ["PascalCase", "camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "enumMember",
        format: ["camelCase", "UPPER_CASE"],
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: ["ApiExecutor"],
      },
    ],
  },
}
