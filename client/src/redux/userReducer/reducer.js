import { GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    username: null,
    isError: false,
    isAuth: false
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_USER_REQUEST:
            return {...state, isLoading: true}

        case GET_USER_SUCCESS:
            return {...state, isLoading: false, username: action.payload, isAuth: true}    

        default:
            return state    
    }
}