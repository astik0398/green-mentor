import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

  const isAuth = useSelector(store=> store.userReducer.isAuth)

  if(isAuth){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}

export default PrivateRoute