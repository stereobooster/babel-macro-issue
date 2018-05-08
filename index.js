const babelJest = require("babel-jest");
const transformer = babelJest.createTransformer({
  presets: [require.resolve("babel-preset-react-app")],
  // @remove-on-eject-begin
  babelrc: false
  // @remove-on-eject-end
});

const source = `
import importAll from "import-all.macro";

const all = importAll("./components/*.js");

all.then(all => console.log(all));
`;

const res = transformer.process(
  source,
  "test.js",
  {
    moduleFileExtensions: [
      "web.js",
      "mjs",
      "js",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ],
    rootDir: __dirname
  },
  {
    instrument: true
  }
);

console.log(res);
