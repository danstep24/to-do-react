import React from "react";

import Header from "./components/Header";
import Add from "./containers/Add";
import TaskList from "./containers/TaskList";

const App = () => (
  <div>
    <Header>To Do List</Header>
    <Add />
    <TaskList />
  </div>
)
export default App;
