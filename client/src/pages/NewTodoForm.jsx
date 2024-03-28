import React, { useState } from 'react'
import './newTodoForm.css'
import { addTask } from '../redux/taskReducer/action'
import { useDispatch } from 'react-redux'

const NewTodoForm = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const dispatch = useDispatch()

    function handleAdd(e){
        e.preventDefault()

        let obj = {
            title,
            description,
            priority,
            status: false
        }

        dispatch(addTask(obj))
        
        setTimeout(()=> {
            window.location.reload()
          }, 800)
    }
  return (
    <form className="NewTodoForm" onSubmit={handleAdd}>
    <label htmlFor="task"><h3>TODOS</h3></label>
    <input
      id="task"
      onChange={(e)=> setTitle(e.target.value)}
      value={title}
      type="text"
      name="task"
      placeholder="Task Title"
    />
    <input
      id="task"
      onChange={(e)=> setDescription(e.target.value)}
      value={description}
      type="text"
      name="task"
      placeholder="Task Description"
    />
    <select id="task"
    onChange={(e)=> setPriority(e.target.value)}
    value={priority}
    >
        <option value="">Set Priority</option>
        <option value="low">LOW</option>
        <option value="medium">MEDIUM</option>
        <option value="high">HIGH</option>
    </select>

    <button type='submit'>Add Todo</button>
  </form>
  )
}

export default NewTodoForm