import { useState, useEffect } from "react";
import './own-planet.styles.css'

const OwnPlanet = () => {
    const [planetName, setPlanetName] = useState('')
    useEffect(() => {
        //async function has to be wrapped into a non-async function
        //     async function getPlanet() {
        //         const response = await fetch(PLANET_API_URL);
        //         const jsonResponse = await response.json();
        //         const planet = jsonResponse.name;

        //     }
        //     getPlanet();
        // }, [planetName])

        const handleChange = (evt) => {
            setPlanetName(evt.target.value)
        }

        const handleSubmit = () => {
            console.log(planetName)
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

export default OwnPlanet;