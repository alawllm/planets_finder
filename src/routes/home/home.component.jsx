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
            <h1>This is the home component</h1>
            <SolarSystem />
            <p onClick={onClick}>navigate info</p>
        </>
    )
}

export default Home;