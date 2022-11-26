module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@stencil/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // I am a truthy/falsy enjoyer. Sue me, Stencil.
        "@stencil/strict-boolean-conditions": "off",
        // This rule seems to be broken currently.
        "@stencil/decorators-context": "off",
        // This rule also seems to be broken.
        "@stencil/no-unused-watch": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "varsIgnorePattern": "^_$"
        }]
    },
}
