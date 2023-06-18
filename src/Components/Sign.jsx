import { Box, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import "./sign.css"

const Sign = () => {
  
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [uname, setUname] = useState('');
  const [education, setEducation] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cpassword, setCPass] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
const EmailChange = (e) => {
  setField1(e.target.value);
  setEmail(e.target.value);
};

const Pass1Change = (event) => {
  setField2(event.target.value);
  setPass(event.target.value);

};
const Pass2Change = (event1) => {
  setField3(event1.target.value);
  setCPass(event1.target.value);

};


  const handleCheckboxChange = () => {
  setIsChecked(!isChecked);
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (field1.trim() === '' || field2.trim() === '' || field3.trim() === '') {
    alert('Please fill in all required fields.');
  } 
  else {
      if (password.length < 8) {
          alert('Password must be at least 8 characters long.');
      }
      else{
           if (isChecked) {
              if (password !== cpassword) {
                   alert('Password and confirm password must match.');
               }
              else{
                 
                  
                    const userData = {
                      uname,
                      name,
                      place,
                      age,
                      email,
                      education,
                      phoneNumber,
                      password,
                      dob,
                    };
                  
                    fetch('/api/register', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(userData),
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log('User registered:', data);
                })
                      .catch((error) => {
                        console.error('Error registering user:', error)
                        // Handle error and show an error message to the user
                      });
                  
                    console.log('Signup submitted:',email,password);
                    alert('You have signed up successfully!');

                    navigate('/');

              }
  
          } 
          else {
              alert('Please accept terms and conditions');
          }
      }
};
}
    const handleOpenModal = () => {
      setModalOpen(true);
    };
    
    const handleCloseModal = () => {
      setModalOpen(false);
    };


  const handleReset = () => {
    setName('');
    setPlace('');
    setAge('');
    setUname('');
    setEducation('');
    setDob('');
    setPhone('');
    
  };
  
  return (
    <div className='sign'>
        <div style={{ textAlign: 'center'}}>
            <h1 style={{ color: 'white' }}>The Invincibles</h1>
        </div>
        <Box border={1} borderColor="primary.main" borderRadius={5} padding={6} sx={{  width: '500px' ,backgroundColor: 'rgba(135, 206, 235)',color: '#000000'}}>
        
            <h2>Sign Up</h2>
            <div style={{ display: 'flex', gap: '50px' }}>
            <br/><p>Name</p>
            <TextField variant='filled' type='text' value={name} onChange={(e) => setName(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Username</p>
            <TextField variant='filled' type='text' value={uname} onChange={(e) => setUname(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '42px' }}>
            <br/><p>Email id</p>
            <TextField variant='filled' type='text' value={email} onChange={EmailChange}></TextField>
            </div>
            <div style={{ display: 'flex', gap: '37px' }}>
            <br/><br/><p>Password</p>
            <TextField variant='filled' type='password' style={{ height: '30px' }} value={password} onChange={Pass1Change} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '7px' }}>
            <br/><br/><br/><br/><p>Confirm Password</p>
            <TextField variant='filled' type='password' style={{ height: '30px' }} value={cpassword} onChange={Pass2Change} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '52px' }}>
            <br/><p>Place</p>
            <TextField variant='filled' type='text' style={{ height: '30px' }} value={place} onChange={(e) => setPlace(e.target.value)}></TextField>
            </div>
            <div style={{ display: 'flex', gap: '57px' }}>
            <br/><p>Age</p>
            <TextField variant='filled' type='number' value={age} onChange={(e) => setAge(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Education</p>
            <TextField variant='filled' type='text' value={education} onChange={(e) => setEducation(e.target.value)}></TextField>
            </div>
            <div style={{ display: 'flex', gap: '26px' }}>
            <br/><p>Date of Birth</p>
            <TextField style={{ width: '219px' }} variant='filled' type='date' value={dob} onChange={(e) => setDob(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Phone no.</p>
            <TextField variant='filled' type='number' value={phoneNumber} onChange={(e) => setPhone(e.target.value)} required></TextField>
            </div>
            <br/><br/>
            <div style={{ display: 'flex', justifyContent: 'center' ,gap:'10px'}}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <label>I agree to the    </label><span onClick={handleOpenModal} style={{ color: 'blue' , cursor: 'pointer'}}> Terms and Conditions</span>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal} contentLabel="Terms and Conditions" style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)',},content: {backgroundColor: 'transparent',color:'white',maxWidth: '400px',width: '50%',height: '50%',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',},}}>
              <h2>Terms and Conditions</h2>
              {"If book is not returned or damaged, fine will be charged."}
              <br/><br/><br/>
              <div style={{ marginTop:'auto' , textAlign: 'center' }}>
              <Button variant='filled' onClick={handleCloseModal}>Close</Button>
              </div>
            </Modal>
            </div>
            <br/> <br/>
            <div style={{ display: 'flex', justifyContent: 'center', gap : 2}}>  
            <Button variant='contained' color='success' onClick={handleSubmit} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'success', border: 'none', outline: 'none', cursor: 'pointer'}}>Submit</Button>  
                <Button variant='contained' color='warning' onClick={handleReset}>Reset</Button>  
            </div>
        </Box>
    </div>
  )
}

export default Sign