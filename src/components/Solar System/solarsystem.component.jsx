
import './solarsystem.styles.scss'

// solar system - later add background images 
//background-size: cover;

const SolarSystem = () => {
    return (
        <>
            <div className="cont">
                <div className="solarsystem-container">
                    <div className="sun" name="sun"></div>

                    <div className="mercury-outline" name="mercury-outline">
                        <div className="mercury" name="mercury"></div>
                    </div>

                    <div className="venus-outline" name="venus-outline">
                        <div className="venus" name="venus"></div>
                    </div>

                    <div className="earth-outline" name="earth-outline">
                        <div className="earth" name="earth">
                            <div className="earth-circle">
                                <div className="earth-inner"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mars-outline" name="mars-outline">
                        <div className="mars" name="mars"></div>
                    </div>

                    <div className="jupiter-outline" name="jupiter-outline">
                        <div className="jupiter" name="jupiter"></div>
                    </div>

                    <div className="saturn-outline" name="saturn-outline">
                        <div className="saturn" name="saturn"></div>
                    </div>

                    <div className="uranus-outline" name="uranus-outline">
                        <div className="uranus" name="uranus"></div>
                    </div>

                    <div className="neptune-outline" name="neptune-outline">
                        <div className="neptune" name="neptune"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SolarSystem;