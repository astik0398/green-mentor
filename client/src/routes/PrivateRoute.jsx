import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

  const lsData = JSON.parse(localStorage.getItem('token'))
  
  if(lsData?.token){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}

export default PrivateRoute