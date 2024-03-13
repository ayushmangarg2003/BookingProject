import React, { useState } from 'react'
import RegisterIMG from "../assets/signup.gif"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BackendLink } from '../components/App/App'
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${BackendLink}/user/register`, {
        name,
        email,
        password,
      });
      alert('Registration successful. Now you can log in');
      navigate('/login')
    } catch (e) {
      alert('Registration failed. Please try again later');
      console.log(e);
    }
  }


  return (
    <div className="register-parent">
      <div className="register-left">
        <img src={RegisterIMG} className='register-image' alt="Sign Up" />
      </div>
      <div className="register-right">
        <h1>Create an <p>Account</p></h1>
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

        <div className='register-btn' onClick={handelSubmit}>Register</div>
        <div className='register-olduser'>Have an Account ? <Link className='register-login-redirect' to={'/login'}> Login</Link></div>
        {/* <div style={{ color: 'red' }} className='register-olduser'>{error && <div>{error}</div>}</div> */}
      </div>
    </div>
  )
}

export default Register