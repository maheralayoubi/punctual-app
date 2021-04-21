import React, { useState } from "react";
import Drag from "./components/Drag";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/main" component={Main} />
        <Route path="/drag" component={Drag} />
      </div>
    </Router>
  );
}

export default App;
