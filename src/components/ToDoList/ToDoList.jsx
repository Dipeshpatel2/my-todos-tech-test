import React from 'react';
import './ToDoList.scss';

const ToDoList = ({ listItems }) => {
  return (
    <div>
      <ul className="list__container">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;