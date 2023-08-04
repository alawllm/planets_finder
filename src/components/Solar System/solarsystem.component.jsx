import './solarsystem.styles.scss'

import Planet from '../Planet/planet.component';

const SolarSystem = () => {
    return (
        <>
            <div className="solarsystem-container">
                <div className="sun" name="sun"></div>

                <Planet
                    name="mercury"
                    size="20px"
                    sizeOutline="140px"
                    color="#db9898"
                    left="43%"
                    top="42%"
                    orbitAnimation="orbit1 5s linear infinite"
                />
                <Planet
                    name="venus"
                    size="40px"
                    sizeOutline="200px"
                    color="#7badb9"
                    left="40%"
                    top="42%"
                    orbitAnimation="orbit2 10s linear infinite"
                />

                <div className="earth-outline" name="earth-outline">
                    <div className="earth planet-child" name="earth">
                        <div className="earth-circle">
                            <div className="earth-inner planet-child"></div>
                        </div>
                    </div>
                </div>

                <Planet
                    name="mars"
                    size="30px"
                    sizeOutline="370px"
                    color="#da4b49"
                    left="46.5%"
                    top="46.5%"
                    orbitAnimation="orbit5 30s linear infinite"
                />
                <Planet
                    name="jupiter"
                    size="40px"
                    sizeOutline="430px"
                    color="#935fac"
                    left="45%"
                    top="45%"
                    orbitAnimation="orbit6 60s linear infinite"
                />
                <Planet
                    name="saturn"
                    size="50px"
                    sizeOutline="500px"
                    color="#bb7334"
                    left="45%"
                    top="45%"
                    orbitAnimation="orbit7 90s linear infinite"
                />
                <Planet
                    name="uranus"
                    size="30px"
                    sizeOutline="560px"
                    color="#385ac8"
                    left="48%"
                    top="48%"
                    orbitAnimation="orbit8 200s linear infinite"
                />
                <Planet
                    name="neptune"
                    size="20px"
                    sizeOutline="615px"
                    color="#6e799b"
                    left="48%"
                    top="48%"
                    orbitAnimation="orbit9 400s linear infinite"
                />

            </div>
        </>
    )
}

export default SolarSystem;