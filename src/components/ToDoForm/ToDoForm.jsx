import React from 'react';
import './ToDoForm.scss';

const ToDoForm = ({ todo, setTodo, handleAddToDo }) => {
  return (
    <div className="form__container">
      <input
        type="text"
        placeholder="Enter Todo in here..."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button className="form__button" onClick={handleAddToDo}>
        Add To Do
      </button>
    </div>
  );
};

export default ToDoForm;