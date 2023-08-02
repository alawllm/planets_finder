import { useLocation } from "react-router-dom";

import './info-page.styles.scss'

const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state
    console.log('passed data:', planetData)
    return (

        <>
            <div className="info-container">
                <h1> here is {planetData.name}</h1>
                <p>planet mass: {planetData.mass}</p>
                <p>radius: {planetData.radius}</p>
                <p>period: {planetData.period}</p>
                <p>temperature: {planetData.temperature}</p>
                <p>semi_major_axis: {planetData.semi_major_axis}</p>
            </div>
        </>
    )
}

export default InfoPage;