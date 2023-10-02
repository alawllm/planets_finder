import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SUN_DATA from "../../planet-configs/sunData";
import PlanetDesktop from "../planet-desktop/planet-desktop.component";
import PlanetMobile from "../planet-mobile/planet-mobile.component";

import "./solar-system.styles.css";
import "./animation.styles.css";

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(false);
  const [error, setError] = useState(null);

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
    console.log(planetName);
    //request to the API is made with the name of the clicked planet
    const options = {
      method: "GET",
      url: `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${planetNames.indexOf(
        planetName
      )}`,
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };

    async function fetchData() {
      //sun is not a star but I want it included for user experience, this is why it's a special case
      if (planetName === "sun") {
        const infoObject = SUN_DATA;
        navigateTo("/info-page", { state: infoObject });
      } else {
        try {
          setError(null);
          const response = await axios.request(options);
          const infoObject = response.data;
          console.log(infoObject);
          navigateTo("/info-page", { state: infoObject });
        } catch (error) {
          if (error.response.status === 502) {
            setError("sorry, the API is unreachable.");
            setHoveredPlanet(null);
          } else if (error.response.status !== 502 && error.response.status) {
            setError("sorry, an error occured.");
            setHoveredPlanet(null);
          }
        }
      }
    }
    fetchData();
  };

  //set state with the name of the hovered planet in order to be able to send API request
  const onHover = (planetName) => {
    setHoveredPlanet(planetName);
    setError(null);
  };

  const onLeave = () => {
    setHoveredPlanet(null);
  };

  return (
    <>
      <div className="solarsystem-container" data-testid="solar-system-component">
        {/* animation of the solar system shows only on bigger devices  */}
        <div className="hide-on-small-screen">
          {reversedPlanetNames.map((planet) => (
            <PlanetDesktop
              key={planet}
              name={planet}
              onClick={() => handleClick(planet)}
              onMouseEnter={() => onHover(planet)}
              onMouseLeave={onLeave}
              isHovered={hoveredPlanet === planet}
            />
          ))}
          {error && <p className="error-text-solar-system">{error}</p>}
          {hoveredPlanet && <p className="planet-label">_{hoveredPlanet}_</p>}
        </div>
        {/* on smaller devices a linear sequence of the planets appears
        for the purpose of better UX*/}
        <div className="show-on-small-screen">
          {planetNames.map((planet) => (
            <PlanetMobile
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
