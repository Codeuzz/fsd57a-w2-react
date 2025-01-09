import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    let navigate = useNavigate()

    const registerUser = async (user) => {
        try{
            const response = await axios.post('http://localhost:8000/api/register', user)
            console.log(response)
            if(response.status === 200){
                alert(response.data.message)
                navigate('/')
            }
            alert(response.data.message)
        }
        catch(err){
            alert(err.response.data.message)
        }
    }

    return (
        <AuthContext.Provider value={{registerUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)