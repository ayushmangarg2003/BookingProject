import React, { useState } from 'react'
import { BackendLink } from '../../components/App/App'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./OTPVerify.css"

const OTPVerify = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const email = id

    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
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
                toast(error)
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
            <div className="otp-center">
                <div className='otp-input-parent'>
                    <h2>Enter OTP</h2>
                    <input className='otp-input' maxLength='4' value={otp} onChange={(e) => setOtp(e.target.value)} type="text" />
                </div>
                <button onClick={handelSubmit}>SUBMIT</button>
            </div>
            <ToastContainer position="bottom-center" />
        </div>
    )
}

export default OTPVerify