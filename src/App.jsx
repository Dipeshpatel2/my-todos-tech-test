import React, { useState } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';

const App = () => {
  const [todo, setTodo] = useState('');
  const [listItems, setListItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const handleAddToDo = () => {
    const newList = [...listItems, todo];
    setListItems(newList);
    setTodo('');
  };

  const handleDeleteItem = (item) => {
    const filteredList = listItems.filter((listItem) => listItem !== item);
    setListItems(filteredList);
    const filteredCompletedItems = completedItems.filter(
      (completedItem) => completedItem !== item
    );
    setCompletedItems(filteredCompletedItems);
  };

  const handleToggleComplete = (item) => {
    if (completedItems.includes(item)) {
      const filteredCompletedItems = completedItems.filter(
        (completedItem) => completedItem !== item
      );
      setCompletedItems(filteredCompletedItems);
    } else {
      setCompletedItems([...completedItems, item]);
    }
  };

  return (
    <div className='App'>
      <h1 className='App__heading'>My Todos</h1>
      <ToDoForm todo={todo} setTodo={setTodo} handleAddToDo={handleAddToDo} />
      <ToDoList
        listItems={listItems}
        completedItems={completedItems}
        handleDeleteItem={handleDeleteItem}
        handleToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default App;
