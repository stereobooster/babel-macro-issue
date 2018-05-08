const core = require("babel-core");

const filename = "test.js";
const src = `
import importAll from "import-all.macro";

const all = importAll("./components/*.js");

all.then(all => console.log(all));
`;

const options = {
  compact: false,
  presets: [require.resolve("babel-preset-react-app")],
  sourceMaps: "both",
  plugins: [
    [
      require("babel-plugin-istanbul").default,
      {
        cwd: __dirname,
        exclude: []
      }
    ]
  ]
};

const transformResult = core.transform(src, { filename, ...options });
