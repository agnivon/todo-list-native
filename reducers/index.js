import { actionTypes } from "../actions"

const initialState = {
    tasks: [],
    taskCount: 0
}

export const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: state.taskCount + 1,
                    description: action.payload,
                    isDone: false
                }],
                taskCount: state.taskCount + 1
            }
        
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => !(task.id === action.payload)),
                taskCount: state.taskCount
            }

        case actionTypes.TOGGLE_TASK_DONE:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) 
                        return {
                            ...task,
                            isDone: !task.isDone
                        }
                    else
                        return task
                })
            }

        default: return state
    }
}