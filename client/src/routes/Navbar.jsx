import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const isAuth = useSelector(store=> store.userReducer.isAuth)
  const username = useSelector(store=> store.userReducer.username)

  return (
    <div style={{backgroundColor:'#ff6666', height:'45px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Link style={{color:'white', textDecoration:'none'}} to={'/'}>HOME</Link>
        <Link style={{color:'white', textDecoration:'none'}} to={'/login'}>LOGIN</Link>
        <Link style={{color:'white', textDecoration:'none'}} to={'/tasks'}>TASKS</Link>
        <p style={{color:'white', textDecoration:'none'}}>{isAuth ? username : ''}</p>
    </div>
  )
}

export default Navbar