import { IconButton,Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import "./add.css";
import "./styles.css"
import LogoutIcon from '@mui/icons-material/Logout';
function AdminH() {
    var nam = [
        { name: "Abhimanyu", age: 21, email: "abhi@gmail.com", phone: "940021896" },
        { name: "Madhav", age: 20, email: "madhav@gmail.com", phone: "9998787822" },
    ];

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
    };

    return (
        <div  className='app1' >
            <center><h3>Welcome Admin</h3></center>
            <div style={{ paddingTop: '100px' }}>
                <TableContainer >
                    <Table className='rainbow'>
                        <TableHead className='rainbow'>
                            <TableRow >
                                <TableCell style={{ color: "black", backgroundColor: "white", fontFamily: "'Orbitron', sans-serif", fontSize: "15px"  }} >Name</TableCell>
                                <TableCell style={{ color: "black", backgroundColor: "white", fontFamily: "'Orbitron', sans-serif", fontSize: "15px"  }}>Age</TableCell>
                                <TableCell style={{ color: "black", backgroundColor: "white", fontFamily: "'Orbitron', sans-serif", fontSize: "15px" }}>Email</TableCell>
                                <TableCell style={{ color: "black", backgroundColor: "white", fontFamily: "'Orbitron', sans-serif", fontSize: "15px" }}>Phone</TableCell>
                                <TableCell style={{ color: "black", backgroundColor: "white", fontFamily: "'Orbitron', sans-serif", fontSize: "15px" }}>View-User</TableCell>
                                <TableCell style={{ color: "black", backgroundColor: "white", fontFamily: "'Orbitron', sans-serif", fontSize: "15px" }}>Delete-User</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {nam.map((value, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{value.name}</TableCell>
                                        <TableCell>{value.age}</TableCell>
                                        <TableCell>{value.email}</TableCell>
                                        <TableCell>{value.phone}</TableCell>
                                        <TableCell>
                                            <Button variant="contained">view</Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant='contained'>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <p>Log-Out <IconButton  edge='start' size='large' aria-label="PersonIcon" sx={{ mr: 2 }} >
                <Link to={'/Steve'}><LogoutIcon style={{ color: 'white' }} /></Link></IconButton>
                </p>
            </div>
        </div>
    );
}

export default AdminH