import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const User = () => {
const { id } = useParams()
const URL = import.meta.env.VITE_URL;
const [user, setUser] = useState(null)

const getUser = async () => {
    
    try {
        const response = await axios.get(`${URL}/${id}`)
        setUser(response.data)
    } catch {
        console.error(error);
    }
}

useEffect(() => {
    getUser()
}, [id])

    return (
        <div>
            {user? (
            <h1>Hello, {user.name}</h1>
            ) : (
            <p>Loading user data...</p>
            )}
        </div>
    )
}

export default User