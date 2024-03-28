import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userReducer/action';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
      const dispatch = useDispatch()
      const navigate = useNavigate()

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData))
        navigate('/login')
      };

  return (
    <div style={{ textAlign: 'center', padding: '25px', width:'600px', margin:'auto',  marginTop:'25vh', backgroundColor:'#ff6666',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
      <h2 style={{color:'white'}}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={{ padding: '5px', marginRight: '10px', borderRadius:'5px', width:'250px', height:'25px', border:'none' }}
          />
        </div>
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
        <button type="submit" style={{ padding: '5px 20px', cursor: 'pointer', borderRadius:'5px',marginTop:'20px', border:'none', height:'30px', width:'100px' }}>
          Sign Up
        </button>
      </form>
    </div>

  )
}

export default Signup