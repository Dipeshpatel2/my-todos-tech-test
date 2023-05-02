import React from "react";
import "./ToDoForm.scss";

const ToDoForm = ({handleAddToDo}) => {
  return (
    <div className="ToDoList-container">
      <input type="text" placeholder="Enter Todo in here..." />
      <button className="button" onClick={handleAddToDo}>
        Add To Do
      </button>
    </div>
  );
};

export default ToDoForm;
