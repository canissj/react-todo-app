const newTodo = (id, title, attachments, completed) =>{
    return {
        id: id,
        title: title,
        completed: completed,
        attachments: attachments
    }
}

const Todo = { newTodo }
export default Todo;