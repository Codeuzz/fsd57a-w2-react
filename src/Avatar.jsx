const Avatar = ({image, firstName, lastName}) => {

    return (
        <li>
            <img src={image} alt={`${firstName} ${lastName}`} />
            <p>{firstName} {lastName}</p>
        </li>
    )
}

export default Avatar