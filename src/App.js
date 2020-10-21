import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import ListTask from "./Components/ListTask/ListTask";

function App() {
  //All tasks
  const toDos = useSelector((state) => state);
  //Tasks with isDone = true
  const toDosDone = useSelector((state) => state.filter((todo) => todo.isDone));
  //Tasks with isDone = false
  const toDosNotDone = useSelector((state) =>
    state.filter((todo) => !todo.isDone)
  );

  const dispatch = useDispatch();

  const [radioBtn, setRadioBtn] = useState(""); // Display toDos, toDosDone OR toDosNotDone

  return (
    <div className="App">
      <ListTask toDos={toDos} dispatch={dispatch} />

      <div>
        <h1>FILTER TASKS</h1>
        <div className="radio-buttons">
          {/* Radio buttons */}
          <input
            className="radio-btn"
            name="radio-collection"
            id="radio-1"
            type="radio"
            onClick={() => setRadioBtn("radio-1")}
          />
          <label className="radio-label" htmlFor="radio-1">
            <span>All</span>
          </label>
          <input
            className="radio-btn"
            name="radio-collection"
            id="radio-2"
            type="radio"
            onClick={() => setRadioBtn("radio-2")}
          />
          <label className="radio-label" htmlFor="radio-2">
            <span>Active</span>
          </label>
          <input
            className="radio-btn"
            name="radio-collection"
            id="radio-3"
            type="radio"
            onClick={() => setRadioBtn("radio-3")}
          />
          <label className="radio-label" htmlFor="radio-3">
            <span>Complited</span>
          </label>
          {/* End radio buttons */}
        </div>
        {radioBtn === "" ? <div className="filtre"/> : null}
        {radioBtn === "radio-1" ? (
          <div className="filtre">
            <h2>All tasks</h2>
            {toDos.map((todo) => (
              <p key={todo.id}>{todo.description}</p>
            ))}
          </div>
        ) : null}
        {radioBtn === "radio-2" ? (
          <div className="filtre">
            <h2> Unfinished tasks </h2>
            {toDosNotDone.map((todo) => (
              <p key={todo.id}>{todo.description}</p>
            ))}
          </div>
        ) : null}
        {radioBtn === "radio-3" ? (
          <div className="filtre">
            <h2> Accomplished tasks</h2>
            {toDosDone.map((todo) => (
              <p key={todo.id}>{todo.description}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
