import Hello from './Hello'
import './App.css'
import Avatar from './Avatar'

function App() {

  const users = [
    {
      image: "hihi.jpg",
      firstName: "jean",
      lastName: "jacques"
    },
    {
      image: "lala.jpg",
      firstName: "henry",
      lastName: "pierre"
    }
  ]

  return (
    <>
      <Hello />
      {users.map(user => (
        <Avatar key={user.firstName} {...user} />
      ))}
    </>
  )
}

export default App
