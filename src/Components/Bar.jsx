import { IconButton, Button, Typography, Toolbar, Box, AppBar, SpeedDial, CardMedia } from '@mui/material';
import YourImage from './Image.jpg';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Selectbar from './Selectbar';
import Speed1 from './Speed1'
import PersonIcon from '@mui/icons-material/Person';
import './styles.css'
import About from './About';
import './Bar.css'
import './App.css';

const Bar = () => {
  return (
    <div className='p2'>
        <h1>Expensify</h1>
        <div style={{paddingLeft:'1380px'}}>
        <IconButton  edge='start' size='large' aria-label="PersonIcon" sx={{ mr: 2 }} >
         <Link to={'/Steve'}><PersonIcon style={{ color: 'white' }} /></Link>
       </IconButton>
        </div>
        <section className='p3'>
      <h2>About Us</h2>
      <p>Welcome to our website! We are a team of individuals dedicated to provide you financial services.</p>
      <p>Here's some more information about us and what we do.<Link to={"About"}>Learn More</Link></p>
      <p></p>
    </section>
        </div>
      
    /* <div className='Bar'>
      {
      //   <Box sx={{ flexGrow: 1 }}>
      //   <AppBar position="static">
      //     <Toolbar className='rainbow' variant='dense' sx={{ minHeight: 20, height: 100 }}>
      //       <div style={{ paddingRight: '520px' }}>
      //         <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      //           <Link to={"/Home"}><HomeIcon /></Link>
      //         </IconButton>
      //       </div>
      //       <div className='p2' style={{ paddingRight: '500px' }}>
      //         <Typography className='p2' variant="h3" component="div">EXPENSIFY</Typography>
      //       </div>
      //       <Speed1 />
      //       <IconButton size="large" edge="start" color="inherit" aria-label="BuildSharp" sx={{ mr: 2 }}>
      //         <BuildSharpIcon />
      //       </IconButton>
      //       <CardMedia component="img" src={YourImage} alt="Your Image" height="100" />
      //     </Toolbar>
      //   </AppBar>
      // </Box>
     
      }
    </div>   */
    
  );
}
export default Bar;
