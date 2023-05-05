import React from "react";
import "./ToDoList.scss";

const ToDoList = ({ listItems, handleDeleteItem }) => {
  return (
    <div>
      <ul className="list__container">
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <br/>
            <button className="list__button" onClick={() => handleDeleteItem(item)}>
              Delete Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
