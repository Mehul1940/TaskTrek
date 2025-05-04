import React, { useState , useEffect, use } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/direct-hit.png";
import DoingIcon from "./assets/fire.png";
import DoneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);


const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  , [tasks]);

  const handleDeleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          icon={TodoIcon}
          title="Todo"
          tasks={tasks}
          status="Todo"
          handleDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          icon={DoingIcon}
          title="Doing"
          tasks={tasks}
          status="Doing"
          handleDeleteTask={handleDeleteTask}
        />
        <TaskColumn
          icon={DoneIcon}
          title="Done"
          tasks={tasks}
          status="Done"
          handleDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
};

export default App;
