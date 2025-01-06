import Hello from './Hello'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Users from './components/Users'
import User from './components/User'

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hello />}></Route>
        <Route path='/hello' element={<Hello />}></Route>
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<User />} />

      </Routes>
    </div>
  )
}

export default App
