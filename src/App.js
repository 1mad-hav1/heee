import { Route, Routes } from 'react-router-dom';
import Bar from './Components/Bar';
import Table1 from './Components/Table1';
import About from './Components/About';
import Sign from './Components/Sign';
import Login from './Components/Login';
import './App.css';
import Steve from './Components/Steve';
import Loading from './Components/Loading';
import AdminH from './Components/AdminH';
function App() {
  return (
    <div >
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/Steve' element={<Steve />}/>
          <Route path='/Home' element={<Table1 />}/>
          <Route path='About' element={<About />}/>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/adminp' element={<AdminH/>}/>
        </Routes>
    </div>
  );
}
export default App;