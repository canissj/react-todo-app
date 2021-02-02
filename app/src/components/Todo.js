import React from 'react'
import './../css/todo.css'

const Todo = (props) => {

    function handleTitleChange(event) {
        props.onTitleChange(event.target.value);
    }

    function handleOnClick(e) {
        e.preventDefault();
        // open details
    }

    return (
        <div className='todo-container todo-pointer' onClick={props.onDetailsClick}>
            <input type="checkbox" id="scales" name="scales" className='todo-checkbox' checked={props.todo.completed} onChange={props.onComplete}/>
            <input type="text" className='todo-title todo-pointer' value={props.todo.title} onChange={handleTitleChange} onMouseDown={handleOnClick}/>
            <div className='todo-actions'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/598/598234.svg' alt='edit' className='todo-img' onClick={props.onEdit}/>
                <img src='https://www.flaticon.com/svg/static/icons/svg/447/447047.svg' alt='delete' className='todo-img' onClick={props.onDelete}/>
            </div>
        </div>
    )
}

export default Todo;