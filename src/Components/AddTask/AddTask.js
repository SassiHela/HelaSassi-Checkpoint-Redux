import React from "react";
import "./AddTask.css";
import { addTodo, edtiTodo } from "../Actions/Actions";

const AddTask = ({ dispatch, id, setId, description, setDescription }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return; // empty input do nothing
    if (id !== 0) {
      //Edit Task
      dispatch(edtiTodo(id, description));
      setId(0);
    } else {
      //Add Task
      dispatch(addTodo(description));
    }
    setDescription("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="What you want to do"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </form>
  );
};
export default AddTask;
