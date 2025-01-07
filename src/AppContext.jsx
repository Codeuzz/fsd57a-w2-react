import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const URL = import.meta.env.VITE_URL

    const fetchUsers = async () => {
        try {
            const response = await axios.get(URL)
            setUsers(response.data)
            console.log(users)
        }
        catch (err) {
            setError(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
      }, [])
    

    return (
      <AppContext.Provider value={{users, error, loading}}>
        {children}
      </AppContext.Provider>
    );
};
  
export const useAppContext = () => useContext(AppContext);