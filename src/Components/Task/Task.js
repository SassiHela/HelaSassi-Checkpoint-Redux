import React from "react";

const Task = ({ toDo, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ textDecoration: toDo.isDone ? "line-through" : "none" }}
    >
      {toDo.description}
    </div>
  );
};
export default Task;
