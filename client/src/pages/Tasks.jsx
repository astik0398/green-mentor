import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getTasks } from '../redux/taskReducer/action'
import './Tasks.css'
import NewTodoForm from './NewTodoForm'

const Tasks = () => {
  const tasks = useSelector(store=> store.taskReducer.tasks)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTasks())
  }, [])

  function handleDelete(id){
    dispatch(deleteTask(id))

    setTimeout(()=> {
      window.location.reload()
    }, 800)
  }

  return (
    <div className="TodoList">
      <NewTodoForm/>
      {tasks?.map(item=> {
        return <ul style={{background: '#ff7676', padding:'10px', paddingLeft:'25px', textAlign:'left'}} key={item._id}>
          <li style={{marginBottom:'5px'}}><b>Title: {item.title}</b></li>
          <li style={{marginBottom:'5px'}}><b>Description: {item.description}</b></li>
          <li style={{marginBottom:'5px'}}><b>Priority: {item.priority}</b></li>
          <li style={{marginBottom:'5px'}}><b>Status: {item.status ? <span style={{color: 'green'}}>Completed</span>: <span style={{color:'red'}}>Not Completed</span>}</b></li>
          <div >
          <button style={{border:'none', borderRadius:'5px', height:'25px'}}>
            Edit
          </button>
          <button onClick={()=> handleDelete(item._id)} style={{marginLeft:'10px', border:'none', borderRadius:'5px', height:'25px'}}>
            Delete
          </button>
          </div>
        </ul>
      })}
    </div>
  )
}

export default Tasks