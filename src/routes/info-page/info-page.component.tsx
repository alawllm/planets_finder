import { useLocation } from "react-router-dom";

import InfoParagraph from "../../components/info-paragraph/info-paragraph.component";
import PLANET_PICS from "../../planet-configs/planetPics";

import "./info-page.styles.css";

type PlanetPic = {
  name: string;
  picUrl: string;
};

const InfoPage: React.FC = () => {
  let location = useLocation();
  const planetData = location.state;
  //images for the solar system
  let planetPic: PlanetPic | undefined = PLANET_PICS.find(
    (planet) => planet.name === planetData.name.toLowerCase()
  );

  return (
    <div className="info-container">
      <div className="left-part">
        <h1 className="info-header">here is {planetData.name}</h1>
        {
          <>
            {planetData.description && (
              <p className="bigger-info-text">{planetData.description}</p>
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
                content={`${planetData.basicDetails.volume}`}
              />
            )}
            {planetData.source && (
              <>
                <a href={planetData.wikiLink} className="info-text text-link">
                  source: {planetData.source}
                </a>
              </>
            )}
          </>
        }
      </div>
      <div className="right-part">
        <img
          className="planet-image"
          src={planetPic?.picUrl}
          alt={`${planetData.name}`}
        />
      </div>
    </div>
  );
};

export default InfoPage;
