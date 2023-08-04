import './solarsystem.styles.scss'

import Planet from '../Planet/planet.component';

const SolarSystem = () => {
    // const navigateTo = useNavigate();

    // const onClick = () => {
    //     navigateTo('/info-page')
    // }
    return (
        <>
            <div className="solarsystem-container">
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
        </>
    )
}

export default SolarSystem;