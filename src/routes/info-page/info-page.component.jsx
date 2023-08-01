import { useLocation } from "react-router-dom";

const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state && location.state.planetData;
    console.log('passed data:', planetData)
    return (

        <>
            <h1>This is the Info Page</h1>
            <div>
                <p>planet data: {planetData}</p>
                {/* <p>radius: {data.radius}</p>
                <p>period [days]: {data.period}</p>
                <p>temperature: {data.temperature}</p>
                <p>distance from Earth: {data.distance_light_year}</p>
                <p>semi major axis: {data.semi_major_axis}</p>  */}
            </div>
        </>
    )
}

export default InfoPage;