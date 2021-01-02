import React, { useState } from "react"

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    function handleOnChange(e) {
        const val = e.target.value;
        setTodo(val);
        setIsEditing(val !== "");
    }

    function clear() {
        setTodo("");
        setIsEditing(false);
    }

    function handleOnAdd() {
        props.onAddTodo(todo);
        clear();
    }

    function onKeyDown(e) {
        if (e.key === "Enter" && todo !== "") {
            handleOnAdd()
        }
    }

    return <div className={`todo-container ${isEditing ? 'todo-add-editing' : 'todo-add-empty'}`}>
        <input type="checkbox" id="scales" name="scales" className='todo-checkbox-disabled'/>
        <input type="text" className='todo-title' value={todo} onChange={handleOnChange} placeholder='Add your todo...' onKeyDown={onKeyDown} />
        <div className='todo-actions'>
          <img src='https://www.flaticon.com/svg/static/icons/svg/447/447147.svg' alt='add-todo' className='todo-img' onClick={handleOnAdd} />
          <img src='https://www.flaticon.com/svg/static/icons/svg/447/447047.svg' alt='delete' className='todo-img' onClick={clear} />
        </div>
    </div>      
}

export default AddTodo;