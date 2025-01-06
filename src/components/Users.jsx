import Avatar from "../Avatar"
import { useEffect, useState } from "react"
import axios from "axios"

function Users() {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const URL = import.meta.env.VITE_URL
    console.log(URL)
   
    const fetchData = async () => {
     try {
       const response = await axios.get(URL)
       setUsers(response.data)
     } catch (error) {
       console.log(error)
     } finally {
       setLoading(false)
     }
    }
   
    useEffect(() => {
     fetchData()
    }, [])
   
    if (loading) {
     return <p>Loading....</p>
   }

   return (
    <>
      {users && !loading && users.map(user => (
        <Avatar key={user.id} {...user} />
      ))}
    </>
  )
}

export default Users