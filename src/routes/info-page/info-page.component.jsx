import { useLocation } from "react-router-dom";
import InfoParagraph from "../../components/info-paragraph/info-paragraph.component";
import PLANET_PICS from "../../planet-configs/planetPics";
import "./info-page.styles.css";

const InfoPage = () => {
  let location = useLocation();
  const planetData = location.state;
  console.log(planetData);
  //images for the solar system
  let planetPic = PLANET_PICS.find(
    (planet) => planet.name === planetData.name.toLowerCase()
  );
  console.log(planetPic);
  //as the API did not provice pics, I provided them hardcoded
  if (!planetPic) {
    planetPic = {
      picUrl: "https://i.ibb.co/HVR0p4S/random.webp",
    };
  }
  return (
    <div className="info-container">
      <div className="left-part">
        <h1 className="info-header"> here is {planetData.name}</h1>
        {
          <>
            {planetData.description && (
              <InfoParagraph
                label={`${planetData.name}'s description`}
                content={`${planetData.description}`}
              />
            )}
            {planetData.basicDetails.mass && (
              <InfoParagraph
                label={`${planetData.name} weighs around`}
                content={`${planetData.basicDetails.mass} `}
              />
            )}
            {planetData.basicDetails.volume && (
              <InfoParagraph
                label={`${planetData.name}'s volume is around`}
                content={`${planetData.basicDetails.volume} `}
              />
            )}
          </>
        }
      </div>
      <div className="right-part">
        {planetPic && (
          <img
            className="planet-image"
            src={planetPic.picUrl}
            alt={`${planetData.name}`}
          />
        )}
      </div>
    </div>
  );
};

export default InfoPage;
