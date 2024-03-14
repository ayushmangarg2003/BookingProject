import { useState } from 'react'
import { useUserContext } from './useUserContext'
import { BackendLink } from '../components/App/App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useUserContext()
    const navigate = useNavigate();

    const login = async (email, password) => {
        setError(null)
        const user = { email, password }
        try {
            await axios.post(`${BackendLink}/user/login`, user)
            navigate('/')
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({ type: 'LOGIN', payload: { email } })
        } catch (error) {
            setError(error.response.data.error);
        }
    }

    return { login, error }
}