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
import Contact from './Pages/Contact Us/Contact';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route index element={<Home />} />
       <Route path='about' element={<About/>} />
       <Route path='appointment' element={<Appointment/>} />
       <Route path='reviews' element={<Reviews />} />
       <Route path='contact' element={<Contact />} />
       <Route path='login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
