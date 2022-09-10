import rootReducer from '../reducers';
import { actionTypes } from '../actions';

describe('rootReducer', () => {

    let state;

    beforeEach(() => {
        state = rootReducer(undefined, {});

        const action1 = {
            type: actionTypes.ADD_NEW_TASK,
            payload: 'Task 1'
        }

        state = rootReducer(state, action1);
    });

    it('initial state', () => {
        expect(rootReducer(undefined, {}))
            .toEqual({
                tasks: [],
                taskCount: 0
            });
    });

    it('task added', () => {
        /* let state = rootReducer(undefined, {});

        const action1 = {
            type: actionTypes.ADD_NEW_TASK,
            payload: 'Task 1'
        }

        expect(rootReducer(state, action1))
            .toEqual({
                tasks: [
                    {
                        id: 1,
                        description: 'Task 1',
                        isDone: false
                    }
                ],
                taskCount: 1
            });
 */
        const action2 = {
            type: actionTypes.ADD_NEW_TASK,
            payload: 'Task 2'
        }

        expect(rootReducer(state, action2))
            .toEqual({
                tasks: [
                    {
                        id: 1,
                        description: 'Task 1',
                        isDone: false
                    },
                    {
                        id: 2,
                        description: 'Task 2',
                        isDone: false
                    }
                ],
                taskCount: 2
            });
    });

    it('task deleted', () => {
        /* let state = rootReducer(undefined, {});
        const action1 = {
            type: actionTypes.ADD_NEW_TASK,
            payload: 'Task 1'
        } */
        
        const action2 = {
            type: actionTypes.ADD_NEW_TASK,
            payload: 'Task 2'
        }

        /* state = rootReducer(state, action1); */
        state = rootReducer(state, action2);

        const action3 = {
            type: actionTypes.DELETE_TASK,
            payload: 1
        }

        expect(rootReducer(state, action3))
        .toEqual({
            tasks: [
                {
                    id: 2,
                    description: 'Task 2',
                    isDone: false
                }
            ],
            taskCount: 1
        });
    });

    it('task toggled', () => {
        const action2 = {
            type: actionTypes.ADD_NEW_TASK,
            payload: 'Task 2'
        }

        state = rootReducer(state, action2);

        const action3 = {
            type: actionTypes.TOGGLE_TASK_DONE,
            payload: 2
        }

        expect(rootReducer(state, action3))
        .toEqual({
            tasks: [
                {
                    id: 1,
                    description: 'Task 1',
                    isDone: false
                },
                {
                    id: 2,
                    description: 'Task 2',
                    isDone: true
                }
            ],
            taskCount: 2
        });        

    });
});