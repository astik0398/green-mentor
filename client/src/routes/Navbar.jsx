import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { LOGOUT_USER } from '../redux/userReducer/actionType'

const Navbar = () => {
  const token = useSelector(store=> store.userReducer.token)
  const username = useSelector(store=> store.userReducer.username)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleLogout(){
    dispatch({type: LOGOUT_USER})
    navigate('/login')
  }

  return (
    <div style={{backgroundColor:'#ff6666', height:'45px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
        <Link style={{color:'white', textDecoration:'none'}} to={'/'}>HOME</Link>
        <Link style={{color:'white', textDecoration:'none'}} to={'/tasks'}>TASKS</Link>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
        <p style={{color:'white', textDecoration:'none'}}>{token ? username : null}</p>
        {token ? <button onClick={handleLogout} className='button'><Link style={{color:'white', textDecoration:'none'}}>LOGOUT</Link></button> : <button className='button'><Link style={{color:'white', textDecoration:'none'}} to={'/login'}>LOGIN</Link></button>}
        </div>
    </div>
  )
}

export default Navbar