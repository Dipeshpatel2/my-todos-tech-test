import React from "react";
import "./ToDoList.scss";

const ToDoList = ({ listItems }) => {
  return (
    <div>
      <ul className="list__container">
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
            <button className="list__button">
              Delete Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
