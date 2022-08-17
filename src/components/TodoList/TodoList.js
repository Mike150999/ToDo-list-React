
import React, { useState, useEffect } from "react";
import { TodoItems } from "../TodoItems/TodoItems";
import { TodoForm } from "../TodoForm/TodoForm";
import './todoList.scss';



const getLocalTodos = () => {
let list = localStorage.getItem('lists');
if(list) {
	return JSON.parse(list);
} else {
	return [];
}
}


export const TodoList = () => {
	
	const [todos, setTodos] = useState(getLocalTodos());


	const addTodo = todo => {
		const newTodos = [todo, ...todos];
		setTodos(newTodos)
	}

	const updateTodo = (todoId, newValue) => {
		setTodos(u => u.map(item => (item.id === todoId ? newValue : item)));
	}


	const removeTodo = id => {
		const removeArr = [...todos].filter(item => item.id !==id);
		setTodos(removeArr);
	};

	const completeTodo = (id) => {
		let newTask = todos.map(todo=> {
			if(todo.id === id) {
				return({...todo, status: !todo.status })
			}
			return todo;
		})
		setTodos(newTask);
	}

	useEffect(() => {
		localStorage.setItem('lists', JSON.stringify(todos))
	}, [todos])
	


	return(
		<div>
			<TodoForm onSubmit={addTodo}/>
			{ todos.length ? '' : <Create/>}
				<TodoItems todos={todos} completeTodo={completeTodo}
			removeTodo={removeTodo} updateTodo={updateTodo}/>
		</div>
	)

}

const Create = () => {
	return(
		<p id="blink" >Create a new Tasks...</p>
	)
}


