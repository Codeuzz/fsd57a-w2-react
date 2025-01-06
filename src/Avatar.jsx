import { Link } from "react-router-dom"

const Avatar = ({name, email, id}) => {

    return (
        <li>
            <Link to={`/user/${id}`}>{name} </Link> 
            <p>Email: {email}</p>
        </li>
    )
}

export default Avatar