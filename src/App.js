import "./App.css";
import { Route, Routes } from "react-router-dom";
import "animate.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Reviews from "./Pages/Reviews/Reviews";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from "./Pages/Login/ForgotPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="home" element={<Home></Home>} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        > 
        <Route index element={<MyAppointments />}></Route>
        <Route path="review" element={<MyReview />}></Route>
        <Route path="history" element={<MyHistory />}></Route>
        </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetPassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
