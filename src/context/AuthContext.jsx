import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, []) 


    const registerUser = async (user) => {
        try{
            const response = await axios.post('http://localhost:8000/api/register', user)
            console.log(response)
            if(response.status === 200){
                alert(response.data.message)
                return navigate("/login")
            }
            alert(response.data.message)
        }
        catch(err){
            alert(err.response.data.message)
        }
    }

    const loginUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', user)
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setIsAuthenticated(true)
                alert(response.data.message)
                return navigate('/')
            }
        }
        catch (err) {
            console.log(err)
            alert("we could not log you in")
        }
    }

    const logoutUser = async (user) => {
       localStorage.removeItem('token')
       setIsAuthenticated(false)
       navigate('/login');
    }

    return (
        <AuthContext.Provider value={{registerUser, loginUser, isAuthenticated, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)