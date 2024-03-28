import axios from "axios"
import { GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"

export const registerUser = (formData)=>(dispatch)=> {
    dispatch({type: GET_USER_REQUEST})

    let response = axios.post('https://green-mentor-backend.onrender.com/user/register', formData)
    response.then(function(res){
        console.log(res);
    })
}

export const loginUser = (obj)=> (dispatch)=> {
    let response = axios.post('https://green-mentor-backend.onrender.com/user/login', obj)
    response.then(function(res){
        dispatch({type: GET_USER_SUCCESS, payload: res.data.username})
    })
}