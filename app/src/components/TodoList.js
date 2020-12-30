import React, { useState, useEffect } from 'react'
import './../css/todolist.css'
import './../css/todo.css'
import './../css/addtodo.css'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { getTodos, updateTodos } from '../actions/Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("Fetching todo list...")
        getTodos()
            .then(results => setTodos(results))
            .catch(() => console.log("Displaying error..."))
    }, [])

    useEffect(() => {
        updateTodos(todos);
    }, [todos])

    const onEdit = (id) => {
        console.log("Editing todo with id: ", id)
    }

    const onDelete = (id) => {
        console.log("Deleting todo with id: ", id)
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const onComplete = (id) => {
        console.log("Completed todo with id: ", id)
        setTodos(todos.map(todo => {
            return { ...todo, completed: todo.id === id ? !todo.completed : todo.completed } 
        }))
    }

    const onTitleChange = id => newTitle => {
        console.log("Completed todo with id: ", id)
        setTodos(todos.map(todo => {
            return { ...todo, title: todo.id === id ? newTitle : todo.title} 
        }))
    }
    
    const onAddTodo = title => {
        let id = 1
        if (todos.length > 0) {
            id += todos[todos.length - 1].id
        }

        setTodos(todos.concat(
            {
                id: id,
                title: title,
                completed: false
            }
        ));
    }

    return <div className="todo-list-container">
        <AddTodo onAddTodo={onAddTodo}/>
        <div className="todo-list">
            {todos.map(todo => 
                <Todo key={todo.id} 
                    todo={todo} onEdit={() => onEdit(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onComplete={() => onComplete(todo.id)}
                    onTitleChange={(title) => onTitleChange(todo.id)(title)} />
            )}
        </div>
    </div>
}

export default TodoList;