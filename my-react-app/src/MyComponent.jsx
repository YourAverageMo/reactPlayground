import React, { useState } from "react";

function MyComponent() {
  const [todoList, setList] = useState([
    "eat breakfast",
    "take a shower",
    "walk the dog",
    "go to work",
  ]);

  let newListItem = "";

  function addTask() {
    setList((l) => [...l, newListItem]);
  }

  function handleListChange(event) {
    newListItem = event.target.value;
  }

  function deleteTask(index) {
    setList((l) => l.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...todoList];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setList(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < todoList.length - 1) {
      const updatedTasks = [...todoList];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setList(updatedTasks);
    }
  }

  return (
    <>
      <div className="header-container">
        <h1>To-Do-List</h1>

        <input
          type="text"
          placeholder="Enter a task..."
          onChange={handleListChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="list-container">
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>
              <span className="list-item">{todoList[index]}</span>
              <span className="list-buttons">
                <button className="delete" onClick={() => deleteTask(index)}>
                  DELETE
                </button>
                <button className="upVote" onClick={() => moveTaskUp(index)}>
                  ☝🏽
                </button>
                <button
                  className="downVote"
                  onClick={() => moveTaskDown(index)}
                >
                  👇🏽
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyComponent;
