module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    //...
    'react/react-in-jsx-scope': 'off',

  }
};