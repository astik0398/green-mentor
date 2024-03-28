import { DELETE_TASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, POST_TASK_SUCCESS, UPDATE_TASK_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    tasks: [],
    isError: false
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_TASK_REQUEST:
            return {...state, isLoading: true}

        case GET_TASK_SUCCESS:
            return {...state, isLoading: false, tasks: action.payload}    

        case GET_TASK_FAILURE:
            return {...state, isLoading: false, isError: true}    

        case POST_TASK_SUCCESS:
            return {...state, tasks: [...state.tasks, action.payload]}  
            
        case DELETE_TASK_SUCCESS:
            return {...state, tasks: state.tasks.filter(task => task._id !== action.payload)}    

        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                tasks: state?.tasks?.map(task => {
                    if (task._id === action.payload.id) {
                        return {
                            ...task,
                            title: action.payload.obj.title,
                            description: action.payload.obj.description,
                            priority: action.payload.obj.priority,
                            status: action.payload.obj.status
                        };
                    }
                    return task;
                })
            };

        default:
            return state    
    }
}