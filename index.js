const filename = "test.js";
const src = `import importAll from "import-all.macro";
const all = importAll("./components/*.js");`;
const options = {
  presets: [
    [
      require("@babel/preset-env").default,
      {
        targets: { node: "6.12" }
      }
    ]
  ],
  plugins: [
    require("babel-plugin-macros"),
    [
      require("babel-plugin-istanbul").default,
      {
        cwd: __dirname,
        exclude: []
      }
    ]
  ]
};
require("babel-core").transform(src, { filename, ...options });
