import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import Profile from '../../pages/Profile/Profile';
import ProfilePlaces from '../../pages/ProfilePlaces/ProfilePlaces';
import AddProfilePlaces from '../../pages/AddProfilePlaces';
import SinglePlace from '../../pages/SinglePlace';
import Bookings from '../../pages/Bookings/Bookings';
import SingleBooking from '../../pages/SingleBooking';
import Places from '../../pages/Places';
import About from '../../pages/About/About';

import { UserContextProvider } from "../../context/UserContext";
import "./App.css"


export const BackendLink = 'http://localhost:4000/api'

const App = () => {
  return (
    <div className='app'>
      <UserContextProvider>
        <BrowserRouter>
          <Navbar />
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/places" element={<ProfilePlaces />} />
              <Route path="/profile/places/new" element={<AddProfilePlaces />} />
              <Route path="/profile/places/:id" element={<AddProfilePlaces />} />
              <Route path="/places/:id" element={<SinglePlace />} />
              <Route path="/profile/bookings" element={<Bookings />} />
              <Route path="/profile/bookings/:id" element={<SingleBooking />} />
              <Route path="/places" element={<Places />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}

export default App