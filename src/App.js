import React from "react";
import Drag from "./components/Drag";
import Main from "./components/Main";
import Calendar from "./components/Calendar";
import Task from "./components/Tasks/CreateTask";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/main" component={Main} />
        <Route path="/drag" component={Drag} />
        <Route path="/calander" component={Calendar} />
        <Route path="/tasks" component={Task} />
      </div>
    </Router>
  );
}

export default App;
