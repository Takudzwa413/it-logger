import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/layout/SearchBar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    //INIT Materialize
    M.AutoInit();
  });
  return;
  <Fragment>
    <SearchBar />
  </Fragment>;
};
export default App;
