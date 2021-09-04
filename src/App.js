import React from "react";
import Task from "./components/Tasks/CreateTask";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/tasks" component={Task} />
      </div>
    </Router>
  );
}

export default App;
