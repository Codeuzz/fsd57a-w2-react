import Hello from './Hello'
import './App.css'
import Avatar from './Avatar'

function App() {

  const users = [
    {
      image: "src/assets/free-nature-images (1).jpg",
      firstName: "jean",
      lastName: "jacques"
    },
    {
      image: "src/assets/MainAfter.jpg",
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
