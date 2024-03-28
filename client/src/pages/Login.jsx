import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/userReducer/action';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const isAuth = useSelector(store=> store.userReducer.isAuth)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData))
  };

  if(isAuth){
    navigate('/tasks')
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px', width:'600px', margin:'auto',  marginTop:'25vh', backgroundColor:'#ff6666',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <h2 style={{color:'white'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '5px', marginRight: '10px', borderRadius:'5px', width:'250px', height:'25px', border:'none' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ padding: '5px', marginRight: '10px', borderRadius:'5px', width:'250px', height:'25px', border:'none' }}
          />
        </div>
        <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer', borderRadius:'5px',marginTop:'20px', border:'none', height:'30px', width:'100px' }}>
          Login
        </button>

        <p style={{color:'white'}}>new to the platform ? <span ><Link style={{color:'black'}} to={'/signup'}>Signup</Link></span></p>
      </form>
    </div>
  )
}

export default Login