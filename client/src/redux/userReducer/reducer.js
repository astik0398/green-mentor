import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGOUT_USER } from "./actionType"

const initialState = {
    isLoading: false,
    username: null,
    isError: false,
    token: null,
}

export const reducer = (state = initialState, action)=> {
    switch(action.type){
        case GET_USER_REQUEST:
            return {...state, isLoading: true}

        case GET_USER_SUCCESS:
            return {...state, isLoading: false, token: action.payload.token, username: action.payload.username}    

        case LOGOUT_USER:
            return {...state, token: null, username: null}    

        default:
            return state    
    }
}