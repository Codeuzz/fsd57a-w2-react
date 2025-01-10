import Hello from './Hello'
import './App.css'
import { Routes, Route } from 'react-router-dom'
   import Register from './components/Register'
   import Weather from './components/Weather'
   import Navbar from './components/NavBar'
  import Musics from './components/Musics'
  import Posts from './components/Posts'
 import Login from './components/Login'
import Users from './components/Users'


import User from './components/User'

function App() {


  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hello />}></Route>
        <Route path='/hello' element={<Hello />}></Route>
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/musics' element={<Musics />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<h1>404 page not found</h1>} />



      </Routes>
    </div>
  )
}

export default App
