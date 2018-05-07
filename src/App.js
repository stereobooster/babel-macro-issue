import React from "react";

import importAll from "import-all.macro";

const all = importAll("./components/*.js");

all.then(all => console.log(all));

const App = () => <div />;

export default App;
