import React from "react";

import toReactComponent from "svgr.macro";
const Logo = toReactComponent("./logo.svg");

const App = () => <Logo />;

export default App;
