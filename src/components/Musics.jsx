import axios from "axios"
import { useEffect, useState } from "react"

const Musics = () => {
    const [musics, setMusics] = useState([])
    const fetchMusics = async () => {

        try {
            const response = await axios.get('http://localhost:8000/api/musics')
            setMusics(response.data)
            console.log(musics)
        } catch(err) {
            console.error(err, 'couldnt fetch muics')
        }
        
    }

    useEffect(() => {
        fetchMusics()
    }, [])
    return (
        <>
        {musics && musics.map(music => <li key={music.id}>{music.name}</li>)}
        
        </>
    )
}

export default Musics