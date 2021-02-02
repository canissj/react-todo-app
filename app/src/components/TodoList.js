import React, { useState, useEffect } from 'react'
import './../css/todolist.css'
import './../css/todo.css'
import Todo from './Todo'
import AddTodo from './AddTodo'
import { getTodos, updateTodos } from '../actions/Todo'
import Modal from './Modal'
import todoModel from '../models/Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState({});

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
            todoModel.newTodo(id, title, null, false)
        ));
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const onDetailsClicked = (id) => {
        setSelectedTodo({...todos.find(todo => todo.id === id)})
        setShowModal(true)
    }

    const onSelectedTodoChange = (e) => {
        if (e.target.value !== "") {
            setSelectedTodo({...selectedTodo, title: e.target.value});
        }
    }

    return <> 
    <div className="todo-list-container">
        <AddTodo onAddTodo={onAddTodo} />
        <div className="todo-list">
            {todos.map(todo => 
                <Todo key={todo.id}     
                    todo={todo} onEdit={() => onEdit(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onComplete={() => onComplete(todo.id)}
                    onTitleChange={(title) => onTitleChange(todo.id)(title)}
                    onDetailsClick={() => onDetailsClicked(todo.id)} />
            )}
        </div>
    </div>
    <Modal todo={selectedTodo} onChange={onSelectedTodoChange} show={showModal} onClose={() => closeModal()} />
    </>
}

export default TodoList;