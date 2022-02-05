import React from "react";
import Task from "./components/Tasks/CreateTask";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/tasks" element={<Task />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
