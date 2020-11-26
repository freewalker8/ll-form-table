module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },

  overrides: [
    {
      files: '.prettierrc.js'
    }
  ]
};
