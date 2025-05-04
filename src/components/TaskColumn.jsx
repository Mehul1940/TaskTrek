import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status , handleDeleteTask }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_header">
        <img className="task_column_icon" src={icon} alt={title} />
        {title}
      </h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task, index) => (
          <TaskCard key={index} title={task.task} tags={task.tags} handleDeleteTask={handleDeleteTask} index={index} />
        ))}
    </section>
  );
};

export default TaskColumn;
