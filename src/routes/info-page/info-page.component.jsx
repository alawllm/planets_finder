import { useLocation } from "react-router-dom";
import PLANET_PICS from "../../utils/planetPics";

import './info-page.styles.css'

const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state
    console.log('passed data:', planetData)
    console.log(PLANET_PICS)
    const planetPic = PLANET_PICS.find(planet => planet.name === planetData.name.toLowerCase())
    console.log('planet pic', planetPic)
    return (

        <>
            <div className="info-container">
                <div className="left-part">
                    <h1 className="info-header"> here is {planetData.name}</h1>
                    {planetData.mass &&
                        <p className="info-text">{planetData.name} weighs: {planetData.mass} Jupiters</p>}
                    {planetData.radius &&
                        <p className="info-text">{planetData.name}'s radius is: {planetData.radius} Jupiters</p>}
                    {planetData.period &&
                        <p className="info-text"> Earth days {planetData.name} needs to go a full orbit:
                            {planetData.period}</p>}
                    {planetData.temperature &&
                        <p className="info-text">temperature: {planetData.temperature} in Kelvin</p>}
                    {/* {planetData.semi_major_axis &&
                        <p className="info-text">semi_major_axis: {planetData.semi_major_axis}</p>} */}
                </div>
                <div className="right-part">
                    {planetPic && (<img className="planet-image"
                        src={planetPic.picUrl}
                        alt={`${planetData.name} photo`} />
                    )}</div>
            </div>
        </>
    )
}

export default InfoPage;