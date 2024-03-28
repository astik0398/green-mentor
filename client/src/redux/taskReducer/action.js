import { DELETE_TASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, POST_TASK_SUCCESS, UPDATE_TASK_SUCCESS } from "./actionType"
import axios from 'axios'

export const getTasks =()=> (dispatch)=> {
    dispatch({type: GET_TASK_REQUEST})

    let response = axios.get('https://green-mentor-backend.onrender.com/task', {
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
        }
    })
    response.then(function(res){
        console.log(res);
        dispatch({type: GET_TASK_SUCCESS, payload: res.data})
    })
    .catch(function(){
        dispatch({type: GET_TASK_FAILURE})
    })
}

export const addTask = (obj)=> (dispatch)=> {
    let response = axios.post('https://green-mentor-backend.onrender.com/task/add', obj, {
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
        }
    })
    response.then(function(res){
        dispatch({type: POST_TASK_SUCCESS, payload: res.data.task})
    })
}

export const deleteTask = (id)=> (dispatch)=> {
    let response = axios.delete(`https://green-mentor-backend.onrender.com/task/${id}`, {
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
        }
    })
    response.then(function(){
        dispatch({type: DELETE_TASK_SUCCESS, payload:id})
    })
    .catch(function(error) {
        console.error("Error deleting task:", error.message);
    });
}

export const updateTask = (id, obj)=> (dispatch)=> {
    let response = axios.patch(`https://green-mentor-backend.onrender.com/task/${id}`, obj, {
        headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
        }
    })
    response.then(function(){
        dispatch({type: UPDATE_TASK_SUCCESS, payload: {id, obj}})
    })
}