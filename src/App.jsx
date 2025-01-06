import Hello from './Hello'
import './App.css'
import Avatar from './Avatar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
 const [users, setUsers] = useState(null)

 const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  } catch (error) {
    console.log(error)
  }
 }

 useEffect(() => {
  fetchData()
 }, [])

  return (
    <>
      <Hello />
      {users && users.map(user => (
        <Avatar key={user.id} {...user} />
      ))}
    </>
  )
}

export default App
