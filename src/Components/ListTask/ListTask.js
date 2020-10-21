import React from "react";
import "./ListTask.css";
import Task from "../Task/Task";
import { toggleTodo } from "../Actions/Actions";
import AddTask from "../AddTask/AddTask";
const ListTask = ({ toDos, dispatch }) => {
  const [description, setDescription] = React.useState("");
  const [id, setId] = React.useState(0);

  return (
    <div className="todo-list">
      <h1>TO-DO LIST</h1>
      {/* Input field */}
      <AddTask
        dispatch={dispatch}
        id={id}
        setId={setId}
        description={description}
        setDescription={setDescription}
      />
      <div className="tasks">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <Task
              key={todo.id}
              toDo={todo}
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
            {!todo.isDone ? (
              <button
                className="btnEdit"
                onClick={() => {
                  setId(todo.id);
                  setDescription(todo.description);
                }}
              >
                Edit
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <span className="ps"> PS : Click on the task to strike it out</span>
    </div>
  );
};
export default ListTask;
