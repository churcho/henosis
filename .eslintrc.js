module.exports = {
  parser: "babel-eslint",
  plugins: [
    "babel",
    "emotion",
    "filenames",
    "import",
    "jest",
    "jsx-a11y",
    "promise",
    "react-hooks",
    "react",
    "unicorn",
    "graphql"
  ],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    },
    "react": {
      "version": "16.8.4"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  reportUnusedDisableDirectives: true,
  rules: {
    "babel/camelcase": "warn",
    "babel/new-cap": "off", // Already handled
    "babel/no-invalid-this": "error",
    "babel/no-unused-expressions": "error",
    "babel/object-curly-spacing": "error",
    "babel/quotes": "error",
    "babel/semi": ["error", "always"], // Already handled
    "babel/valid-typeof": "error",
    "emotion/import-from-emotion": "error",
    "emotion/jsx-import": "off", // I use babel
    "emotion/no-vanilla": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": "error",
    "filenames/match-exported": "error",
    "filenames/match-regex": "off", // doesn't work for me
    "filenames/no-index": "off", // doesn't work for me
    "implicit-arrow-linebreak": "error",
    "import/default": "error",
    "import/dynamic-import-chunkname": "error",
    "import/export": "error",
    "import/exports-last": "error",
    "import/extensions": "error",
    "import/first": "error",
    "import/group-exports": "off", // Doesn't work for my style
    "import/max-dependencies": "off", // not worth it
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": ["error", {"allowObject": true}],
    "import/no-commonjs": "warn",
    "import/no-cycle": "error",
    "import/no-default-export": "error",
    "import/no-deprecated": "error",
    "import/no-duplicates": "off", // Just frankly a bad rule
    "import/no-dynamic-require": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-internal-modules": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-named-default": "error",
    "import/no-named-export": "error",
    "import/no-namespace": "error",
    "import/no-nodejs-modules": "error",
    "import/no-relative-parent-imports": "off", // doesn't work for me
    "import/no-restricted-paths": "error",
    "import/no-self-import": "error",
    "import/no-unassigned-import": "error",
    "import/no-unresolved": "error",
    "import/no-unused-modules": "error",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/order": "error",
    "import/prefer-default-export": "warn",
    "import/unambiguous": "error",
    "jest/consistent-test-it": "error",
    "jest/expect-expect": "error",
    "jest/lowercase-name": "error",
    "jest/no-alias-methods": "error",
    "jest/no-commented-out-tests": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-expect-resolves": "error",
    "jest/no-export": "error",
    "jest/no-focused-tests": "error",
    "jest/no-hooks": "error",
    "jest/no-identical-title": "error",
    "jest/no-if": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-jest-import": "error",
    "jest/no-large-snapshots": "error",
    "jest/no-mocks-import": "error",
    "jest/no-standalone-expect": "error",
    "jest/no-test-callback": "error",
    "jest/no-test-prefixes": "error",
    "jest/no-test-return-statement": "error",
    "jest/no-truthy-falsy": "error",
    "jest/no-try-expect": "error",
    "jest/prefer-called-with": "error",
    "jest/prefer-expect-assertions": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/prefer-inline-snapshots": "error",
    "jest/prefer-spy-on": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-be-null": "error",
    "jest/prefer-to-be-undefined": "error",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "error",
    "jest/require-top-level-describe": "error",
    "jest/valid-describe": "error",
    "jest/valid-expect-in-promise": "error",
    "jest/valid-expect": "error",
    "jsx-a11y/accessible-emoji": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/control-has-associated-label": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/lang": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
    "jsx-a11y/no-noninteractive-element-interactions": "error",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-onchange": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/boolean-prop-naming": "error",
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error", // We don't use prop types
    "react/destructuring-assignment": "error",
    "react/display-name": "error",
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": "error",
    "react/forbid-elements": "error",
    "react/forbid-foreign-prop-types": "error", // We don't use prop types
    "react/forbid-prop-types": "error", // We don't use prop types
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "error",
    "react/jsx-closing-bracket-location": "off", // This is just busy work
    "react/jsx-closing-tag-location": "off", // This is just busy work
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-newline": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-filename-extension": "off", // We just use .js
    "react/jsx-first-prop-new-line": "off", // This is just busy work
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent-props": "off", // This is just busy work
    "react/jsx-indent": "off", // This is just busy work
    "react/jsx-key": "error",
    "react/jsx-max-depth": "off", // This is just busy work
    "react/jsx-max-props-per-line": "off", // This is just busy work
    "react/jsx-no-bind": ["warn", {"allowArrowFunctions": true}],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off", // This is annoying as heck
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "off", // Really fucking stupid
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-props-no-spreading": "warn",
    "react/jsx-sort-default-props": "off", // This is just busy work
    "react/jsx-sort-props": "off", // This is just busy work
    "react/jsx-tag-spacing": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off", // This is just busy work
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "warn",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-danger": "warn",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off", // We use setState()
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "warn",
    "react/no-unescaped-entities": "warn",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "off", // Doesn't understand recompose
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": "off", // We use recompose
    "react/prefer-read-only-props": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off", // Doesn't understand recompose
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "off", // Doesn't work with recompose
    "react/require-optimization": "error", // We use recompose
    "react/require-render-return": "error", // We use recompose
    "react/self-closing-comp": "error",
    "react/sort-comp": "off", // This is just busy work
    "react/sort-prop-types": "off", // This is just busy work
    "react/state-in-constructor": "error",
    "react/static-property-placement": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "promise/always-return": "error",
    "promise/avoid-new": "error",
    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "error",
    "promise/no-native": "off", // We have babel
    "promise/no-nesting": "error",
    "promise/no-new-statics": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-return-in-finally": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/prefer-await-to-callbacks": "off", // Not convinced of await/async
    "promise/prefer-await-to-then": "off", // Not convinced of await/async
    "promise/valid-params": "error",
    "unicorn/catch-error-name": "error",
    "unicorn/consistent-function-scoping": "error",
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/expiring-todo-comments": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/filename-case": "error",
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-fn-reference-in-iterator": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-keyword-prefix": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dataset": "error",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-exponentiation-operator": "error",
    "unicorn/prefer-flat-map": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-spread": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/prevent-abbreviations": "error",
    "unicorn/regex-shorthand": "error",
    "unicorn/throw-new-error": "error",
    "accessor-pairs": "error",
    "array-bracket-newline": "off",
    "array-bracket-spacing": "error",
    "array-callback-return": "error",
    "array-element-newline": "off",
    "arrow-body-style": "off", // Weird style
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "callback-return": "error",
    "camelcase": "off", // handled by babel
    "capitalized-comments": "off", // What a stupid rule
    "class-methods-use-this": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "complexity": "error",
    "computed-property-spacing": "error",
    "consistent-return": "error",
    "consistent-this": "error",
    "constructor-super": "error",
    "curly": "error",
    "default-case": "error",
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "for-direction": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "error",
    "func-style": ["error", "expression", {"allowArrowFunctions": true}],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "generator-star-spacing": "error",
    "getter-return": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": "error",
    "id-length": "error",
    "id-match": "error",
    "indent": ["error", 2, {"SwitchCase": 1}],
    "init-declarations": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "lines-between-class-members": "error",
    "max-classes-per-file": "error",
    "max-depth": "error",
    "max-len": "off", // Causes more work than anything else
    "max-lines-per-function": "off", // Still not terribly useful
    "max-lines": "off", // Still not terribly useful
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements-per-line": "error",
    "max-statements": "off", // Still not terribly useful
    "multiline-comment-style": ["error", "separate-lines"],
    "multiline-ternary": ["error", "never"],
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "off", // Doesn't work with pipes
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": "warn",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off", // This rule doesn't understand my style
    "no-else-return": "error",
    "no-empty-character-class": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-empty": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "error",
    "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-import-assign": "error",
    "no-inline-comments": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off", // Just not worth the hassel
    "no-misleading-character-class": "error",
    "no-mixed-operators": "error",
    "no-mixed-requires": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-obj-calls": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "error",
    "no-process-env": "off", // What a stupid rule
    "no-process-exit": "off", // What a stupid rule
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-modules": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-sparse-arrays": "error",
    "no-sync": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off", // Not sure this is a good rule
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-undefined": "off", // We're OK with null not existing, in favor of undefined
    "no-underscore-dangle": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": "off",
    "object-curly-spacing": "error",
    "object-property-newline": "off",
    "object-shorthand": "error",
    "one-var-declaration-per-line": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "operator-linebreak": "off", // Doesn't work with pipes
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "error",
    "padding-line-between-statements": ["error", {"blankLine": "always", "prev": "*", "next": "return"}, {"blankLine": "never", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}, {"blankLine": "always", "prev": "directive", "next": "*" }, {"blankLine": "any", "prev": "directive", "next": "directive"}],
    "prefer-arrow-callback": "off", // functions are fine too
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed", {"keywords": true}],
    "quotes": "error",
    "radix": "error",
    "require-atomic-updates": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "require-yield": "error",
    "rest-spread-spacing": "error",
    "semi-spacing": "error",
    "semi-style": "error",
    "semi": "off", // handled by babel/semi
    "sort-imports": "off", // Not worth the hassle
    "sort-keys": "off",
    "sort-vars": "off", // I don't like making busy work for myself
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "strict": ["error", "never"],
    "switch-colon-spacing": "error",
    "symbol-description": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "unicode-bom": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
    "yoda": "error",
    "graphql/capitalized-type-name": "error",
    "graphql/named-operations": "error",
    "graphql/no-deprecated-fields": "error",
    // "graphql/required-fields": "error", // A strange rule, might be useful in the future
    "graphql/template-strings": "error",
    "grouped-accessor-pairs": "error",
    "jest/require-to-throw-message": "error",
    "jest/valid-title": "error",
    "no-constructor-return": "error",
    "no-dupe-else-if": "error",
    "no-setter-return": "error",
    "prefer-exponentiation-operator": "error",
    "react/function-component-definition": "error",
    "react/jsx-no-script-url": "error",
    "react/no-adjacent-inline-elements": "error",
    "unicorn/better-regex": "error",
    "unicorn/no-null": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-replace-all": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-trim-start-end": "error",
    "unicorn/string-content": "error"
  }
};
