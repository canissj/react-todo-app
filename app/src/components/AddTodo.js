import React, { useState } from "react"
import '../css/addtodo.css'

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");
    const [showError, setShowError] = useState(false)

    function handleOnClick() {
        if (todo !== "") {
            props.onAddTodo(todo)
            return;
        }
        setShowError(true);
    }

    function handleOnChange(e) {
        setTodo(e.target.value);
        setShowError(false);
    }

    return <div className="add-todo-container">
        <img src="https://www.flaticon.com/premium-icon/icons/svg/3416/3416075.svg"
            className="add-todo-icon"
            alt="add todo"
            onClick={handleOnClick} />
        <input type="text" 
            value={todo}
            onChange={handleOnChange}
            placeholder="Write down your todo..."
            className="add-todo-input" />
        { showError && <div>Ups, todo should not be empty !</div> }   
    </div>
}

export default AddTodo;