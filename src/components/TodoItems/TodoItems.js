import './todoItems.scss';
import itemdelete from '../../assets/itemdelete.png';
import itemedit from '../../assets/itemedit.png';
// import done from '../../assets/done.png';
import React, { useState} from 'react';
import { TodoEdit } from '../TodoEdit/TodoEdit';



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
		return <TodoEdit value={edit.value} cancelUpdate={cancelUpdate} onSubmit={submitUpdate}/>
	}

	return todos.map((todo) => (
		<div key={todo.id} className={todo.status ? 'item-active' : 'item'}>
		<div className='item__complete'>

			<input className='item__done'
			 onClick={() => completeTodo(todo.id)} 
			 checked={todo.status ? todo.status : null}
			 type="checkbox" />
			<div className={todo.status ? 'item__text-active' : 'item__text'}>
			{todo.text}
		</div>
		</div>
		<div className="item__btn">
		 <button onClick={() => removeTodo(todo.id)} 
		 type='button'
		 className='item__btn-delete item__button'> 
		 <img className='item__img' src={itemdelete} alt="" /> </button>
		{todo.status ? null : (
			<button  onClick={() => setEdit({id: todo.id, value: todo.text})}
			  type='button' 
			  className='item__btn-edit item__button'> 
			  <img className='item__img' src={itemedit} alt="" /> </button>
		)}
		 
		</div>
	</div>
	))

}


