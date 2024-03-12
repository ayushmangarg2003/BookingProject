import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import Login from "../../pages/Login"
import Register from "../../pages/Register"
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import ProfilePlaces from '../../pages/ProfilePlaces';
import AddProfilePlaces from '../../pages/AddProfilePlaces';
import SinglePlace from '../../pages/SinglePlace';
import Bookings from '../../pages/Bookings';
import SingleBooking from '../../pages/SingleBooking';

import { UserContextProvider } from "../../context/UserContext";
import Places from '../../pages/Places';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import "./App.css"


axios.defaults.baseURL = 'http://localhost:4000/api';
axios.defaults.withCredentials = true;

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