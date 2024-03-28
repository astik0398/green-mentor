import { GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS } from "./actionType"

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

        default:
            return state    
    }
}