import React, { useState } from 'react'
import './App.scss';
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoForm from './components/ToDoForm/ToDoForm';

const App = () => {
//initial variable todo, set to an empty string as default
const [todo, setTodo] = useState("");
//an emptry array that will hold the listed itmes
const [listItems, setListItems] = useState([]);

const handleAddToDo = () =>{

}

  return (
    <div>
      <h1>My Todos</h1>
      <ToDoForm handleAddToDo={handleAddToDo}/>
      <ToDoList/>
    </div>
    
  )
}

export default App
