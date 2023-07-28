import { Outlet } from "react-router-dom";
import SolarSystem from "../../components/Solar System/solarsystem.component";

const Home = () => {
    return (
        <>
            <h1>This is the home component</h1>
            <SolarSystem />
            <Outlet />
        </>
    )
}

export default Home;