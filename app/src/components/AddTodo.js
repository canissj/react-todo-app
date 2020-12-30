import React, { useState } from "react"
import '../css/addtodo.css'

const AddTodo = (props) => {
    const [todo, setTodo] = useState("");

    return <div className="add-todo-container">
        <img src="https://www.flaticon.com/premium-icon/icons/svg/3416/3416075.svg"
            className="add-todo-icon"
            alt="add todo"
            onClick={() => props.onAddTodo(todo)} />
        <input type="text" 
            value={todo}
            onChange={e => setTodo(e.target.value)}
            placeholder="Write down your todo..."
            className="add-todo-input" />
    </div>
}

export default AddTodo;