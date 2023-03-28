import React, { Component } from "react";
import classes from "./hoc/Layout/Layout.module.css";

import SignDoc from "./containers/main/SignDoc";

function App() {
  return (
    <div className={classes.Layout}>
      <main>
        <SignDoc />
      </main>
    </div>
  );
}
export default App;
