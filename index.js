const filename = "test.js";
const src = `
import importAll from "import-all.macro";

const all = importAll("./components/*.js");

all.then(all => console.log(all));
`;

const options = {
  compact: false,
  presets: [
    [
      // ES features necessary for user's Node version
      require("@babel/preset-env").default,
      {
        targets: {
          node: "6.12"
        }
      }
    ]
  ],
  sourceMaps: "both",
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

const core = require("babel-core");

const transformResult = core.transform(src, { filename, ...options });
