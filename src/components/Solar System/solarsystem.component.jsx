import './solarsystem.styles.css'

import Planet, { PlanetStatic } from '../Planet/planet.component';

const SolarSystem = () => {
    // const navigateTo = useNavigate();

    // const onClick = () => {
    //     navigateTo('/info-page')
    // }
    return (
        <>
            <div className="solarsystem-container">
                <div className="hide-on-small-screen">
                    <Planet name="sun" />
                    <Planet name="mercury" />
                    <Planet name="venus" />

                    <div className="earth-outline" name="earth-outline">
                        <div className="earth planet-child" name="earth">
                            <div className="earth-circle">
                                <div className="earth-inner planet-child"></div>
                            </div>
                        </div>
                    </div>

                    <Planet name="mars" />
                    <Planet name="jupiter" />
                    <Planet name="saturn" />
                    <Planet name="uranus" />
                    <Planet name="neptune" />
                </div>
                <div className="show-on-small-screen">
                    <PlanetStatic name="sun" />
                    <PlanetStatic name="mercury" />
                    <PlanetStatic name="venus" />
                    <PlanetStatic name="earth" />
                    <PlanetStatic name="mars" />
                    <PlanetStatic name="jupiter" />
                    <PlanetStatic name="saturn" />
                    <PlanetStatic name="uranus" />
                    <PlanetStatic name="neptune" />
                </div>
            </div>

        </>
    )
}

export default SolarSystem;