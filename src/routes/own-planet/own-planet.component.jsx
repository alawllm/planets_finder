import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './own-planet.styles.css'


//later add proper error handling of the input
const OwnPlanet = () => {
    const [planetName, setPlanetName] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const navigateTo = useNavigate();

    const handleChange = (evt) => {
        setPlanetName(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!planetName) return;
        setIsLoading(true);

        const options = {
            method: 'GET',
            url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
            params: { name: planetName },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
                'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
            }
        };

        async function fetchData() {
            try {
                const response = await axios.request(options);
                const infoObject = response.data[0]
                console.log('response', infoObject)
                navigateTo('/info-page', { state: infoObject })
            } catch (error) {
                console.error(error);
                setIsLoading(false)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }

    return (
        <>
            <div className="planet-input-container">
                <h1 className="header-type">type in planet name</h1>
                {isLoading && <p>Loading...</p>}
                <input type="text" name="planetName" value={planetName} onChange={handleChange} placeholder="planet name" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default OwnPlanet