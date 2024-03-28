import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Tasks from '../pages/Tasks'
import Signup from '../pages/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes