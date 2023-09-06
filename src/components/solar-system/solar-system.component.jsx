import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Planet from "../planet-desktop/planet-desktop.component";
import PlanetStatic from "../planet-mobile/planet-mobile.component";
import SUN_DATA from "../../planet-configs/sunData";

import "./solar-system.styles.css";
import "./animation.styles.css";

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(false);

  //array with planet names needed to show the name when hovered
  const planetNames = [
    "sun",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];
  //reversed array needed to render planet outline divs on the page in reversed order
  //in order for the planets to be clickable
  const reversedPlanetNames = [...planetNames].reverse();

  const navigateTo = useNavigate();

  const handleClick = (planetName) => {
    if (!planetName) return;

    //request to the API is made with the name of the clicked planet
    const options = {
      method: "GET",
      url: "https://planets-by-api-ninjas.p.rapidapi.com/v1/planets",
      params: { name: planetName },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
      },
    };

    async function fetchData() {
      //sun is not a star but I want it included for user experience, this is why it's a special case
      if (planetName === "sun") {
        navigateTo("/info-page", { state: SUN_DATA[0] });
      } else {
        try {
          const response = await axios.request(options);
          const infoObject = response.data[0];
          navigateTo("/info-page", { state: infoObject });
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  };

  //set state with the name of the hovered planet in order to be able to send API request
  const onHover = (planetName) => {
    setHoveredPlanet(planetName);
  };

  const onLeave = () => {
    setHoveredPlanet(null);
  };

  return (
    <>
      <div className="solarsystem-container">
        {/* animation of the solar system shows only on bigger devices  */}
        <div className="hide-on-small-screen">
          {reversedPlanetNames.map((planet) => (
            <>
              <Planet
                key={planet}
                name={planet}
                onClick={() => handleClick(planet)}
                onMouseEnter={() => onHover(planet)}
                onMouseLeave={onLeave}
                isHovered={hoveredPlanet === planet}
              />
            </>
          ))}
          {hoveredPlanet && <p className="planet-label">_{hoveredPlanet}_</p>}
        </div>
        {/* on smaller devices a linear sequence of the planets appears
                 for the purpose of better UX*/}
        <div className="show-on-small-screen">
          {planetNames.map((planet) => (
            <PlanetStatic
              key={planet}
              name={planet}
              onClick={() => handleClick(planet)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SolarSystem;
