import React, { useEffect, Fragment } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //INIT Materialize
    M.AutoInit();
  });
  return <div className='App'>My App</div>;
};
export default App;
