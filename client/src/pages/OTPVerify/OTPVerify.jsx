import React, { useState } from 'react'
import { BackendLink } from '../../components/App/App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const OTPVerify = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
    const [email, setEmail] = useState("");

    const code = {
        userId: email,
        otp: otp
    }
    const getData = async (code) => {
        console.log(code);
        try {
            const res = await axios.post(`${BackendLink}/user/verifyOTP`, code)
            console.log(res.data);
            if (res.data.status == 'verified') {
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        getData(code)
    }

    return (
        <>
            <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='Enter OTP' type="text" />
            <input value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} type="text" />
            <button onClick={handelSubmit}>SUBMIT</button>
        </>
    )
}

export default OTPVerify