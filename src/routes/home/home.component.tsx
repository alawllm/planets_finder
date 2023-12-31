import SolarSystem from "../../components/solar-system/solar-system.component";

import "./home.styles.css";

const Home: React.FC = () => {
  return (
    <div className="home-cont">
      <h1 className="home-text">Your home solar system</h1>
      <SolarSystem />
    </div>
  );
};

export default Home;
