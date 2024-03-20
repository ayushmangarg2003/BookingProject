import React, { useState } from 'react'
import { BackendLink } from '../../components/App/App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./OTPVerify.css"

const OTPVerify = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const code = {
        userId: email,
        otp: otp
    }

    const getData = async (code) => {
        try {
            const res = await axios.post(`${BackendLink}/user/verifyOTP`, code)
            if (res.data.status == 'verified') {
                toast("Verification Successful")
                navigate('/')
            }
            else {
                setError(res.data.message)
            }
        } catch (error) {
            setError(error)
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        await getData(code)
    }

    return (
        <div className='otp-parent'>
            <div className="otp-top">
                <h1>Verify Your Email</h1>
                <p>Enter your email and 4 digit OTP </p>
            </div>
            <div className="otp-center">
                <div className='email-otp-parent'>
                    <h2>Enter Email</h2>
                    <input value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>
                <div className='otp-input-parent'>
                    <h2>Enter OTP</h2>
                    <input className='otp-input' maxLength='4' value={otp} onChange={(e) => setOtp(e.target.value)} type="text" />

                </div>
                <button onClick={handelSubmit}>SUBMIT</button>
            </div>

            <div style={{ color: 'red' }}>{error}</div>

            <ToastContainer position="bottom-center" />

        </div>
    )
}

export default OTPVerify