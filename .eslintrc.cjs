module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    //...
    'react/react-in-jsx-scope': 'off',

  }
};