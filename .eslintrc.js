// const isProduction = process.env.NODE_ENV === "production"

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2021,
    "extraFileExtensions": [".js", ".ts", ".jsx"],
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "semi": 0,
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/no-var-requires": "off"
    // "no-console": isProduction ? "warn" : "off",
    // "no-debugger": isProduction ? "warn" : "off",
  }
}
