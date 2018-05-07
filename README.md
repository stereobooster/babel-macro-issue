# Babel Macro Issue

```
yarn

yarn test    # Ok

yarn test:ci # Ok

yarn test:coverage
yarn run v1.5.1
$ react-scripts test --env=jsdom --coverage
 FAIL  src/App.test.js
  ● Test suite failed to run

    TypeError: svgr.macro: referencePath.parentPath.get is not a function Learn more: https://www.npmjs.com/package/svgr.macro

      at getArguments (node_modules/svgr.macro/lib/utils/getArguments.js:15:76)
      at toReactComponent.forEach.referencePath (node_modules/svgr.macro/lib/macro.js:48:58)
          at Array.forEach (<anonymous>)
      at svgrMacro (node_modules/svgr.macro/lib/macro.js:47:20)
      at macroWrapper (node_modules/babel-plugin-macros/dist/index.js:54:12)
      at applyMacros (node_modules/babel-preset-react-app/node_modules/babel-plugin-macros/dist/index.js:164:5)
      at PluginPass.ImportDeclaration (node_modules/babel-preset-react-app/node_modules/babel-plugin-macros/dist/index.js:82:9)
      at newFn (node_modules/@babel/core/node_modules/@babel/traverse/lib/visitors.js:243:21)
      at NodePath._call (node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:65:18)
      at NodePath.call (node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:40:17)
```