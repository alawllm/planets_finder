import { useLocation } from "react-router-dom";

import './info-page.styles.css'

const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state
    console.log('passed data:', planetData)
    return (

        <>
            <div className="info-container">
                <div className="left-part">
                    <h1 className="info-header"> here is {planetData.name}</h1>
                    {planetData.mass &&
                        <p className="info-text">{planetData.name} weighs: {planetData.mass}</p>}
                    {planetData.radius &&
                        <p className="info-text">{planetData.name}'s radius is: {planetData.radius}</p>}
                    {planetData.period &&
                        <p className="info-text"> the time {planetData.name} needs to make full circle:
                            {planetData.period}</p>}
                    {planetData.temperature &&
                        <p className="info-text">temperature: {planetData.temperature}</p>}
                    {planetData.semi_major_axis &&
                        <p className="info-text">semi_major_axis: {planetData.semi_major_axis}</p>}
                </div>
                <div className="right-part"></div>
            </div>
        </>
    )
}

export default InfoPage;