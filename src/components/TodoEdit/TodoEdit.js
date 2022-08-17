import React, {useState} from 'react';
import './todoEdit.scss';

export const TodoEdit= ({onSubmit, cancelUpdate, value}) => {

const [input, setInput] = useState(value);

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
		<div className="update">
			<form onSubmit={handleSubmit}>
				<input onChange={onChange}
				placeholder='Update todo'
	 			value={input} 
	 			className='update__input'
	 			 type="text"
				  />
					<button type='submit' className='update__button'>Update</button>
					<button onClick={cancelUpdate} type='submit' className='update__cancel'>Cancel</button>
			</form>	
			
		</div>
	)
}