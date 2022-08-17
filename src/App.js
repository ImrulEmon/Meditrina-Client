import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
       <Route exact path='/' element={<Home></Home>}/>
       <Route exact path='home' element={<Home></Home>}/>
       <Route index element={<Home />} />
       <Route path='about' element={<About/>} />
       <Route path='appointment' element={<Appointment/>} />
       <Route path='reviews' element={<Reviews />} />
       <Route path='login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
