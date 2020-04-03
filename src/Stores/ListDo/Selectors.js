const getTodoList = state => {
    console.log('state', state)
    return state['ToDo'].toDoList;
}

export const DoSelectors = {
    getTodoList
}