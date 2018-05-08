```
$ NODE_ENV=test node index.js
node_modules/babel-core/lib/transformation/file/options/option-manager.js:328
        throw e;
        ^

Error: Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel. (While processing preset: "node_modules/babel-preset-react-app/index.js")
    at throwVersionError (node_modules/@babel/helper-plugin-utils/lib/index.js:62:11)
    at Object.assertVersion (node_modules/@babel/helper-plugin-utils/lib/index.js:11:11)
    at node_modules/@babel/plugin-transform-destructuring/lib/index.js:11:7
    at node_modules/@babel/helper-plugin-utils/lib/index.js:16:12
    at Function.memoisePluginContainer (node_modules/babel-core/lib/transformation/file/options/option-manager.js:113:13)
    at Function.normalisePlugin (node_modules/babel-core/lib/transformation/file/options/option-manager.js:146:32)
    at node_modules/babel-core/lib/transformation/file/options/option-manager.js:184:30
    at Array.map (<anonymous>)
    at Function.normalisePlugins (node_modules/babel-core/lib/transformation/file/options/option-manager.js:158:20)
    at OptionManager.mergeOptions (node_modules/babel-core/lib/transformation/file/options/option-manager.js:234:36)
    at node_modules/babel-core/lib/transformation/file/options/option-manager.js:265:14
    at node_modules/babel-core/lib/transformation/file/options/option-manager.js:323:22
    at Array.map (<anonymous>)
    at OptionManager.resolvePresets (node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at Object.process (node_modules/babel-jest/build/index.js:180:79)
    at Object.<anonymous> (index.js:17:25)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
```