import { useState, useEffect } from "react";
import './own-planet.styles.css'
import axios from "axios";

const OwnPlanet = () => {
    const [planetName, setPlanetName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [planetData, setPlanetData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
                params: { name: planetName.toLowerCase() },
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
                    'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data)
                setPlanetData(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
        setIsSubmitted(false)
    }, [isSubmitted])

    const handleChange = (evt) => {
        setPlanetName(evt.target.value)
    }

    const handleSubmit = () => {
        setIsSubmitted(true)
    }

    return (
        <>
            <div className="planet-input-container">
                <h1>Let's find your favorite planet</h1>
                {/* form for sending data to the API  */}
                <input type="text" name="planetName" value={planetName} onChange={handleChange} placeholder="planet name" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default OwnPlanet