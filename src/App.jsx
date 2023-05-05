import React, { useState } from 'react';
import './App.scss';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';

const App = () => {
  //initial variable todo, set to an empty string as default
  const [todo, setTodo] = useState('');
  //an empty array that will hold the listed items
  const [listItems, setListItems] = useState([]);

  const handleAddToDo = () => { 
    const newList = [...listItems, todo];
    setListItems(newList);
    setTodo('');
  };

  const handleDeleteItem = (item) => {
    const filteredList = listItems.filter((listItem) => listItem !== item);
    setListItems(filteredList);
  };

  return (
    <div className='App'>
      <h1 className='App__heading'>My Todos</h1>
      <ToDoForm
        todo={todo}
        setTodo={setTodo}
        handleAddToDo={handleAddToDo}
      />
      <ToDoList
        listItems={listItems}
        handleDeleteItem ={handleDeleteItem}
      />
    </div>
  );
};

export default App;