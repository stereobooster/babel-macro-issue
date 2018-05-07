import React from "react";

import coverImage from "./andre-spieker-238-unsplash.jpg";
import lqip from "lqip.macro";
const coverLqip = lqip("./andre-spieker-238-unsplash.jpg");

const App = () => (
  <div
    style={{
      backgroundImage: `url(${coverLqip}`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width:"100vw",
      height: "100vh"
    }}
  >
    <img src={coverImage} alt="" width="100%" height="100%" />
  </div>
);

export default App;
