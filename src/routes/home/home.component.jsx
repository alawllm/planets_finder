import SolarSystem from "../../components/Solar System/solarsystem.component";
import { useNavigate } from "react-router-dom";

import './home.styles.scss'

const Home = () => {
    const navigateTo = useNavigate();

    const onClick = () => {
        navigateTo('/info-page')
    }
    return (
        <>
            <div className="home-cont">
                <SolarSystem />
            </div>
        </>
    )
}

export default Home;