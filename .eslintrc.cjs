module.exports = {
  extends: [
    'plugin:@next/next/recommended',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
};