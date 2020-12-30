const itemsKey = "todo-items"

const getTodos = () => {
    return new Promise((res, rej) => {
        const itemsRaw = localStorage.getItem(itemsKey)
        if (itemsRaw === "" || itemsRaw === null ) {
            res([])
            return;
        }

        res(JSON.parse(itemsRaw));
    })
}

const updateTodos = (todos) => {
    return new Promise((res, rej) => {
        try {
            localStorage.setItem(itemsKey, JSON.stringify(todos));
            res()
            return;
        } catch (e) {
            rej(e)
            return;
        }
    })
}

export { getTodos, updateTodos };