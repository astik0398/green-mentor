import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Tasks from '../pages/Tasks'
import Signup from '../pages/Signup'
import PrivateRoute from './PrivateRoute'
import { ChakraProvider } from '@chakra-ui/react'
import PageNotFound from '../pages/PageNotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/tasks' element={
              <PrivateRoute>
                <ChakraProvider>
                <Tasks/>
                </ChakraProvider>
              </PrivateRoute>
            }/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes