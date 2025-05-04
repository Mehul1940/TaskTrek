import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [TaskData, setTaskData] = useState({
    task: "",
    status: "Todo",
    tags: [],
  });

  const checkTag = (tag) => {
    if (TaskData.tags.some((item) => item === tag)) {
      return true;
    } else {
      return false;
    }
  };
  const selectTag = (tag) => {
    if (TaskData.tags.some((item) => item === tag)) {
      const filterTags = TaskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => {
      return [...prev, TaskData];
    });
    setTaskData({
      task: "",
      status: "Todo",
      tags: [],
    });
  };
  return (
    <div>
      <h1 className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={TaskData.task}
            className="task_input"
            placeholder="Enter Your Task"
            onChange={handleChange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="Html"
                selectTag={selectTag}
                selected={checkTag("Html")}
              />

              <Tag
                tagName="Css"
                selectTag={selectTag}
                selected={checkTag("Css")}
              />
              <Tag
                tagName="Js"
                selectTag={selectTag}
                selected={checkTag("Js")}
              />
              <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>
            <div>
              <select
                className="task_status"
                name="status"
                value={TaskData.status}
                onChange={handleChange}
              >
                <option value="Todo">ToDo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>

              <button type="submit" className="task_submit">
                {" "}
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </h1>
    </div>
  );
};

export default TaskForm;
