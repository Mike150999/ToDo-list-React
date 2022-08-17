import './App.css';
import {TodoList} from '../TodoList/TodoList';
import React from 'react';




function App() {


  return (
    <div className="app">
		<h1 className='app__title'>What`s the Plan for Today?</h1>
		<TodoList />
    </div>
  );
}

export default App;
