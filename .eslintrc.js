module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    "plugin:@typescript-eslint/recommended",
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "class-methods-use-this": "off",
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never"
      }
    ]
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
