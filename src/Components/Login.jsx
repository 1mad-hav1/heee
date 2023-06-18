import { Button, TextField, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom/dist';
import "./log.css"
const Login = () => {
  const [uname, setUsername] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uname, password }),
        });
        if (response.ok) {
          const data = await response.json();
          const { token, isBlocked } = data; 
  
          if (isBlocked) {
  
            alert("The user is blocked")
            return;
          }
          localStorage.setItem('token', token);
          navigate('/Sign');
        } else {
          const data = await response.json();
          console.log('Login failed');
          alert(data.message)
        }
      } catch (error) {
          console.error('Error occurred during login:', error);
      }
    };
    const handleReset = () => {
      setUsername('');
      setPass('');
      
    };
    

  return (
    <div className="log">
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Welcome to The Invincibles</h1>
        <Box border={1} borderColor="primary.main" borderRadius={5} padding={8} sx={{ backgroundColor: 'rgba(135, 206, 235)',color: '#000000'}}>   
        <h2>Login</h2>
        <TextField variant='filled' label="Username" onChange={(e) => setUsername(e.target.value)}  sx={{ width: '400px' }} value={uname} required></TextField>
        <br/><br/>
        <TextField variant='filled' type='password' label="Password" onChange={(e) => setPass(e.target.value)}  sx={{ width: '400px' }} value={password} required></TextField>
        <br/><br/>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap : 5}}>
        <Button id="bt" variant='contained' color='success' onClick={handleLogin}>Submit</Button>
        <Button id="bt" variant='contained' color='warning' onClick={handleReset}>Reset</Button>
        </div>
        <br/>
        {/* <div style={{ textAlign: 'right' }}>
                  <Typography>Forgot password?</Typography>
        </div> */}
        <div style={{ textAlign: 'left' }}>
                  <Typography>Don't have an account?<Link to="/Sign">Sign Up</Link></Typography>
                  
        </div>
        <div style={{ textAlign: 'left' }}>
                  <Typography>Admin? <Link to="/Steve">Sign in as Admin</Link></Typography>
                  
        </div>
        </Box>
    </div>
  )
}
export default Login