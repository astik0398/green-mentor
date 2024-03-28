import React from 'react'

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor:'#ff6666', marginTop:'25px', color:'white' }}>
    <h1>Welcome to <span style={{color: 'black'}}>Task Management</span></h1>
    <p style={{width:'80%', margin:'auto'}}>Stay organized and productive with our Task Management app. This app helps you keep track of your tasks, manage deadlines, and stay focused on your goals. Whether you're organizing work projects, planning your daily routine, or simply making a shopping list, our app is designed to streamline your task management process.</p>
    <div style={{ marginTop: '20px', width:'30%', textAlign:'left', margin:'auto' , fontSize:'20px'}}>
      <p>This Task Management app allows you to:</p>
      <ul>
        <li>Add tasks to your list</li>
        <li>Delete tasks you no longer need</li>
        <li>Update existing tasks with new information</li>
        <li>Fetch all tasks in your list</li>
      </ul>
    </div>
    <p >Start managing your tasks today!</p>
  </div>
  )
}

export default Homepage