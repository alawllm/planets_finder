import SolarSystem from "../../components/Solar System/solarsystem.component";

import './home.styles.css'

const Home = () => {

    return (
        <div className="home-cont">
            <h1 className="home-text">Your home solar system</h1>
            <SolarSystem />
        </div>
    )
}

export default Home;