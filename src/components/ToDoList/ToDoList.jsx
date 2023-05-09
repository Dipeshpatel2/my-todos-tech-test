import React from "react";
import "./ToDoList.scss";

const ToDoList = ({
  listItems,
  completedItems,
  handleDeleteItem,
  handleToggleComplete,
}) => {
  return (
    <div className="todo-list">
      <ul className="list__container">
        {listItems.map((item, index) => (
          <li
            key={index}
            className={completedItems.includes(item) && "completed"}
          >
            {item}
            <br />
            <button
              className="list__button"
              onClick={() => handleToggleComplete(item)}
            >
              Completed Item
            </button>
            <button
              className="list__button"
              onClick={() => handleDeleteItem(item)}
            >
              Delete Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;