import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, getTasks, updateTask } from '../redux/taskReducer/action'
import './Tasks.css'
import NewTodoForm from './NewTodoForm'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Stack
} from '@chakra-ui/react'

const Tasks = () => {
  const tasks = useSelector(store=> store.taskReducer.tasks)
  const [flag, setFlag] = useState(false)
  const [id, setId] = useState(null)
  
  const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTasks())
  }, [])

  function handleDelete(id){
    dispatch(deleteTask(id))
  }

  function handleEdit(id, title, description, priority, status){
    onOpen()

    setFlag(true)
    setId(id)
    setTitle(title)
    setDescription(description)
    setPriority(priority)
    setStatus(status)
  }

  function handleUpdate(){
    let obj = {
      title,
      description,
      priority,
      status
    }

    dispatch(updateTask(id, obj))
    onClose()
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
          <Button colorScheme='gray' size='sm' onClick={()=> handleEdit(item._id, item.title, item.description, item.priority, item.status)}>
            Edit
          </Button>
          <Button colorScheme='gray' size='sm' onClick={()=> handleDelete(item._id)} style={{marginLeft:'10px'}}>
            Delete
          </Button>
          </div>
        </ul>
      })}

<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={3}>
          <Input value={id} size='lg' />
          <Input onChange={(e)=> setTitle(e.target.value)} value={title} size='lg' />
          <Input onChange={(e)=> setDescription(e.target.value)} value={description} size='lg' />
          <Input onChange={(e)=> setPriority(e.target.value)} value={priority} size='lg' />
          <Input onChange={(e)=> setStatus(e.target.value)} value={status} size='lg' />
          </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleUpdate} colorScheme='green' variant='outline'>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default Tasks