import { useState, useEffect } from "react";
import './own-planet.styles.css'
import axios from "axios";

const OwnPlanet = () => {
    const [planetName, setPlanetName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [planetData, setPlanetData] = useState({
        mass: 0,
        radius: 0,
        period: 0,
        semi_major_axis: 0,
        temperature: 0,
        distance_light_year: 0
    })
    useEffect(() => {
        const fetchData = async () => {
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
                console.log('status', response.status)
                setPlanetData({
                    ...planetData,
                    mass: infoObject.mass,
                    radius: infoObject.radius,
                    period: infoObject.period,
                    semi_major_axis: infoObject.semi_major_axis,
                    temperature: infoObject.temperature,
                    distance_light_year: infoObject.distance_light_year
                })

            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

        console.log('planetData:', planetData)
        setIsSubmitted(false)
        setIsLoading(false)
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
                {isLoading && <p>Loading...</p>}
                <input type="text" name="planetName" value={planetName} onChange={handleChange} placeholder="planet name" />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default OwnPlanet