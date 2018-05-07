# Babel Macor Issue

```
yarn

yarn test    # Ok

yarn test:ci # Ok

yarn test:coverage
yarn run v1.5.1
$ CI=true react-scripts test --env=jsdom --coverage
FAIL src/App.test.js
  ● Test suite failed to run

    lqip.macro: This is not supported: ``. Please see the lqip.macro documentation Learn more: https://www.npmjs.com/package/lqip.macro

      at node_modules/lqip.macro/dist/lqip.macro.js:1:289
          at Array.map (<anonymous>)
      at node_modules/lqip.macro/dist/lqip.macro.js:1:227
      at macroWrapper (node_modules/babel-plugin-macros/dist/index.js:54:12)
      at applyMacros (node_modules/babel-preset-react-app/node_modules/babel-plugin-macros/dist/index.js:164:5)
      at PluginPass.ImportDeclaration (node_modules/babel-preset-react-app/node_modules/babel-plugin-macros/dist/index.js:82:9)
      at newFn (node_modules/@babel/core/node_modules/@babel/traverse/lib/visitors.js:243:21)
      at NodePath._call (node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:65:18)
      at NodePath.call (node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:40:17)
      at NodePath.visit (node_modules/@babel/core/node_modules/@babel/traverse/lib/path/context.js:100:12)
```


```js
if (referencePath.parentPath.type === "CallExpression") {
  requirelqip({ referencePath, state, babel });
} else {
  throw new Error(
    `This is not supported: \`${referencePath
      .findParent(babel.types.isExpression)
      .getSource()}\`. Please see the lqip.macro documentation`,
  );
}
```

Without `--coverage` - `referencePath.parentPath.type === "CallExpression"`

With `--coverage` - `referencePath.parentPath.type === "SequenceExpression"`
