import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import DeleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags , handleDeleteTask , index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDeleteTask(index)}>
          <img src={DeleteIcon} className="delete_icon" alt="delete_icon" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
