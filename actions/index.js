export const actionTypes = {
    ADD_NEW_TASK: 'todo/taskAdded',
    DELETE_TASK: 'todo/taskDeleted',
    TOGGLE_TASK_DONE: 'todo/taskToggled'
}

export const addNewTask = (taskDescription) => {
    return {
        type: actionTypes.ADD_NEW_TASK,
        payload: taskDescription
    }
}

export const deleteTask = (id) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: id
    }
}

export const toggleTaskDone = (id) => {
    return {
        type: actionTypes.TOGGLE_TASK_DONE,
        payload: id
    }
}