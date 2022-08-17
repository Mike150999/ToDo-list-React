import './todoForm.scss';
import React, {useState} from 'react';



export const TodoForm = ({onSubmit}) => {

const [input, setInput] = useState('');

const onChange = e => {
	setInput(e.target.value);
}


const handleSubmit = e => {
	e.preventDefault();
	setInput('');

	onSubmit({
		id: Math.floor(Math.random() * 10000),
		text: input
	})
}


	return(
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input onChange={onChange}
				placeholder='Add a todo'
	 			value={input} 
	 			className='form__input'
	 			 type="text"
				  />
					<button type='submit' className='form__button'>Add todo</button>
			</form>	
		</div>
	)
}