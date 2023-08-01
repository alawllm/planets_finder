import { useState, useEffect } from "react";
import './own-planet.styles.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OwnPlanet = () => {
    const [planetName, setPlanetName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [planetData, setPlanetData] = useState({})

    const navigateTo = useNavigate();

    const handleChange = (evt) => {
        setPlanetName(evt.target.value)
    }

    const handleSubmit = async () => {
        setIsLoading(true)

        const options = {
            method: 'GET',
            url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
            params: { name: planetName },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
                'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const infoObject = response.data[0]
            console.log('response', infoObject)
            setPlanetData({
                name: infoObject.name,
                mass: infoObject.mass,
                radius: infoObject.radius,
                period: infoObject.period,
                semi_major_axis: infoObject.semi_major_axis,
                temperature: infoObject.temperature,
                distance_light_year: infoObject.distance_light_year
            })

            navigateTo('/info-page', { state: planetData })
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
            console.log('planetData:', planetData)

        }
    }

    return (
        <>
            <div className="planet-input-container">
                <h1>Let's find your favorite planet</h1>
                {isLoading && <p>Loading...</p>}
                <input type="text" name="planetName" value={planetName} onChange={handleChange} placeholder="planet name" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default OwnPlanet