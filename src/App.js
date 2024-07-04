import './App.css';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './home';
import Navlayout from './Navlayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import Login from './login';
import Signup from './signup';
import Booking from './booking';



function App() {
 
  return (
   <div>
  {/* <Home/> */}
      <BrowserRouter>
      <Navlayout/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Booking' element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
   </div>
    
  );
}

export default App;
