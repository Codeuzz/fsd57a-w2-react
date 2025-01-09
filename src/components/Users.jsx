import Avatar from "../Avatar"
import { useAppContext } from "../context/AppContext"

function Users() {
    const {users, error, loading} = useAppContext()
   
    if (loading) {
     return <p>Loading....</p>
   }

   if(error) {
    console.log(error)
    return <p>Error</p>
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