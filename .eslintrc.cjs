module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest"
  },
  rules: {
    //...
    'react/react-in-jsx-scope': 'off',

  }
};