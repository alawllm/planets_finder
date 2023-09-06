import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SUN_DATA from "../../planet-configs/sunData";

import "./own-planet.styles.css";

//later add proper error handling of the input
const OwnPlanet = () => {
  const [planetName, setPlanetName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigateTo = useNavigate();

  const handleChange = (evt) => {
    setPlanetName(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

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
          if (response.data && response.data.length > 0) {
            const infoObject = response.data[0];
            navigateTo("/info-page", { state: infoObject });
          } else {
            setError("Planet not found");
          }
        } catch (error) {
          console.log("error:", error);
          setError("An error occured while fetching.");
          setIsLoading(false);
        } finally {
          setIsLoading(false);
        }
      }
    }
    fetchData();
  };

  //feeling lucky button - randomizing output
  const handleRandom = () => {
    const planetMass = Math.random() * 0.1;
    const planetOffset = Math.floor(Math.random() * 100);
    const options = {
      method: "GET",
      url: "https://planets-by-api-ninjas.p.rapidapi.com/v1/planets",
      params: { min_mass: planetMass, offset: planetOffset },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": "planets-by-api-ninjas.p.rapidapi.com",
      },
    };
    async function fetchData() {
      try {
        const response = await axios.request(options);
        if (response.data && response.data.length > 0) {
          const infoObject = response.data[0];
          navigateTo("/info-page", { state: infoObject });
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
    fetchData();
  };

  return (
    <>
      <div className="planets-site-container">
        <div className="random-cont">
          <button className="random-button" onClick={handleRandom}>
            Feeling lucky
          </button>
        </div>
        <div className="planet-input-container">
          <h1 className="header-type">type in planet name</h1>

          {isLoading && <p className="loading-text">Loading...</p>}
          {Error && <p className="error-text">{error}</p>}
          <input
            className="input-api"
            type="text"
            name="planetName"
            value={planetName}
            onChange={handleChange}
            placeholder="planet name"
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default OwnPlanet;
