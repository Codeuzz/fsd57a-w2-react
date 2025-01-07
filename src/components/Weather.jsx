import axios from "axios"
import { useState, useEffect } from "react"

const Weather = () => {
    const [city, setCity] = useState('Berlin')
    const [result, setResult] = useState(null)
    const [search, setSearch] = useState('Berlin')
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

    const getWeather = async () => {
        setCity(search)
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            setResult(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }

    

    return(
        <>
            <form 
            className="flex flex-col gap-3"
            onSubmit={(e) => {
                e.preventDefault()
                getWeather()
            }}
            >
                <label htmlFor="city-input">Type your city</label>
                <input 
                    type="text" 
                    className="text-black" 
                    placeholder="city" 
                    id="city-input"
                    onChange={e => setSearch(e.target.value)} 
                />
                <button type="submit">Submit</button>
            </form>
            <h1>Weather in {city} : {result && result.main.temp} degrees </h1>
        </>
        
    )
}

export default Weather