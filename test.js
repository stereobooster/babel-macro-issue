import importAll from "import-all.macro";

const all = importAll("./components/*.js");

all.then(all => console.log(all));