import axios from "axios"
import { useEffect, useState } from "react"

const Musics = () => {
    const [musics, setMusics] = useState([])
    const [newMusic, setNewMusic] = useState({ name: "", author: "", genre: "" });
    const musicUrl = 'http://localhost:8000/api/musics'
    const fetchMusics = async () => {

        try {
            const response = await axios.get(musicUrl)
            setMusics(response.data)
            console.log(musics)
        } catch(err) {
            console.error(err, 'couldnt fetch muics')
        }    
    }

    const addMusic = async () => {

        try {
            const response = await axios.post(musicUrl, newMusic)
            setMusics(prev => [
                    ...prev,
                    response.data
            ])
            setNewMusic({ name: "", author: "", genre: "" })
        } catch(error) {
            console.error(error, "error addMusic")
        }
    }

    useEffect(() => {
        fetchMusics()
    }, [])
    return (
        <div className="flex flex-col gap-7 mt-4 border-white rounded-xl border-2 p-5">
            <div className="flex flex-col">
                {musics && musics.map(music => <li key={music.id}>{music.name}</li>)}
            </div>
            <form 
                action="" 
                className="flex flex-col items-center gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    addMusic();
                }}
                >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={newMusic.name}
                    onChange={(e) => setNewMusic({ ...newMusic, name: e.target.value })}
                />
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    value={newMusic.author}
                    onChange={(e) => setNewMusic({ ...newMusic, author: e.target.value })}
                />
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    value={newMusic.genre}
                    onChange={(e) => setNewMusic({ ...newMusic, genre: e.target.value })}
                />
                <button type="submit" className="border-purple-600 border-2 px-3 rounded-lg hover:bg-purple-700 hover:text-white">Submit</button>
            </form>
        </div>

    )        
}

export default Musics