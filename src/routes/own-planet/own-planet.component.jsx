import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SUN_DATA from "../../planet-configs/sunData";

import "./own-planet.styles.css";

//later add proper error handling of the input
const OwnPlanet = () => {
  const [planetName, setPlanetName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

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
          navigateTo("/info-page", { state: infoObject });
        } catch (error) {
          if (error.response.status === 502) {
            setError("sorry, the API is unreachable.");
          } else if (error.response.status !== 502 && error.response.status) {
            setError("sorry, an error occured.");
          }
        } finally {
          setIsLoading(false);
        }
      }
    }
    fetchData();
  };

  //feeling lucky button - randomizing output
  const handleSubmitRandom = () => {
    const randomNumber = Math.floor(Math.random() * 8) + 1;
    const options = {
      method: "GET",
      url: `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${randomNumber}`,
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
        "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      },
    };
    async function fetchData() {
      try {
        setError(null);
        const response = await axios.request(options);
        const infoObject = response.data;
        navigateTo("/info-page", { state: infoObject });
      } catch (error) {
        if (error.response.status === 502) {
          setError("sorry, the API is unreachable.");
        } else if (error.response.status !== 502 && error.response.status) {
          setError("sorry, an error occured.");
        }
      }
    }
    fetchData();
  };

  useEffect(() => {
    const container = document.querySelector(".planet-input-container");
    const focus = () => {
      inputRef.current.focus();
    };
    container.addEventListener("click", focus);
    return () => {
      container.removeEventListener("click", focus);
    };
  }, []);

  return (
    <>
      <div className="planets-site-container">
        <div className="random-cont">
          <button className="random-button" onClick={handleSubmitRandom}>
            feeling lucky?
          </button>
        </div>
        <form className="planet-input-container" onSubmit={handleSubmit} data-testid="form-planet">
          <label className="header-type" htmlFor="planetName">
            type in planet name
          </label>
          {isLoading && <p className="loading-text">Loading...</p>}
          {error && (
            <div role="alert" aria-live="assertive" className="error-text">
              {error}
            </div>
          )}
          <input
            data-testid="input-planet"
            className="input-api"
            type="text"
            name="planetName"
            value={planetName}
            onChange={handleChange}
            ref={inputRef}
            placeholder="planet name"
          />
          <button className="submit-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default OwnPlanet;
