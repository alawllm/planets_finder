import { useLocation } from "react-router-dom";
import InfoParagraph from "../../components/InfoParagraph/info-paragraph.component";
import PLANET_PICS from "../../utils/planetPics";

import './info-page.styles.css'



const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state
    console.log('passed data:', planetData)

    // let planetName = math.format(planetData.name, 'exponential');
    // let planetMass = math.format(planetData.mass, 'exponential');
    // let planetPeriod = math.format(planetData.period, 'exponential');
    // let planetTemperature = math.format(planetData.temperature, 'exponential');
    // console.log(planetName, planetMass, planetPeriod, planetTemperature)

    let planetPic = PLANET_PICS.find(planet => planet.name === planetData.name.toLowerCase())
    if (!planetPic) {
        planetPic = {
            picUrl: "https://img.volkskrant.nl/3a26315b5e670c336d1ba3bdf4142d2c2af9eff3/gelukkig-is-alles-op-proxima-centauri-nog-slechter-dan-hier"
        }
    }
    return (

        <>
            <div className="info-container">
                <div className="left-part">
                    <h1 className="info-header"> here is {planetData.name}</h1>


                    {planetData.mass &&
                        <InfoParagraph
                            label={`${planetData.name} weighs around`}
                            content={`${(planetData.mass * 318).toFixed(2)} times Earth's mass.`}
                        />}

                    {planetData.radius &&
                        <InfoParagraph
                            label={`${planetData.name} radius is around`}
                            content={`${(planetData.radius * 11).toFixed(2)} times Earth's radius.`}
                        />}

                    {planetData.period &&
                        <InfoParagraph
                            label={`Earth days ${planetData.name} needs to make a full orbit:`}
                            content={`${(planetData.period)}`}
                        />}

                    {planetData.temperature &&
                        <InfoParagraph
                            label={`${planetData.name}'s average temperature:`}
                            content={`${(planetData.temperature)} in Kelvin`}
                        />}

                </div>
                <div className="right-part">
                    {planetPic && (<img className="planet-image"
                        src={planetPic.picUrl}
                        alt={`${planetData.name}`} />
                    )}</div>
            </div>
        </>
    )
}

export default InfoPage;