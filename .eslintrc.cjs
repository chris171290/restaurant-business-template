module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': "off",
    "quotes": [2, "single", { "avoidEscape": true }],
    "react/jsx-indent" : ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    'object-curly-spacing': ['error', 'always'],
    'jsx-quotes': [2, 'prefer-single'],
    'indent': ["error", 2],
    'no-multiple-empty-lines': ["error", {"max":1}],
    'padding-line-between-statements': ["error", { blankLine: "always", prev: "var", next: "return" }],
    "react/self-closing-comp": ["error", {"component": true, "html": true}],
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": false
  }]
  },
}