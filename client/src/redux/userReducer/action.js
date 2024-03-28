import axios from "axios"
import { GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"

export const registerUser = (formData)=>(dispatch)=> {
    dispatch({type: GET_USER_REQUEST})

    let response = axios.post('https://green-mentor-backend.onrender.com/user/register', formData)
    response.then(function(res){
        console.log(res);
    })
}

export const loginUser = (formData)=> (dispatch)=> {
    let response = axios.post('https://green-mentor-backend.onrender.com/user/login', formData)
    response.then(function(res){
        console.log(res);
        dispatch({type: GET_USER_SUCCESS, payload: {token: res.data.token, username: res.data.username}})
    })
}