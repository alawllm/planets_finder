import { useLocation } from "react-router-dom";
import PLANET_PICS from "../../utils/planetPics";

import './info-page.styles.css'

const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state
    console.log('passed data:', planetData)

    const planetPic = PLANET_PICS.find(planet => planet.name === planetData.name.toLowerCase())
    return (

        <>
            <div className="info-container">
                <div className="left-part">
                    <h1 className="info-header"> here is {planetData.name}</h1>
                    {planetData.mass && <>
                        <p className="info-text">{planetData.name} weighs around</p>
                        <p className="smaller-info-text"> {(planetData.mass * 318).toFixed(0)} times more than Earth.</p></>}
                    {planetData.radius && <>
                        <p className="info-text">{planetData.name}'s radius is around </p>
                        <p className="smaller-info-text">{(planetData.radius * 11).toFixed(0)} times Earth's radius.</p></>}
                    {planetData.period && <>
                        <p className="info-text"> Earth days {planetData.name} needs to make a full orbit:</p>
                        <p className="smaller-info-text"> {planetData.period}.</p></>}
                    {planetData.temperature && <>
                        <p className="info-text">{planetData.name}'s average temperature:</p>
                        <p className="smaller-info-text">{planetData.temperature} in Kelvin.</p></>}
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