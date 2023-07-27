import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>This is the home component</h1>
            <div>This will be the solar system component</div>
            <Outlet />
        </>
    )
}

export default Home;