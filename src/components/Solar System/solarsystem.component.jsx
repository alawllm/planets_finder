import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Planet from '../Planet/planet.component';
import PlanetStatic from '../PlanetStatic/planetstatic.component';
import './solarsystem.styles.css'
import './animation.styles.css'

const SolarSystem = () => {
    const planetNames = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    const reversedNames = [...planetNames].reverse()
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
                    {reversedNames.map((planet) => (
                        <Planet
                            key={planet}
                            name={planet}
                            onClick={() => handleClick(planet)} />
                    ))}
                </div>
                <div className="show-on-small-screen">
                    {planetNames.map((planet) => (
                        <PlanetStatic
                            key={planet}
                            name={planet}
                            onClick={() => handleClick(planet)} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default SolarSystem;