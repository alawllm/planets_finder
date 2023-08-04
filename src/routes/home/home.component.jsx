import SolarSystem from "../../components/Solar System/solarsystem.component";

import './home.styles.scss'

const Home = () => {

    return (
        <div className="home-cont">
            <h1>Your home solar system</h1>
            <SolarSystem />
        </div>
    )
}

export default Home;