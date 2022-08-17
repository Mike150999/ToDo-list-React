import './todoitem.scss';
import itemdelete from '../../assets/itemdelete.png';
import itemedit from '../../assets/itemedit.png';


export const TodoItem = ({completeTodo, removeTodo,  setEdit, id, text, status}) => {

	return (
		<div key={id} className={status ? 'item-active' : 'item'}>
			<div className='item__complete'>
				<input className='item__done'
				 onClick={() => completeTodo(id)} 
			 	defaultChecked={status ? status : null}
			 	type="checkbox" />
				<div className={status ? 'item__text-active' : 'item__text'}>
					{text}
				</div>
			</div>
			<div className="item__btn">
				 <button onClick={() => removeTodo(id)} 
				 type='button'
			 	className='item__btn-delete item__button'> 
			 	<img className='item__img' src={itemdelete} alt="" /> </button>
				{status ? null : (
				<button  onClick={() => setEdit({id: id, value: text})}
				  type='button' 
				  className='item__btn-edit item__button'> 
				  <img className='item__img' src={itemedit} alt="" /> </button>
				)}

			</div>
		</div>
	)

}
