
import './solarsystem.styles.scss'

// solar system - later add background images 
//background-size: cover;

const SolarSystem = () => {
    return (
        <>
            <div className="solarsystem-container">
                <div className="sun" name="sun"></div>

                <div className="mercury-outline" name="mercury-outline">
                    <div className="mercury planet-child" name="mercury"></div>
                </div>

                <div className="venus-outline" name="venus-outline">
                    <div className="venus planet-child" name="venus"></div>
                </div>

                <div className="earth-outline" name="earth-outline">
                    <div className="earth planet-child" name="earth">
                        <div className="earth-circle">
                            <div className="earth-inner planet-child"></div>
                        </div>
                    </div>
                </div>

                <div className="mars-outline" name="mars-outline">
                    <div className="mars planet-child" name="mars"></div>
                </div>

                <div className="jupiter-outline" name="jupiter-outline">
                    <div className="jupiter planet-child" name="jupiter"></div>
                </div>

                <div className="saturn-outline" name="saturn-outline">
                    <div className="saturn planet-child" name="saturn"></div>
                </div>

                <div className="uranus-outline" name="uranus-outline">
                    <div className="uranus planet-child" name="uranus"></div>
                </div>

                <div className="neptune-outline" name="neptune-outline">
                    <div className="neptune planet-child" name="neptune"></div>
                </div>

            </div>
        </>
    )
}

export default SolarSystem;