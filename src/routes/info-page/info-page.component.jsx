import { useLocation } from "react-router-dom";
import InfoParagraph from "../../components/InfoParagraph/info-paragraph.component";
import PLANET_PICS from "../../utils/planetPics";
import './info-page.styles.css'

const InfoPage = () => {
    let location = useLocation();
    const planetData = location.state

    //images for the solar system
    let planetPic = PLANET_PICS.find(planet => planet.name === planetData.name.toLowerCase())
    //as the API did not provice pics, I provided them hardcoded
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
                    {planetData.name.toLowerCase() !== "earth" &&
                        (<>
                            {
                                planetData.mass &&
                                <InfoParagraph
                                    label={`${planetData.name} weighs around`}
                                    content={`${(planetData.mass * 318).toFixed(2)} Earth's mass.`}
                                />
                            }

                            {planetData.radius &&
                                <InfoParagraph
                                    label={`${planetData.name} radius is around`}
                                    content={`${(planetData.radius * 11).toFixed(2)} Earth's radius.`}
                                />}

                            {planetData.period &&
                                <InfoParagraph
                                    label={`Earth days ${planetData.name} needs to make a full orbit:`}
                                    content={`${(planetData.period)}`}
                                />}

                            {planetData.temperature &&
                                <InfoParagraph
                                    label={`${planetData.name}'s average temperature:`}
                                    content={`${(planetData.temperature - 273)} °C`}
                                />}
                        </>
                        )}
                    {/* earth is a special case because the rest of the planets have earth as their reference  */}
                    {planetData.name.toLowerCase() === "earth" &&
                        (<>
                            {
                                planetData.mass &&
                                <InfoParagraph
                                    label={`Population:`}
                                    content={`8.1 Billion`}
                                />
                            }

                            {planetData.radius &&
                                <InfoParagraph
                                    label={`${planetData.name}'s radius is around`}
                                    content={"6.371 km"}
                                />}

                            {planetData.period &&
                                <InfoParagraph
                                    label={`Days ${planetData.name} needs to make a full orbit:`}
                                    content={`${(planetData.period)}`}
                                />}

                            {planetData.temperature &&
                                <InfoParagraph
                                    label={`${planetData.name}'s average temperature:`}
                                    content={`${(planetData.temperature) - 273} °C`}
                                />}
                        </>
                        )}
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