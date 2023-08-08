import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Planet, { PlanetStatic } from '../Planet/planet.component';
import './solarsystem.styles.css'
import './animation.styles.css'

const SolarSystem = () => {
    const planets = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    const navigateTo = useNavigate();

    const handleClick = (planetName) => {
        if (!planetName) return;

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
            }
        }
        fetchData();
    }
    return (
        <>
            <div className="solarsystem-container">
                <div className="hide-on-small-screen">
                    {planets.map((planet) => (
                        <Planet key={planet} name={planet} onClick={() => handleClick(planet)} />
                    ))}
                </div>
                <div className="show-on-small-screen">
                    {planets.map((planet) => (
                        <PlanetStatic key={planet} name={planet} onClick={() => handleClick(planet)} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default SolarSystem;