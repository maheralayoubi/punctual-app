import React from "react";
import Drag from "./components/Drag";
import Main from "./components/Main";
import Calendar from "./components/Calendar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/main" component={Main} />
        <Route path="/drag" component={Drag} />
        <Route path="/calander" component={Calendar} />
      </div>
    </Router>
  );
}

export default App;
