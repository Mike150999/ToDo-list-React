import './todoItems.scss';
import React, { useState} from 'react';
import { TodoEdit } from '../TodoEdit/TodoEdit';
import { TodoItem } from '../TodoItem/TodoItem';



export const TodoItems = ({todos,  removeTodo, updateTodo, completeTodo}) => {
	const [edit, setEdit] = useState({});

	const submitUpdate = value => {
		updateTodo(edit.id, value);
		setEdit({});
	}

	const cancelUpdate = () => {
		setEdit({});
	}



	if (edit.id){
		return <TodoEdit value={edit.value} cancelUpdate={cancelUpdate} onSubmit={submitUpdate} />
	}

	return todos.map((todo) => (
		<TodoItem key={todo.id} 
		id={todo.id} 
		status={todo.status} 
		text={todo.text} 
		removeTodo={removeTodo} 
		completeTodo={completeTodo} 
		setEdit={setEdit} />
	))

}


