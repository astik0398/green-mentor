import { DELETE_TASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, POST_TASK_SUCCESS } from "./actionType"
import axios from 'axios'

export const getTasks =()=> (dispatch)=> {
    dispatch({type: GET_TASK_REQUEST})

    let response = axios.get('https://green-mentor-backend.onrender.com/task')
    response.then(function(res){
        dispatch({type: GET_TASK_SUCCESS, payload: res.data})
    })
    .catch(function(){
        dispatch({type: GET_TASK_FAILURE})
    })
}

export const addTask = (obj)=> (dispatch)=> {
    let response = axios.post('https://green-mentor-backend.onrender.com/task/add', obj)
    response.then(function(res){
        dispatch({type: POST_TASK_SUCCESS, payload: res.data.task})
    })
}

export const deleteTask = (id)=> (dispatch)=> {
    let response = axios.delete(`https://green-mentor-backend.onrender.com/task/${id}`)
    response.then(function(){
        dispatch({type: DELETE_TASK_SUCCESS, payload:id})
    })
}

export const updateTask = (id, obj)=> (dispatch)=> {
    let response = axios.patch(`https://green-mentor-backend.onrender.com/task/${id}`, obj)
    response.then(function(){
        dispatch({type: GET_TASK_SUCCESS, payload: {id, obj}})
    })
}