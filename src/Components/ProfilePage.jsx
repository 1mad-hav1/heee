import React, { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import { TextField, Button, Typography, AppBar, Box,Toolbar, IconButton } from '@mui/material';



  const ProfilePage = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
  
    return (
      <div>

     <Box sx={{ flexGrow: 0.5 }}>
            <AppBar position="static" style={{background:"igthblue"}}>
                <Toolbar>

                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Settings</Typography>

                <IconButton edge="start" color="inherit" aria-label="home">
          <HomeIcon/>
        </IconButton>
  
        <IconButton edge="end" color="inherit" aria-label="logout">
          <LogoutIcon/>
        </IconButton>
     
                    
                </Toolbar>

            </AppBar>
      
        </Box>



        <Typography variant="h3" color={"blue"}><b>Profile</b></Typography>
  
        
        <ul>
        <li><TextField label="Name:" /></li>
        <li><TextField label="Place:" /></li>
        <li><TextField label="Age:" /></li>
        <li><TextField label="Education:" /></li>
        <li><TextField label="Email-ID:" /></li>
        <li><TextField label="Phone-Number:" /></li>
        </ul>

        {/* Submit button */}
        <Button variant="contained" color="primary">Update Profile</Button>

        <ul>
       <li> <TextField
          label="Income"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        /></li>
       <li> <TextField
          label="Expense"
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        /></li>

        </ul>
  


        {/* Button to calculate total */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Calculate total income and expense
            const total = parseInt(income) + parseInt(expense);
            alert(`Total: $${total}`);
          }}
        >
          Calculate Total
        </Button>

      </div>
    );
  };

  
  export default ProfilePage;
