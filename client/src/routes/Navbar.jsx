import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const isAuth = useSelector(store=> store.userReducer.isAuth)
  const username = useSelector(store=> store.userReducer.username)

  return (
    <div style={{backgroundColor:'#ff6666', height:'45px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Link style={{color:'white', textDecoration:'none'}} to={'/'}>HOME</Link>
        <Link style={{color:'white', textDecoration:'none'}} to={'/tasks'}>TASKS</Link>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
        <p style={{color:'white', textDecoration:'none'}}>{isAuth ? username.toUpperCase() : null}</p>
        {isAuth ? <button className='button'><Link style={{color:'white', textDecoration:'none'}} to={'/login'}>LOGOUT</Link></button> : <button className='button'><Link style={{color:'white', textDecoration:'none'}} to={'/login'}>LOGIN</Link></button>}
        </div>
    </div>
  )
}

export default Navbar